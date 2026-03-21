import { useState, useEffect, useRef } from "react";
import { supabase } from "./lib/supabase";
import { shuffle, pickQuiz } from "./lib/helpers";
import { MODULES, LESSON_DATA, TOTAL_LESSONS } from "./lessons/data";
import "./App.css";
import Auth from "./components/Auth";

function renderBold(text) {
  return text.split(/\*\*(.*?)\*\*/g).map((p, i) =>
    i % 2 === 1 ? <strong key={i}>{p}</strong> : p
  );
}

function VideoEmbed({ video }) {
  if (!video?.youtubeId) return null;
  return (
    <div className="zte-video-block">
      <iframe
        src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1&color=white`}
        title={video.caption || "Video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="zte-video-caption">
        <span className="zte-video-source">{video.source || "VIDEO"}</span>
        <span className="zte-video-caption-text">{video.caption}</span>
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("home");
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [activeLessonId, setActiveLessonId] = useState(null);
  const [lessonTab, setLessonTab] = useState("scenario");
  const [lessonStep, setLessonStep] = useState(0);
  const [fcIndex, setFcIndex] = useState(0);
  const [fcDeck, setFcDeck] = useState([]);
  const [fcFlipped, setFcFlipped] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizDeck, setQuizDeck] = useState([]);
  const [quizSelected, setQuizSelected] = useState(null);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [progressLoaded, setProgressLoaded] = useState(false);
  const autoNavigated = useRef(false);
  const [tabUnlocked, setTabUnlocked] = useState({ scenario: true, lesson: false, flashcards: false, quiz: false, tutor: true });
  const [tutorMessages, setTutorMessages] = useState([]);
  const [tutorInput, setTutorInput] = useState("");
  const [tutorLoading, setTutorLoading] = useState(false);
  const [tutorFollowUps, setTutorFollowUps] = useState([]);
  const [tutorLastStep, setTutorLastStep] = useState(null);

  // CSS loaded via App.css

  // Auth + progress sync
  useEffect(() => {
    // Step 1: Always load localStorage immediately  -  works for ALL users on ALL devices
    // This ensures auto-resume fires even before Supabase auth resolves
    try {
      const local = JSON.parse(localStorage.getItem("zte-progress") || "null");
      if (Array.isArray(local) && local.length > 0) {
        const valid = local.filter(k => LESSON_DATA[k]); // only keep real lesson keys
        setCompletedLessons([...new Set(valid)]);
      }
    } catch {}
    setProgressLoaded(true);

    // Step 2: Then check Supabase  -  if logged in, sync from server (server wins)
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) loadProgressFromServer(session.user.id);
      setAuthLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) loadProgressFromServer(session.user.id);
    });
    return () => subscription.unsubscribe();
  }, []);

  async function loadProgressFromServer(userId) {
    const { data } = await supabase.from("progress").select("completed_lessons").eq("user_id", userId).maybeSingle();
    // Merge server + local  -  keep union, but VALIDATE every key against real lesson data
    // This prevents corrupted/stale keys from showing false green checkmarks
    const serverLessons = (data?.completed_lessons || []).filter(k => LESSON_DATA[k]);
    let localLessons = [];
    try { localLessons = (JSON.parse(localStorage.getItem("zte-progress") || "[]")).filter(k => LESSON_DATA[k]); } catch {}
    const merged = [...new Set([...serverLessons, ...localLessons])];
    setCompletedLessons(merged);
    try { localStorage.setItem("zte-progress", JSON.stringify(merged)); } catch {}
    // Write validated merged set back to Supabase to clean up any corruption there too
    await supabase.from("progress").upsert(
      { user_id: userId, completed_lessons: merged, updated_at: new Date().toISOString() },
      { onConflict: "user_id" }
    );
  }

  async function saveProgress(lessons) {
    try { localStorage.setItem("zte-progress", JSON.stringify(lessons)); } catch {}
    if (!user) return;
    await supabase.from("progress").upsert(
      { user_id: user.id, completed_lessons: lessons, updated_at: new Date().toISOString() },
      { onConflict: "user_id" }
    );
  }

  useEffect(() => {
    // Only save after progress has been loaded - prevents empty [] from overwriting real data on mount
    if (!progressLoaded) return;
    if (user) saveProgress(completedLessons);
  }, [completedLessons, progressLoaded]);

  // Auto-resume on page load once progress is loaded
  useEffect(() => {
    if (!progressLoaded || autoNavigated.current) return;
    autoNavigated.current = true;
    const r = getResumeLesson();
    if (r) openLesson(r.mId, r.lId);
  }, [progressLoaded]);

  // Refresh tutor follow-ups when student moves to a different lesson section
  useEffect(() => {
    setTutorFollowUps([]);
    if (lessonTab === "tutor") setTutorLastStep(lessonStep);
  }, [lessonStep, lessonTab]);

  const builtLessons = Object.keys(LESSON_DATA).length;
  const progress = Math.round((completedLessons.length / builtLessons) * 100);
  // Derive display name: metadata first name -> full name first word -> null (don't show email slugs)
  const rawName = user?.user_metadata?.first_name
    || user?.user_metadata?.full_name?.split(" ")[0]
    || null;
  // Capitalize first letter
  const displayName = rawName
    ? rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase()
    : null;
  const isLessonCompleted = (mId, lId) => completedLessons.includes(`${mId}-${lId}`);
  const [devMode, setDevMode] = useState(false);

  const isLessonUnlocked = (mId, lId) => {
    if (devMode) return true;
    if (mId !== 0) return MODULES[0].lessons.every(l => isLessonCompleted(0, l.id));
    if (lId === 1) return true;
    return isLessonCompleted(mId, lId - 1);
  };
  const isModuleUnlocked = (mId) => {
    if (devMode) return true;
    if (mId === 0) return true;
    return MODULES[mId - 1].lessons.every(l => isLessonCompleted(mId - 1, l.id));
  };
  const isModuleCompleted = (mId) => MODULES[mId].lessons.every(l => isLessonCompleted(mId, l.id));

  const openLesson = (mId, lId) => {
    const ld = LESSON_DATA[`${mId}-${lId}`];
    setActiveModuleId(mId); setActiveLessonId(lId);
    setLessonTab("scenario"); setLessonStep(0);
    setFcIndex(0); setFcFlipped(false);
    setFcDeck(ld ? shuffle(ld.flashcards) : []);
    setQuizIndex(0); setQuizSelected(null); setQuizAnswered(false); setQuizScore(0); setQuizDone(false);
    setQuizDeck(ld ? pickQuiz(ld.quiz, ld.id === 6 ? 10 : 5) : []);
    setTabUnlocked({ scenario: true, lesson: false, flashcards: false, quiz: false, tutor: true });
    setTutorMessages([]);
    setTutorInput("");
    setTutorFollowUps([]);
    setTutorLastStep(null);
    setScreen("lesson");
  };

  const unlockTab = (tab) => setTabUnlocked(prev => ({ ...prev, [tab]: true }));
  const activeLesson = activeModuleId !== null && activeLessonId !== null ? LESSON_DATA[`${activeModuleId}-${activeLessonId}`] : null;
  const activeModule = activeModuleId !== null ? MODULES[activeModuleId] : null;

  const getResumeLesson = () => {
    for (const mod of MODULES) {
      for (const l of mod.lessons) {
        if (!isLessonCompleted(mod.id, l.id) && LESSON_DATA[`${mod.id}-${l.id}`]) {
          return { mId: mod.id, lId: l.id };
        }
      }
    }
    return null;
  };

  const getNextLesson = () => {
    if (!activeModule || !activeLesson) return null;
    const lessons = activeModule.lessons;
    const idx = lessons.findIndex(l => l.id === activeLessonId);
    if (idx < lessons.length - 1) {
      return { mId: activeModuleId, lId: lessons[idx + 1].id };
    }
    // Cross into next module if it has built content
    const nextMod = MODULES[activeModuleId + 1];
    if (nextMod) {
      const firstBuilt = nextMod.lessons.find(l => LESSON_DATA[`${nextMod.id}-${l.id}`]);
      if (firstBuilt) return { mId: nextMod.id, lId: firstBuilt.id };
    }
    return null;
  };

  const Footer = () => (
    <footer className="zte-footer">
      <div className="zte-footer-inner">
        <div className="zte-footer-logo">ZERO <span>TO</span> EMT</div>
        <div className="zte-footer-disclaimer">
          <strong>Educational Use Only.</strong> Zero to EMT is a free study preparation platform designed to help students prepare for EMT coursework and the NREMT certification exam. The content on this site is for educational and informational purposes only. It does not constitute medical advice, clinical guidance, or professional medical training. It is not a substitute for formal EMT certification, accredited coursework, or the judgment of a licensed medical professional. Zero to EMT is not affiliated with, endorsed by, or approved by the National Registry of Emergency Medical Technicians (NREMT) or any state EMS regulatory body. Always follow the protocols established by your training program and medical director.
        </div>
        <div className="zte-footer-copy">&copy; {new Date().getFullYear()} Zero to EMT &middot; Built for future EMTs &middot; Always free</div>
      </div>
    </footer>
  );

  const Nav = ({ showProgress = false }) => {
    // Always derive something to show - first name, or email prefix as last resort
    const navName = displayName || user?.email?.split("@")[0] || "";
    const hasProgress = completedLessons.length > 0;
    return (
    <nav className="zte-nav">
      <button className="zte-logo" onClick={() => setScreen("home")}>ZERO <span>TO</span> EMT</button>
      <div className="zte-nav-links">
        <button className={`zte-nav-link ${screen === "home" ? "active" : ""}`} onClick={() => setScreen("home")}>Home</button>
        <button className={`zte-nav-link ${screen === "curriculum" ? "active" : ""}`} onClick={() => setScreen("curriculum")}>Curriculum</button>
      </div>
      <div style={{display:"flex",gap:8,alignItems:"center",flexShrink:0}}>
        {navName && <span className="zte-nav-welcome">Hey, {navName}</span>}
        {showProgress ? (
          <button className="zte-btn-cta progress-btn" onClick={() => { const r = getResumeLesson(); if (r) openLesson(r.mId, r.lId); }}>
            <div className="zte-progress-mini"><div className="zte-progress-mini-fill" style={{width: `${progress}%`}}/></div>
            Continue ({progress}%)
          </button>
        ) : (
          <>
            <button className="zte-btn-cta" onClick={() => { const r = getResumeLesson(); openLesson(r ? r.mId : 0, r ? r.lId : 1); }}>
              {hasProgress ? `Continue (${progress}%)` : "Start Free ->"}
            </button>
            <button className="zte-btn-signout" onClick={() => supabase.auth.signOut()}>Sign Out</button>
            <button className={`zte-btn-devmode ${devMode ? "on" : ""}`} onClick={() => setDevMode(d => !d)} title="Toggle dev mode">{devMode ? "DEV ON" : "DEV"}</button>
          </>
        )}
      </div>
    </nav>
    );
  };

  // -- HOME --
  if (authLoading) return <div id="zte-root" style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh"}}><div style={{fontFamily:"Anton, sans-serif",fontSize:32,color:"#0f1f3d"}}>ZERO <span style={{color:"#e8193c"}}>TO</span> EMT</div></div>;
  if (!user) return <Auth />;

  if (screen === "home") return (
    <div id="zte-root">
      <Nav />
      <section className="zte-hero">
        <div className="zte-hero-left">
          <div className="zte-hero-eyebrow">{completedLessons.length > 0 ? `WELCOME BACK${displayName ? ", " + displayName.toUpperCase() : ""}` : "EMT CERTIFICATION PREP"}</div>
          <h1 className="zte-hero-title">ZERO<br/>TO<br/><span>EMT.</span></h1>
          <p className="zte-hero-desc">The only free, AI-powered platform built for people with zero medical background. Learn everything before your first EMT class even starts.</p>
          <div className="zte-hero-btns">
            <button className="zte-btn-hero-primary" onClick={() => { const r = getResumeLesson(); openLesson(r ? r.mId : 0, r ? r.lId : 1); }}>{completedLessons.length > 0 ? "CONTINUE LEARNING" : "START LEARNING FREE"}</button>
            <button className="zte-btn-hero-secondary" onClick={() => setScreen("curriculum")}>See Curriculum</button>
            {completedLessons.length > 0 && (
              <button className="zte-btn-reset" onClick={() => { setCompletedLessons([]); try { localStorage.removeItem("zte-progress"); } catch {} }}>Reset Progress</button>
            )}
          </div>
        </div>
        <div className="zte-hero-right">
          <div className="zte-hero-card">
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="9" height="9" rx="2"/><rect x="16" y="4" width="9" height="9" rx="2"/><rect x="3" y="17" width="9" height="9" rx="2"/><rect x="16" y="17" width="9" height="9" rx="2"/></svg>, num: "6", label: "Modules", sub: "Foundation through Operations" },
              { icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h18a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z"/><path d="M8 10h12M8 14h12M8 18h7"/></svg>, num: "40+", label: "Lessons", sub: "Each built around a real 911 call" },
              { icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="10" r="5"/><path d="M4 24c0-5.52 4.48-10 10-10s10 4.48 10 10"/><path d="M19 5l2 2-2 2"/></svg>, num: "AI", label: "Tutor", sub: "Built into every single lesson" },
              { icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3l2.5 8H24l-6.5 4.7 2.5 8L14 19.4 8 23.7l2.5-8L4 11h7.5z"/></svg>, num: "100%", label: "Free", sub: "No account. No credit card. Ever." },
            ].map((item, i) => (
              <div key={i} className="zte-hero-feature">
                <div className="zte-hero-feature-icon">{item.icon}</div>
                <div className="zte-hero-feature-text">
                  <div className="zte-hero-feature-num">{item.num} <span>{item.label}</span></div>
                  <div className="zte-hero-feature-sub">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="zte-stats-bar">
        {[["6","CORE MODULES"],["40+","LESSONS"],["5","NREMT DOMAINS"],["0","PRIOR KNOWLEDGE"],["Free","ALWAYS"]].map(([n,l],i) => (
          <div key={i} className="zte-stat">
            <div className="zte-stat-num">{n}</div>
            <div className="zte-stat-label">{l}</div>
          </div>
        ))}
      </div>
      <section className="zte-home-curriculum">
        <div className="zte-home-curriculum-header">
          <h2 className="zte-section-title">THE CURRICULUM</h2>
          <div className="zte-section-meta">NREMT-ALIGNED &middot; {TOTAL_LESSONS} LESSONS</div>
        </div>
        <div className="zte-module-grid">
          {MODULES.map(mod => (
            <div key={mod.id} className="zte-module-preview-card" style={{"--accent": mod.accentColor}}>
              <div className="zte-mpc-top">
                <span className="zte-mpc-code" style={{color: mod.accentColor, borderColor: mod.accentColor}}>{mod.code}</span>
                <span className="zte-mpc-num">MODULE 0{mod.id}</span>
              </div>
              <h3 className="zte-mpc-title">{mod.title}</h3>
              <p className="zte-mpc-desc">{mod.desc}</p>
              <div className="zte-mpc-footer">
                <span className="zte-mpc-count">{mod.lessons.length} lessons</span>
                {mod.id === 0 && <button className="zte-mpc-btn" onClick={() => openLesson(0,1)}>START HERE</button>}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );

  // -- CURRICULUM --
  if (screen === "curriculum") return (
    <div id="zte-root">
      <Nav />
      <div className="zte-curr-hero">
        <div className="zte-tagline-mono">FULL CURRICULUM</div>
        <h1 className="zte-curr-title">SIX MODULES.<br/>EVERYTHING YOU NEED.</h1>
        <p className="zte-curr-sub">Mapped to the NREMT's 5 domains plus a zero-knowledge Foundation module. Every lesson connects to your exam.</p>
      </div>
      <div className="zte-curr-grid">
        {MODULES.map(mod => {
          const unlocked = isModuleUnlocked(mod.id);
          const completed = isModuleCompleted(mod.id);
          return (
            <div key={mod.id} className={`zte-curr-card ${!unlocked ? "locked" : ""}`} style={{"--accent": mod.accentColor}}>
              <div className="zte-curr-card-top">
                <span className="zte-curr-code" style={{color: mod.accentColor, borderColor: mod.accentColor}}>{mod.code}</span>
                <span className="zte-curr-mod-num">MODULE 0{mod.id}</span>
              </div>
              <h3 className="zte-curr-card-title">{mod.title}</h3>
              <p className="zte-curr-card-desc">{mod.desc}</p>
              <div className="zte-curr-lessons">
                {mod.lessons.map(l => {
                  const lDone = isLessonCompleted(mod.id, l.id);
                  const lUnlocked = isLessonUnlocked(mod.id, l.id);
                  return (
                    <div key={l.id} className={`zte-curr-lesson-row ${lDone ? "done" : ""}`}>
                      <span className="zte-curr-lesson-dot" style={{background: lDone ? mod.accentColor : lUnlocked ? "#d1d5db" : "#e5e7eb"}}/>
                      <span className="zte-curr-lesson-name">{l.title}</span>
                      <span className="zte-curr-lesson-dur">{l.duration}</span>
                    </div>
                  );
                })}
              </div>
              <button className={`zte-curr-cta ${!unlocked ? "locked-btn" : ""}`}
                onClick={() => unlocked && openLesson(mod.id, mod.lessons[0].id)} disabled={!unlocked}>
                {!unlocked ? `Complete Module ${mod.id - 1} first` : completed ? "Review Module ->" : "Start Module ->"}
              </button>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );

  // -- LESSON --
  if (screen === "lesson" && activeLesson && activeModule) {
    const lesson = activeLesson;
    const mod = activeModule;
    const lessonKey = `${activeModuleId}-${activeLessonId}`;
    const alreadyDone = isLessonCompleted(activeModuleId, activeLessonId);
    const nextLesson = getNextLesson();

    const completeLesson = () => {
      if (!alreadyDone) {
        setCompletedLessons(prev => [...new Set([...prev, lessonKey])]);
      }
    };

    return (
      <div id="zte-root">
        <Nav showProgress />
        <div className="zte-lesson-layout">
          <main className="zte-lesson-main">
            <div className="zte-lesson-main-header">
              <div className="zte-lesson-header-top">
                <div>
                  <div className="zte-lesson-breadcrumb">MODULE 0{mod.id} &middot; {mod.title}</div>
                  <h1 className="zte-lesson-main-title">{lesson.title.toUpperCase()}</h1>
                </div>
                <div className="zte-lesson-switcher">
                  {mod.lessons.filter(l => LESSON_DATA[`${mod.id}-${l.id}`]).map(l => (
                    <button key={l.id}
                      className={`zte-switcher-btn ${l.id === activeLessonId ? "active" : ""}`}
                      onClick={() => isLessonUnlocked(mod.id, l.id) && openLesson(mod.id, l.id)}
                      disabled={!isLessonUnlocked(mod.id, l.id)}>
                      L{l.id}
                    </button>
                  ))}
                </div>
              </div>
              {/* Horizontal lesson progress strip */}
              <div className="zte-lesson-strip">
                {mod.lessons.map((l, idx) => {
                  const done = isLessonCompleted(mod.id, l.id);
                  const active = l.id === activeLessonId;
                  const unlocked = isLessonUnlocked(mod.id, l.id);
                  const isLast = idx === mod.lessons.length - 1;
                  return (
                    <div key={l.id} className="zte-strip-item">
                      <div className={`zte-strip-node ${done ? "done" : active ? "active" : !unlocked ? "locked" : "upcoming"}`}>
                        {done ? <span>&#10003;</span> : String(l.id).padStart(2,"0")}
                      </div>
                      <div className={`zte-strip-label ${active ? "active" : ""}`}>{l.title}</div>
                      {!isLast && <div className={`zte-strip-connector ${done ? "done" : ""}`}/>}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="zte-lesson-tabs">
              {[
                { key: "scenario", label: "Scenario", icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="1" width="11" height="11" rx="2"/><path d="M4 5h5M4 7.5h3"/><circle cx="9.5" cy="8.5" r="1.8"/><path d="M11 10l1 1"/></svg> },
                { key: "lesson", label: "Lesson", icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 1.5h9a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V2a.5.5 0 01.5-.5z"/><path d="M4 4.5h5M4 6.5h5M4 8.5h3"/></svg> },
                { key: "flashcards", label: "Flashcards", icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="9" height="7" rx="1.5"/><path d="M4 1.5h5"/><path d="M6.5 5.5v2M5.5 6.5h2"/></svg> },
                { key: "quiz", label: "Quiz", icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6.5" cy="6.5" r="5"/><path d="M6.5 3.5v3.5l2 1.5"/></svg> },
                { key: "tutor", label: "AI Tutor", icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6.5" cy="4.5" r="2.5"/><path d="M1.5 11.5c0-2.76 2.24-5 5-5s5 2.24 5 5"/><path d="M9 2l1 1-1 1"/></svg> },
              ].map(tab => (
                <button key={tab.key}
                  className={`zte-lesson-tab ${lessonTab === tab.key ? "active" : ""} ${!tabUnlocked[tab.key] ? "locked-tab" : ""}`}
                  onClick={() => {
                    if (!tabUnlocked[tab.key]) return;
                    if (tab.key === "quiz") { setQuizIndex(0); setQuizSelected(null); setQuizAnswered(false); setQuizScore(0); setQuizDone(false); setQuizDeck(pickQuiz(lesson.quiz, lesson.id === 6 ? 10 : 5)); }
                    if (tab.key === "flashcards") { setFcIndex(0); setFcFlipped(false); setFcDeck(shuffle(lesson.flashcards)); }
                    setLessonTab(tab.key);
                  }}>
                  {tab.icon}{tab.label}
                </button>
              ))}
            </div>
            <div className="zte-lesson-content">

              {lessonTab === "scenario" && (
                <div>
                  <div className="zte-dispatch-card">
                    <div className="zte-dispatch-badge">LIVE DISPATCH</div>
                    <div className="zte-dispatch-body">
                      <div className="zte-dispatch-line"><span className="zte-dispatch-key">DISPATCH:</span> <span className="zte-dispatch-val">{lesson.dispatch.call}</span></div>
                      <div className="zte-dispatch-line"><span className="zte-dispatch-key">TIME:</span> <span className="zte-dispatch-time">{lesson.dispatch.time}</span>&nbsp;&nbsp;<span className="zte-dispatch-key">ETA:</span> <span className="zte-dispatch-eta">{lesson.dispatch.eta}</span></div>
                    </div>
                    <div className="zte-dispatch-hook">{lesson.dispatch.hook}</div>
                  </div>
                  <h2 className="zte-scenario-bridge-head">BEFORE WE ANSWER THAT &mdash;</h2>
                  <p className="zte-scenario-bridge">{lesson.dispatch.bridge}</p>
                  <button className="zte-btn-primary" onClick={() => { unlockTab("lesson"); setLessonTab("lesson"); }}>Start the Lesson &rarr;</button>
                </div>
              )}

              {lessonTab === "lesson" && (
                <div>
                  <div className="zte-progress-bar">
                    <div className="zte-progress-fill" style={{width: `${((lessonStep + 1) / lesson.content.length) * 100}%`}}/>
                  </div>
                  {lessonStep === 0 && lesson.video && (
                    <div>
                      <div className="zte-video-label">Watch first &mdash; {lesson.video.duration || "short video"}</div>
                      <VideoEmbed video={lesson.video} />
                    </div>
                  )}
                  <h2 className="zte-content-heading">{lesson.content[lessonStep].heading}</h2>
                  <p className="zte-content-body">{renderBold(lesson.content[lessonStep].body)}</p>
                  <div className="zte-lesson-nav">
                    {lessonStep > 0 && <button className="zte-btn-secondary" onClick={() => setLessonStep(s => s-1)}>&larr; Prev</button>}
                    {lessonStep < lesson.content.length - 1
                      ? <button className="zte-btn-primary" onClick={() => setLessonStep(s => s+1)}>Next &rarr;</button>
                      : <button className="zte-btn-primary" onClick={() => { unlockTab("flashcards"); setLessonTab("flashcards"); setFcIndex(0); setFcFlipped(false); setFcDeck(shuffle(lesson.flashcards)); }}>Flashcards &rarr;</button>
                    }
                    <span className="zte-step-counter">{lessonStep + 1} / {lesson.content.length}</span>
                  </div>
                </div>
              )}

              {lessonTab === "flashcards" && fcDeck.length > 0 && (
                <div>
                  <div className="zte-fc-wrap">
                    <div className={`zte-fc-card ${fcFlipped ? "flipped" : ""}`} onClick={() => setFcFlipped(f => !f)} style={{height: 240}}>
                      <div className="zte-fc-face zte-fc-front">
                        <div className="zte-fc-label">Question</div>
                        <div className="zte-fc-text">{fcDeck[fcIndex].front}</div>
                        <div className="zte-fc-hint">tap to flip</div>
                      </div>
                      <div className="zte-fc-face zte-fc-back">
                        <div className="zte-fc-label">Answer</div>
                        <div className="zte-fc-text">{fcDeck[fcIndex].back}</div>
                      </div>
                    </div>
                  </div>
                  <div className="zte-fc-controls">
                    <button className="zte-btn-secondary" disabled={fcIndex === 0} onClick={() => { setFcIndex(i => i-1); setFcFlipped(false); }}>&larr; Prev</button>
                    <span className="zte-fc-counter">{fcIndex + 1} / {fcDeck.length}</span>
                    {fcIndex < fcDeck.length - 1
                      ? <button className="zte-btn-primary" onClick={() => { setFcIndex(i => i+1); setFcFlipped(false); }}>Next &rarr;</button>
                      : <button className="zte-btn-primary" onClick={() => { unlockTab("quiz"); setLessonTab("quiz"); setQuizIndex(0); setQuizSelected(null); setQuizAnswered(false); setQuizScore(0); setQuizDone(false); setQuizDeck(pickQuiz(lesson.quiz, lesson.id === 6 ? 10 : 5)); }}>Take Quiz &rarr;</button>
                    }
                  </div>
                </div>
              )}

              {lessonTab === "quiz" && quizDeck.length > 0 && !quizDone && (
                <div>
                  <div className="zte-quiz-meta">QUESTION {quizIndex + 1} OF {quizDeck.length}</div>
                  <div className="zte-progress-bar" style={{marginBottom: 24}}>
                    <div className="zte-progress-fill" style={{width: `${(quizIndex / quizDeck.length) * 100}%`}}/>
                  </div>
                  <div className="zte-quiz-q">{quizDeck[quizIndex].q}</div>
                  <div className="zte-quiz-options">
                    {quizDeck[quizIndex].options.map((opt, i) => {
                      let cls = "";
                      if (quizAnswered) {
                        if (i === quizDeck[quizIndex].answer) cls = "correct";
                        else if (i === quizSelected) cls = "wrong";
                      }
                      return (
                        <button key={i} className={`zte-quiz-opt ${cls}`} disabled={quizAnswered}
                          onClick={() => { setQuizSelected(i); setQuizAnswered(true); if (i === quizDeck[quizIndex].answer) setQuizScore(s => s+1); }}>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {quizAnswered && (
                    <>
                      <button className="zte-btn-primary" onClick={() => {
                        if (quizIndex < quizDeck.length - 1) { setQuizIndex(i => i+1); setQuizSelected(null); setQuizAnswered(false); }
                        else setQuizDone(true);
                      }}>{quizIndex < quizDeck.length - 1 ? "Next Question ->" : "See Results ->"}</button>
                      <div className="zte-explanation">{quizDeck[quizIndex].explanation}</div>
                    </>
                  )}
                </div>
              )}

              {lessonTab === "quiz" && quizDone && (
                <div className="zte-results">
                  <div className="zte-results-icon">{quizScore === quizDeck.length ? "PERFECT" : quizScore >= 3 ? "PASS" : "KEEP GOING"}</div>
                  <div className="zte-results-title">LESSON COMPLETE</div>
                  <div className="zte-results-score">{quizScore}/{quizDeck.length}</div>
                  <div className="zte-results-msg">{quizScore === quizDeck.length ? "Perfect score!" : quizScore >= 3 ? "Good work. Review any misses." : "Review the lesson again."}</div>
                  <div className="zte-results-btns">
                    <button className="zte-btn-secondary" onClick={() => { setQuizIndex(0); setQuizSelected(null); setQuizAnswered(false); setQuizScore(0); setQuizDone(false); setQuizDeck(pickQuiz(lesson.quiz, lesson.id === 6 ? 10 : 5)); }}>Retake Quiz</button>
                    <button className="zte-btn-tutor" onClick={() => { unlockTab("tutor"); setTutorMessages([]); setTutorFollowUps([]); setLessonTab("tutor"); }}>Ask AI Tutor</button>
                    {nextLesson
                      ? <button className="zte-btn-primary" onClick={() => { completeLesson(); openLesson(nextLesson.mId, nextLesson.lId); }}>{nextLesson.mId !== activeModuleId ? `Start Module ${nextLesson.mId} ->` : "Next Lesson ->"}</button>
                      : <button className="zte-btn-primary" onClick={() => { completeLesson(); setScreen("curriculum"); }}>Back to Curriculum &rarr;</button>
                    }
                  </div>
                </div>
              )}
              {lessonTab === "tutor" && (() => {
                // Determine tutor context based on where student is
                const prevTab = tabUnlocked.quiz && quizDone ? "quiz-done"
                  : tabUnlocked.quiz ? "post-quiz-open"
                  : tabUnlocked.flashcards ? "post-lesson"
                  : tabUnlocked.lesson ? "mid-lesson"
                  : "scenario";

                const contextLabel = {
                  "scenario": `You're at the dispatch scenario`,
                  "mid-lesson": `You're on section ${lessonStep + 1} of ${lesson.content.length}: "${lesson.content[lessonStep].heading}"`,
                  "post-lesson": `You've finished the lesson content`,
                  "post-quiz-open": `You've started the quiz`,
                  "quiz-done": `You scored ${quizScore}/${quizDeck.length} on the quiz`,
                }[prevTab];

                const suggestions = {
                  "scenario": [
                    `What's actually happening in this dispatch call?`,
                    `What should I be thinking about before we arrive on scene?`,
                    `What does this lesson cover and why does it matter?`,
                  ],
                  "mid-lesson": [
                    `Can you explain "${lesson.content[lessonStep].heading}" in simpler terms?`,
                    `Give me a real example of this on an actual call.`,
                    `What's the most important thing to remember from this section?`,
                  ],
                  "post-lesson": [
                    `Summarize the key points before I take the quiz.`,
                    `Quiz me on this lesson  -  one question at a time.`,
                    `What from this lesson is most likely to appear on the NREMT exam?`,
                  ],
                  "post-quiz-open": [
                    `Help me understand any concepts I'm unsure about.`,
                    `What should I focus on before finishing the quiz?`,
                    `Quiz me on ${lesson.title}  -  one question at a time.`,
                  ],
                  "quiz-done": quizScore === quizDeck.length ? [
                    `What should I know beyond what this lesson covered?`,
                    `How does ${lesson.title} connect to what comes next?`,
                    `Give me a harder question to really test my understanding.`,
                  ] : [
                    `Can you explain what I might have got wrong?`,
                    `Walk me through the trickiest concepts in this lesson.`,
                    `Quiz me again  -  one question at a time.`,
                  ],
                }[prevTab];

                const situationContext = {
                  "scenario": `The student just opened the lesson and is reading the dispatch scenario. They haven't started the lesson content yet.`,
                  "mid-lesson": `The student is on section ${lessonStep + 1} of ${lesson.content.length}: "${lesson.content[lessonStep].heading}". Content: ${lesson.content[lessonStep].body.slice(0, 200)}...`,
                  "post-lesson": `The student has finished reading all lesson content and is about to take the quiz.`,
                  "post-quiz-open": `The student has started the quiz but hasn't finished it yet.`,
                  "quiz-done": `The student just completed the quiz and scored ${quizScore} out of ${quizDeck.length}. ${quizScore < 3 ? "They struggled  -  focus on reinforcing the core concepts." : quizScore === quizDeck.length ? "They got a perfect score  -  they can go deeper." : "They did okay but have some gaps to fill."}`,
                }[prevTab];

                return (
                <div className="zte-tutor-panel">
                  <div className="zte-tutor-header">
                    <div className="zte-tutor-title">AI Tutor</div>
                    <div className="zte-tutor-context-row">
                      <span className="zte-tutor-context">{contextLabel}</span>
                    </div>
                  </div>

                  <div className="zte-tutor-messages">
                    {tutorMessages.length > 0 && tutorLastStep !== null && tutorLastStep !== lessonStep && (
                      <div className="zte-tutor-context-changed">
                        You moved to section {lessonStep + 1}: <strong>"{lesson.content[lessonStep].heading}"</strong>  -  I'm up to date.
                      </div>
                    )}
                    {tutorMessages.length === 0 && (
                      <div className="zte-tutor-suggestions">
                        <div className="zte-tutor-suggest-label">
                          {prevTab === "quiz-done" && quizScore < quizDeck.length ? "Let's work on what you missed:" :
                           prevTab === "quiz-done" ? "Perfect score  -  go deeper:" :
                           prevTab === "post-lesson" ? "Ready to review before the quiz?" :
                           prevTab === "mid-lesson" ? "Stuck on something? Ask me:" :
                           "Where do you want to start?"}
                        </div>
                        {suggestions.map((s, i) => (
                          <button key={i} className="zte-tutor-chip" onClick={() => setTutorInput(s)}>{s}</button>
                        ))}
                      </div>
                    )}
                    {tutorMessages.map((msg, i) => (
                      <div key={i} className={`zte-tutor-msg ${msg.role}`}>
                        <div className="zte-tutor-msg-label">{msg.role === "user" ? "You" : "AI Tutor"}</div>
                        <div className="zte-tutor-msg-text">{msg.content}</div>
                      </div>
                    ))}
                    {tutorFollowUps.length > 0 && !tutorLoading && (
                      <div className="zte-tutor-followups">
                        <div className="zte-tutor-suggest-label">Keep going:</div>
                        {tutorFollowUps.map((s, i) => (
                          <button key={i} className="zte-tutor-chip followup" onClick={() => { setTutorInput(s); setTutorFollowUps([]); }}>{s}</button>
                        ))}
                      </div>
                    )}
                    {tutorLoading && (
                      <div className="zte-tutor-msg assistant">
                        <div className="zte-tutor-msg-label">AI Tutor</div>
                        <div className="zte-tutor-typing"><span/><span/><span/></div>
                      </div>
                    )}
                  </div>

                  <div className="zte-tutor-input-row">
                    <input
                      className="zte-tutor-input"
                      type="text"
                      placeholder="Ask anything about this lesson..."
                      value={tutorInput}
                      onChange={e => setTutorInput(e.target.value)}
                      onKeyDown={e => { if (e.key === "Enter" && tutorInput.trim() && !tutorLoading) sendTutorMessage(situationContext); }}
                    />
                    <button className="zte-tutor-send" disabled={!tutorInput.trim() || tutorLoading} onClick={() => sendTutorMessage(situationContext)}>
                      {tutorLoading ? "..." : "Send ->"}
                    </button>
                  </div>
                  <div className="zte-tutor-disclaimer">AI Tutor is for learning only. Always follow your training program and medical director's protocols.</div>
                  <div className="zte-tutor-nav">
                    {nextLesson
                      ? <button className="zte-btn-primary" onClick={() => { completeLesson(); openLesson(nextLesson.mId, nextLesson.lId); }}>{nextLesson.mId !== activeModuleId ? `Start Module ${nextLesson.mId} ->` : "Next Lesson ->"}</button>
                      : <button className="zte-btn-primary" onClick={() => { completeLesson(); setScreen("curriculum"); }}>Back to Curriculum &rarr;</button>
                    }
                  </div>
                </div>
                );
              })()}

            </div>
          </main>
        </div>
      </div>
    );

    async function sendTutorMessage(situationContext = "") {
      const userText = tutorInput.trim();
      if (!userText) return;
      const newMessages = [...tutorMessages, { role: "user", content: userText }];
      setTutorMessages(newMessages);
      setTutorInput("");
      setTutorLoading(true);
      setTutorFollowUps([]);

      const lessonContext = `
LESSON: ${lesson.title}
SUBTITLE: ${lesson.subtitle}

LESSON CONTENT:
${lesson.content.map(b => `## ${b.heading}\n${b.body}`).join("\n\n")}

KEY TERMS (from flashcards):
${lesson.flashcards.map(f => `Q: ${f.front} -> A: ${f.back}`).join("\n")}
      `.trim();

      const systemPrompt = `You are an AI Tutor for Zero to EMT, a free platform helping adults with no medical background prepare for their EMT course and the NREMT certification exam.

You have deep knowledge of emergency medical services, EMT scope of practice, and the NREMT exam.

Your job is to help the student understand the current lesson content. Be encouraging, clear, and concise. Use plain language  -  this student is a working adult with no medical background preparing for their first EMT class.

CURRENT LESSON CONTEXT:
${lessonContext}

STUDENT'S CURRENT SITUATION:
${situationContext}

Use this to inform your response  -  be proactive about what they likely need right now.

RULES:
- Stay focused on EMT education and this lesson's content
- Never give personal medical advice or diagnose conditions
- If asked about real medical situations, redirect to EMS protocols and proper training
- Use examples and analogies to make concepts stick
- If the student seems confused, break things down further
- Keep responses focused and under 200 words unless a detailed explanation is truly needed
- Always remind them that real clinical judgment comes from their formal training program

CRITICAL FORMAT RULE:
At the very end of EVERY response, after a blank line, you MUST include this exact block with no variation:

FOLLOWUPS:
1. [follow-up, max 10 words]
2. [follow-up, max 10 words]
3. [follow-up, max 10 words]

The word FOLLOWUPS must be in all-caps followed by a colon. Each item must start with a number and period. This block will be parsed and removed from the display  -  the student will only see it as clickable buttons, not text. Make the follow-ups specific to what was just discussed, progressively deeper, and written as things the student would naturally want to ask next.`;

      try {
        const response = await fetch("/.netlify/functions/tutor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system: systemPrompt,
            messages: newMessages.map(m => ({ role: m.role, content: m.content }))
          })
        });
        const data = await response.json();
        const fullReply = data.content?.[0]?.text || "Sorry, I couldn't get a response. Try again.";

        // Split reply from follow-ups  -  handle any whitespace variation
        const followupSplit = fullReply.split(/\n+FOLLOWUPS:\n/);
        const replyText = followupSplit[0].trim();
        const followUps = [];
        if (followupSplit[1]) {
          const lines = followupSplit[1].trim().split("\n");
          lines.forEach(line => {
            const match = line.match(/^\d+\.\s+(.+)$/);
            if (match) followUps.push(match[1].trim());
          });
        }
        // Fallback: if split didn't work, try finding FOLLOWUPS anywhere in text
        if (followUps.length === 0 && fullReply.includes("FOLLOWUPS:")) {
          const idx = fullReply.indexOf("FOLLOWUPS:");
          const afterBlock = fullReply.slice(idx + 10).trim();
          afterBlock.split("\n").forEach(line => {
            const match = line.match(/^\d+\.\s+(.+)$/);
            if (match) followUps.push(match[1].trim());
          });
          // Remove the FOLLOWUPS block from the display text
          const cleanReply = fullReply.slice(0, idx).trim();
          setTutorMessages(prev => [...prev, { role: "assistant", content: cleanReply }]);
          setTutorFollowUps(followUps.slice(0, 3));
          return;
        }

        setTutorMessages(prev => [...prev, { role: "assistant", content: replyText }]);
        setTutorFollowUps(followUps.slice(0, 3));
      } catch {
        setTutorMessages(prev => [...prev, { role: "assistant", content: "Connection error. Check your internet and try again." }]);
      } finally {
        setTutorLoading(false);
      }
    }
  }

  return null;
}
