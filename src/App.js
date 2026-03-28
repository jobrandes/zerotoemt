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

function Model3DEmbed({ model }) {
  if (!model?.sketchfabId) return null;
  return (
    <div className="zte-model3d-block">
      <div className="zte-video-label">3D MODEL &mdash; rotate &amp; explore</div>
      <div className="zte-model3d-frame">
        <iframe
          title={model.caption || "3D Anatomy Model"}
          src={`https://sketchfab.com/models/${model.sketchfabId}/embed?autospin=0&autostart=0&ui_theme=dark&ui_infos=0&ui_watermark=0&ui_watermark_link=0`}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
        />
      </div>
      <div className="zte-video-caption">
        <span className="zte-video-source">3D</span>
        <span className="zte-video-caption-text">{model.caption} &mdash; drag to rotate, scroll to zoom</span>
      </div>
    </div>
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
  const [mediaOpen, setMediaOpen] = useState(null); // null | "video" | "model3d"
  const [tutorMessages, setTutorMessages] = useState([]);
  const [tutorInput, setTutorInput] = useState("");
  const [tutorLoading, setTutorLoading] = useState(false);
  const [tutorFollowUps, setTutorFollowUps] = useState([]);
  const [tutorLastStep, setTutorLastStep] = useState(null);
  const [devMode, setDevMode] = useState(false);
  const [lessonScores, setLessonScores] = useState({});
  const [showModuleComplete, setShowModuleComplete] = useState(false);
  const [reviewQueue, setReviewQueue] = useState(null);
  const [showReviewComplete, setShowReviewComplete] = useState(false);
  const reviewScoresRef = useRef({});
  const completedModuleRef = useRef(null);
  const quizStartScoreRef = useRef(null);

  // CSS loaded via App.css

  // Auth + progress sync
  useEffect(() => {
    // Step 1: Always load localStorage immediately  -  works for ALL users on ALL devices
    // This ensures auto-resume fires even before Supabase auth resolves
    try {
      const local = JSON.parse(localStorage.getItem("zte-progress") || "null");
      if (Array.isArray(local) && local.length > 0) {
        const valid = local.filter(k => LESSON_DATA[k]);
        setCompletedLessons([...new Set(valid)]);
      }
    } catch {}
    try {
      const localScores = JSON.parse(localStorage.getItem("zte-scores") || "{}");
      if (localScores && typeof localScores === "object") setLessonScores(localScores);
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
    const { data } = await supabase.from("progress").select("completed_lessons, lesson_scores").eq("user_id", userId).maybeSingle();
    const serverLessons = (data?.completed_lessons || []).filter(k => LESSON_DATA[k]);
    let localLessons = [];
    try { localLessons = (JSON.parse(localStorage.getItem("zte-progress") || "[]")).filter(k => LESSON_DATA[k]); } catch {}
    const merged = [...new Set([...serverLessons, ...localLessons])];
    setCompletedLessons(merged);
    try { localStorage.setItem("zte-progress", JSON.stringify(merged)); } catch {}
    const serverScores = data?.lesson_scores || {};
    let localScores = {};
    try { localScores = JSON.parse(localStorage.getItem("zte-scores") || "{}"); } catch {}
    const mergedScores = { ...localScores };
    for (const [k, v] of Object.entries(serverScores)) {
      if (mergedScores[k] === undefined || v > mergedScores[k]) mergedScores[k] = v;
    }
    setLessonScores(mergedScores);
    try { localStorage.setItem("zte-scores", JSON.stringify(mergedScores)); } catch {}
    await supabase.from("progress").upsert(
      { user_id: userId, completed_lessons: merged, lesson_scores: mergedScores, updated_at: new Date().toISOString() },
      { onConflict: "user_id" }
    );
  }

  async function saveProgress(lessons, scores) {
    try { localStorage.setItem("zte-progress", JSON.stringify(lessons)); } catch {}
    try { localStorage.setItem("zte-scores", JSON.stringify(scores || {})); } catch {}
    if (!user) return;
    await supabase.from("progress").upsert(
      { user_id: user.id, completed_lessons: lessons, lesson_scores: scores || {}, updated_at: new Date().toISOString() },
      { onConflict: "user_id" }
    );
  }

  useEffect(() => {
    // Only save after progress has been loaded - prevents empty [] from overwriting real data on mount
    if (!progressLoaded) return;
    if (user) saveProgress(completedLessons, lessonScores);
  }, [completedLessons, lessonScores, progressLoaded]);

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
    setMediaOpen(null);
    setFcIndex(0); setFcFlipped(false);
    setFcDeck(ld ? shuffle(ld.flashcards) : []);
    setQuizIndex(0); setQuizSelected(null); setQuizAnswered(false); setQuizScore(0); setQuizDone(false);
    quizStartScoreRef.current = null;
    const openedIsModQuiz = ld ? ld.id === (MODULES[mId]?.lessons.length ?? 99) : false;
    setQuizDeck(ld ? pickQuiz(ld.quiz, openedIsModQuiz ? 10 : 5) : []);
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

  const startReviewSession = (reviewList, modId, currentScores) => {
    if (!reviewList || reviewList.length === 0) return;
    const before = {};
    reviewList.forEach(l => { before[`${modId}-${l.id}`] = currentScores[`${modId}-${l.id}`] ?? null; });
    reviewScoresRef.current = before;
    const queue = reviewList.map(l => ({ id: l.id, title: l.title, moduleId: modId, priorScore: currentScores[`${modId}-${l.id}`] ?? null }));
    setReviewQueue({ lessons: queue, index: 0, exitConfirm: false });
    setShowModuleComplete(false);
    const first = queue[0];
    openLesson(modId, first.id);
    setTimeout(() => { quizStartScoreRef.current = currentScores[`${modId}-${first.id}`] ?? null; }, 0);
  };

  const advanceReviewQueue = (currentLessonScores) => {
    if (!reviewQueue) return false;
    const next = reviewQueue.index + 1;
    if (next < reviewQueue.lessons.length) {
      const nextItem = reviewQueue.lessons[next];
      setReviewQueue(prev => ({ ...prev, index: next, exitConfirm: false }));
      const prior = (currentLessonScores || {})[`${nextItem.moduleId}-${nextItem.id}`] ?? null;
      openLesson(nextItem.moduleId, nextItem.id);
      setTimeout(() => { quizStartScoreRef.current = prior; }, 0);
      return true;
    }
    setReviewQueue(null);
    setShowReviewComplete(true);
    return false;
  };

  const exitReviewSession = () => {
    // UX FIX: toggle confirm state instead of immediate exit
    setReviewQueue(prev => prev ? { ...prev, exitConfirm: !prev.exitConfirm } : null);
  };

  const confirmExitReviewSession = () => {
    setReviewQueue(null);
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
              <button className="zte-btn-reset" onClick={() => { setCompletedLessons([]); try { localStorage.removeItem("zte-progress"); } catch {} try { localStorage.removeItem("zte-scores"); } catch {} setLessonScores({}); }}>Reset Progress</button>
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
                <span className="zte-mpc-num">MODULE {mod.id}</span>
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
                <span className="zte-curr-mod-num">MODULE {mod.id}</span>
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

    const isModQuiz = lesson.id === MODULES[activeModuleId].lessons.length;
    const PASS_THRESHOLD = isModQuiz ? 8 : 4;
    const priorScore = lessonScores[lessonKey] ?? null;
    const wasFlagged = priorScore !== null && priorScore < PASS_THRESHOLD;

    const completeLesson = () => {
      if (!alreadyDone) {
        const updated = [...new Set([...completedLessons, lessonKey])];
        setCompletedLessons(updated);
        const allKeys = MODULES[activeModuleId].lessons.map(l => `${activeModuleId}-${l.id}`);
        if (allKeys.every(k => updated.includes(k))) {
          completedModuleRef.current = {
            mod: MODULES[activeModuleId],
            nextMod: MODULES[activeModuleId + 1] || null,
            overallProgress: Math.round((updated.length / Object.keys(LESSON_DATA).length) * 100),
            completedKeys: updated,
          };
          setShowModuleComplete(true);
        }
      }
    };

    const saveQuizScore = (score) => {
      const existing = lessonScores[lessonKey] ?? -1;
      if (score > existing) {
        const updated = { ...lessonScores, [lessonKey]: score };
        setLessonScores(updated);
        try { localStorage.setItem("zte-scores", JSON.stringify(updated)); } catch {}
      }
    };

    return (
      <div id="zte-root">
        <Nav showProgress />

        {showModuleComplete && completedModuleRef.current && (() => {
          const { mod: cMod, nextMod: cNext, overallProgress: cPct, completedKeys: cDone } = completedModuleRef.current;
          const lessonAnalysis = cMod.lessons.map(l => {
            const k = `${cMod.id}-${l.id}`;
            const mq = l.id === cMod.lessons.length;
            const maxQ = mq ? 10 : 5;
            const thresh = mq ? 8 : 4;
            const score = lessonScores[k] ?? null;
            const pct = score !== null ? Math.round((score / maxQ) * 100) : null;
            const isCompleted = cDone.includes(k);
            return { ...l, k, score, maxQ, pct,
              needsReview: isCompleted && (score === null || score < thresh),
              unscored: isCompleted && score === null,
            };
          });
          const reviewList = lessonAnalysis.filter(l => l.needsReview);
          const strongCount = lessonAnalysis.filter(l => l.score !== null && !l.needsReview).length;
          const completedCount = lessonAnalysis.filter(l => cDone.includes(l.k)).length;
          const scoredCount = lessonAnalysis.filter(l => l.score !== null).length;
          const headline = reviewList.length === 0
            ? completedCount === 0
              ? `Complete. Head into ${cNext ? cNext.title : 'your next chapter'} when you're ready.`
              : `Strong work -- solid scores across all ${strongCount} lessons.`
            : reviewList.length === 1
              ? `${strongCount} of ${completedCount} lessons are solid. One is worth a closer look.`
              : `${strongCount} of ${completedCount} lessons are solid. ${reviewList.length} are worth reviewing.`;
          return (
            <div className="zte-module-complete-overlay" onClick={() => setShowModuleComplete(false)}>
              <div className="zte-module-complete-modal" onClick={e => e.stopPropagation()}>
                <div className="zte-mc-confetti">
                  {[...Array(18)].map((_, i) => <span key={i} className="zte-mc-particle" style={{"--i": i}} />)}
                </div>
                <div className="zte-mc-badge" style={{background: cMod.accentColor}}>MODULE {cMod.id}</div>
                <div className="zte-mc-title">{cMod.title}</div>
                <div className="zte-mc-subtitle">COMPLETE</div>
                <div className="zte-mc-headline">{headline}</div>
                {reviewList.length > 0 && (
                  <div className="zte-mc-review-list">
                    {reviewList.map(l => (
                      <div key={l.k} className="zte-mc-review-item">
                        <div className="zte-mc-review-left">
                          <span className="zte-mc-review-dot" />
                          <div>
                            <div className="zte-mc-review-title">{l.title}</div>
                            <div className="zte-mc-review-score">{l.unscored ? "No score recorded -- review recommended" : `${l.score}/${l.maxQ} -- ${l.pct}%`}</div>
                          </div>
                        </div>
                        <button className="zte-mc-review-btn"
                          onClick={() => { setShowModuleComplete(false); const s = lessonScores[l.k] ?? null; openLesson(cMod.id, l.id); setTimeout(() => { quizStartScoreRef.current = s; }, 0); }}>
                          Review Lesson &rarr;
                        </button>
                      </div>
                    ))}
                    <div className="zte-mc-advice">These scored below 80% -- the NREMT threshold. Review now or come back anytime.</div>
                  </div>
                  <button className="zte-mc-review-session-btn" onClick={() => startReviewSession(reviewList, cMod.id, lessonScores)}>
                    Start Review Session &rarr;
                    <span className="zte-mc-review-session-count">{reviewList.length} {reviewList.length === 1 ? "lesson" : "lessons"} queued</span>
                  </button>
                )}
                <div className="zte-mc-progress-line">{cPct}% of full course complete</div>
                <div className="zte-mc-btns">
                  <button className="zte-btn-secondary" onClick={() => setShowModuleComplete(false)}>Stay Here</button>
                  {cNext
                    ? <button className="zte-mc-cta" onClick={() => { setShowModuleComplete(false); openLesson(cNext.id, cNext.lessons[0].id); }}>Start {cNext.title} &rarr;</button>
                    : <button className="zte-mc-cta" onClick={() => { setShowModuleComplete(false); setScreen("curriculum"); }}>View Full Curriculum &rarr;</button>
                  }
                </div>
              </div>
            </div>
          );
        })()}

        {showReviewComplete && completedModuleRef.current && (() => {
          const cMod = completedModuleRef.current.mod;
          const cNext = completedModuleRef.current.nextMod;
          const beforeScores = reviewScoresRef.current;
          const reviewedLessons = Object.keys(beforeScores).map(k => {
            const parts = k.split('-');
            const lId = parseInt(parts[1]);
            const lesson = cMod.lessons.find(l => l.id === lId);
            if (!lesson) return null;
            const mq = lId === cMod.lessons.length;
            const maxQ = mq ? 10 : 5;
            const thresh = mq ? 8 : 4;
            const before = beforeScores[k] ?? null;
            const after = lessonScores[k] ?? null;
            const cleared = after !== null && after >= thresh;
            const beforePct = before !== null ? Math.round((before / maxQ) * 100) : null;
            const afterPct = after !== null ? Math.round((after / maxQ) * 100) : null;
            return { id: lId, title: lesson.title, k, before, after, maxQ, thresh, cleared, beforePct, afterPct };
          }).filter(Boolean);
          const clearedCount = reviewedLessons.filter(l => l.cleared).length;
          const totalCount = reviewedLessons.length;
          const allCleared = clearedCount === totalCount;
          const noneCleared = clearedCount === 0;
          const verdict = allCleared
            ? 'All reviewed lessons cleared. Solid work.'
            : noneCleared
              ? 'None cleared yet -- keep at it. You can review again anytime.'
              : `${clearedCount} of ${totalCount} cleared. The rest are still flagged.`;
          return (
            <div className="zte-module-complete-overlay" onClick={() => setShowReviewComplete(false)}>
              <div className="zte-rc-modal" onClick={e => e.stopPropagation()}>
                <div className="zte-rc-header">
                  <div className="zte-rc-eyebrow" style={{background: cMod.accentColor}}>MODULE {cMod.id} REVIEW</div>
                  <div className="zte-rc-title">SESSION<br/>RESULTS</div>
                </div>
                <div className="zte-rc-list">
                  {reviewedLessons.map(l => (
                    <div key={l.k} className={`zte-rc-item ${l.cleared ? 'cleared' : 'flagged'}`}>
                      <div className="zte-rc-item-left">
                        <svg className={`zte-rc-icon ${l.cleared ? 'green' : 'red'}`} width="22" height="22" viewBox="0 0 22 22" fill="none">
                          <circle cx="11" cy="11" r="11" fill={l.cleared ? 'var(--green)' : 'var(--red)'} fillOpacity="0.12"/>
                          <circle cx="11" cy="11" r="10" stroke={l.cleared ? 'var(--green)' : 'var(--red)'} strokeWidth="1.5"/>
                          {l.cleared
                            ? <path d="M6.5 11l3 3 6-6" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            : <path d="M7.5 7.5l7 7M14.5 7.5l-7 7" stroke="var(--red)" strokeWidth="2" strokeLinecap="round"/>
                          }
                        </svg>
                        <div className="zte-rc-item-info">
                          <div className="zte-rc-item-title">{l.title}</div>
                          <div className="zte-rc-item-scores">
                            <span className="zte-rc-score-before">{l.before !== null ? `${l.before}/${l.maxQ} (${l.beforePct}%)` : 'no prior score'}</span>
                            <span className="zte-rc-arrow">&rarr;</span>
                            <span className={`zte-rc-score-after ${l.cleared ? 'green' : 'red'}`}>{l.after !== null ? `${l.after}/${l.maxQ} (${l.afterPct}%)` : '--'}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`zte-rc-badge ${l.cleared ? 'cleared' : 'flagged'}`}>{l.cleared ? 'CLEARED' : 'FLAGGED'}</div>
                    </div>
                  ))}
                </div>
                <div className="zte-rc-verdict">{verdict}</div>
                <div className="zte-rc-btns">
                  {!allCleared && (
                    <button className="zte-btn-secondary" onClick={() => setShowReviewComplete(false)}>Review Again Later</button>
                  )}
                  {cNext
                    ? <button className="zte-mc-cta" onClick={() => { setShowReviewComplete(false); openLesson(cNext.id, cNext.lessons[0].id); }}>Start {cNext.title} &rarr;</button>
                    : <button className="zte-mc-cta" onClick={() => { setShowReviewComplete(false); setScreen("curriculum"); }}>View Full Curriculum &rarr;</button>
                  }
                </div>
              </div>
            </div>
          );
        })()}

        <div className="zte-lesson-layout">
          {reviewQueue && (
            <div className="zte-review-banner">
              <div className="zte-review-banner-left">
                <span className="zte-review-banner-label">REVIEW SESSION</span>
                <span className="zte-review-banner-pos">Lesson {reviewQueue.index + 1} of {reviewQueue.lessons.length}</span>
                <div className="zte-review-banner-dots">
                  {reviewQueue.lessons.map((_, i) => (
                    <span key={i} className={`zte-review-dot ${i < reviewQueue.index ? "done" : i === reviewQueue.index ? "active" : ""}`} />
                  ))}
                </div>
              </div>
              {reviewQueue.exitConfirm ? (
                <div className="zte-review-exit-confirm">
                  <span className="zte-review-exit-prompt">Exit session?</span>
                  <button className="zte-review-exit-cancel" onClick={() => setReviewQueue(prev => ({...prev, exitConfirm: false}))}>Cancel</button>
                  <button className="zte-review-exit-yes" onClick={confirmExitReviewSession}>Exit</button>
                </div>
              ) : (
                <button className="zte-review-banner-exit" onClick={exitReviewSession}>Exit &times;</button>
              )}
            </div>
          )}
          <main className="zte-lesson-main">
            <div className="zte-lesson-main-header">
              <div className="zte-lesson-header-top">
                <div>
                  <div className="zte-lesson-breadcrumb">MODULE {mod.id} &middot; {mod.title}</div>
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
                    if (tab.key === "quiz") { quizStartScoreRef.current = lessonScores[lessonKey] ?? null; setQuizIndex(0); setQuizSelected(null); setQuizAnswered(false); setQuizScore(0); setQuizDone(false); setQuizDeck(pickQuiz(lesson.quiz, isModQuiz ? 10 : 5)); }
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
                  {devMode && (
                    <button className="zte-btn-dev-skip" onClick={() => {
                      unlockTab("lesson"); unlockTab("flashcards"); unlockTab("quiz");
                      quizStartScoreRef.current = lessonScores[lessonKey] ?? null;
                      setLessonTab("quiz");
                      setQuizIndex(0); setQuizSelected(null); setQuizAnswered(false);
                      setQuizScore(0); setQuizDone(false);
                      setQuizDeck(pickQuiz(lesson.quiz, isModQuiz ? 10 : 5));
                    }}>DEV: Skip to Quiz &rarr;</button>
                  )}
                </div>
              )}

              {lessonTab === "lesson" && (
                <div>
                  <div className="zte-progress-bar">
                    <div className="zte-progress-fill" style={{width: `${((lessonStep + 1) / lesson.content.length) * 100}%`}}/>
                  </div>
                  <h2 className="zte-content-heading">{lesson.content[lessonStep].heading}</h2>
                  <p className="zte-content-body">{renderBold(lesson.content[lessonStep].body)}</p>

                  {lessonStep === 0 && (lesson.video || lesson.model3d) && (
                    <div className="zte-media-card">
                      <div className="zte-media-card-header">
                        <span className="zte-media-card-label">Lesson Resources</span>
                        <div className="zte-media-card-btns">
                          {lesson.video && (
                            <button
                              className={`zte-media-btn zte-media-btn-video ${mediaOpen === "video" ? "open" : ""}`}
                              onClick={() => setMediaOpen(mediaOpen === "video" ? null : "video")}>
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
                              {mediaOpen === "video" ? "Close Video" : `Watch -- ${lesson.video.source || "Video"}`}
                            </button>
                          )}
                          {lesson.model3d && (
                            <button
                              className={`zte-media-btn zte-media-btn-3d ${mediaOpen === "model3d" ? "open" : ""}`}
                              onClick={() => setMediaOpen(mediaOpen === "model3d" ? null : "model3d")}>
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                              {mediaOpen === "model3d" ? "Close 3D" : "Explore 3D Model"}
                            </button>
                          )}
                        </div>
                      </div>
                      {mediaOpen && (
                        <div className="zte-media-content">
                          {mediaOpen === "video" && <VideoEmbed video={lesson.video} />}
                          {mediaOpen === "model3d" && <Model3DEmbed model={lesson.model3d} />}
                        </div>
                      )}
                    </div>
                  )}

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
                      : <button className="zte-btn-primary" onClick={() => { quizStartScoreRef.current = lessonScores[lessonKey] ?? null; unlockTab("quiz"); setLessonTab("quiz"); setQuizIndex(0); setQuizSelected(null); setQuizAnswered(false); setQuizScore(0); setQuizDone(false); setQuizDeck(pickQuiz(lesson.quiz, isModQuiz ? 10 : 5)); }}>Take Quiz &rarr;</button>
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
                      } else if (i === quizSelected) {
                        cls = "selected";
                      }
                      return (
                        <button key={i} className={`zte-quiz-opt ${cls}`} disabled={quizAnswered}
                          onClick={() => { if (!quizAnswered) setQuizSelected(i); }}>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {quizAnswered && (
                    <div className="zte-explanation">{quizDeck[quizIndex].explanation}</div>
                  )}
                  <button className="zte-btn-primary" disabled={quizSelected === null}
                    style={quizSelected === null ? {opacity:0.4,cursor:'not-allowed'} : {}}
                    onClick={() => {
                      if (!quizAnswered) {
                        if (quizSelected === quizDeck[quizIndex].answer) setQuizScore(s => s+1);
                        setQuizAnswered(true);
                      } else {
                        if (quizIndex < quizDeck.length - 1) { setQuizIndex(i => i+1); setQuizSelected(null); setQuizAnswered(false); }
                        else { saveQuizScore(quizScore); setQuizDone(true); }
                      }
                    }}>
                    {quizAnswered
                      ? (quizIndex < quizDeck.length - 1 ? "Continue ->" : "See Results ->")
                      : (quizIndex < quizDeck.length - 1 ? "Next Question ->" : "Submit Answer ->")
                    }
                  </button>
                </div>
              )}

              {lessonTab === "quiz" && quizDone && (() => {
                const startScore = quizStartScoreRef.current;
                const passing = quizScore >= PASS_THRESHOLD;
                const perfect = quizScore === quizDeck.length;
                const justCleared = startScore !== null && startScore < PASS_THRESHOLD && passing;
                const inReviewSession = reviewQueue !== null;
                const currentScores = { ...lessonScores, [lessonKey]: quizScore };

                const remainingFlags = (!inReviewSession && justCleared)
                  ? MODULES[activeModuleId].lessons.filter(l => {
                      const k = `${activeModuleId}-${l.id}`;
                      if (l.id === activeLessonId) return false;
                      const mq = l.id === MODULES[activeModuleId].lessons.length;
                      const thresh = mq ? 8 : 4;
                      const s = currentScores[k] ?? null;
                      return s !== null && s < thresh;
                    })
                  : [];
                const nextFlag = remainingFlags[0] || null;
                const hasNextInQueue = inReviewSession && (reviewQueue.index + 1) < reviewQueue.lessons.length;
                const nextInQueue = hasNextInQueue ? reviewQueue.lessons[reviewQueue.index + 1] : null;

                const statusIcon = perfect ? 'PERFECT' : passing ? 'PASS' : 'KEEP GOING';
                const statusMsg = inReviewSession
                  ? passing
                    ? justCleared ? 'Cleared -- 80% threshold met.' : 'Good work. Moving on.'
                    : 'Below 80% -- still flagged. Keep going or retake.'
                  : justCleared
                    ? perfect ? 'Perfect score -- and you cleared a flagged lesson.' : 'Cleared -- 80% threshold met.'
                    : perfect ? 'Perfect score!' : passing ? 'Good work. Review any misses.' : 'Not quite -- this lesson is worth another read.';

                return (
                <div className="zte-results">
                  <div className={`zte-results-icon${justCleared ? ' cleared' : ''}`}>{statusIcon}</div>
                  <div className="zte-results-title">
                    {inReviewSession && justCleared ? 'LESSON CLEARED'
                      : inReviewSession && !passing ? 'NOT QUITE YET'
                      : justCleared ? 'LESSON CLEARED'
                      : 'LESSON COMPLETE'}
                  </div>
                  <div className="zte-results-score">{quizScore}/{quizDeck.length}</div>
                  <div className="zte-results-msg">{statusMsg}</div>

                  {inReviewSession && !passing && (
                    <div className="zte-results-still-flagged">Still below 80% -- this lesson stays flagged. Retake or keep moving.</div>
                  )}
                  {!inReviewSession && justCleared && nextFlag && (
                    <div className="zte-results-next-flag">Still flagged: <strong>{nextFlag.title}</strong></div>
                  )}
                  {!inReviewSession && justCleared && !nextFlag && (
                    <div className="zte-results-all-clear">All flagged lessons in this module are cleared.</div>
                  )}

                  <div className="zte-results-btns">
                    <button className="zte-btn-secondary" onClick={() => { setQuizIndex(0); setQuizSelected(null); setQuizAnswered(false); setQuizScore(0); setQuizDone(false); quizStartScoreRef.current = lessonScores[lessonKey] ?? null; setQuizDeck(pickQuiz(lesson.quiz, isModQuiz ? 10 : 5)); }}>Retake Quiz</button>
                    <button className="zte-btn-tutor" onClick={() => { unlockTab("tutor"); setTutorMessages([]); setTutorFollowUps([]); setLessonTab("tutor"); }}>Ask AI Tutor</button>
                    {(() => {
                      if (inReviewSession) {
                        if (hasNextInQueue) {
                          return (
                            <div className="zte-review-next-btns">
                              <button className="zte-btn-primary" onClick={() => { completeLesson(); advanceReviewQueue(currentScores); }}>
                                Next: {nextInQueue.title} &rarr;
                              </button>
                              <button className="zte-btn-review-end" onClick={() => { completeLesson(); setReviewQueue(null); setShowReviewComplete(true); }}>
                                End Session
                              </button>
                            </div>
                          );
                        }
                        return (
                          <button className="zte-btn-primary" onClick={() => { completeLesson(); setReviewQueue(null); setShowReviewComplete(true); }}>
                            Review Complete &rarr;
                          </button>
                        );
                      }
                      if (justCleared && nextFlag) {
                        return <button className="zte-btn-primary" onClick={() => {
                          completeLesson();
                          const nextScore = currentScores[`${activeModuleId}-${nextFlag.id}`] ?? null;
                          openLesson(activeModuleId, nextFlag.id);
                          setTimeout(() => { quizStartScoreRef.current = nextScore; }, 0);
                        }}>Review {nextFlag.title} &rarr;</button>;
                      }
                      if (justCleared && !nextFlag) {
                        const nextMod = MODULES[activeModuleId + 1];
                        return nextMod
                          ? <button className="zte-btn-primary" onClick={() => { completeLesson(); openLesson(nextMod.id, nextMod.lessons[0].id); }}>Start {nextMod.title} &rarr;</button>
                          : <button className="zte-btn-primary" onClick={() => { completeLesson(); setScreen("curriculum"); }}>View Full Curriculum &rarr;</button>;
                      }
                      if (nextLesson) {
                        return <button className="zte-btn-primary" onClick={() => { completeLesson(); openLesson(nextLesson.mId, nextLesson.lId); }}>{nextLesson.mId !== activeModuleId ? `Start Module ${nextLesson.mId} ->` : 'Next Lesson ->'}</button>;
                      }
                      return <button className="zte-btn-primary" onClick={() => { completeLesson(); setScreen("curriculum"); }}>Back to Curriculum &rarr;</button>;
                    })()}
                  </div>
                </div>
                );
              })()}
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
