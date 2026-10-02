import { useState, useMemo } from "react";
import { shuffle } from "../lib/helpers";
import ReportLink from "./ReportLink";

// One review sitting: questions come from the student's missed list, one at a time.
// onAnswer(item, correct) is called once per question so the schedule can update.
export default function ReviewSession({ items, onAnswer, onExit }) {
  const deck = useMemo(() => items.map(it => {
    const correctText = it.q.options[it.q.answer];
    const options = shuffle(it.q.options);
    return { ...it, options, answer: options.indexOf(correctText) };
  }), [items]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [right, setRight] = useState(0);
  const [done, setDone] = useState(false);

  if (!deck.length) {
    return (
      <div className="zte-review-wrap">
        <h2 className="zte-content-heading">Nothing due</h2>
        <p className="zte-content-body">You are all caught up. Missed questions come back here when they are due.</p>
        <button className="zte-btn-primary" onClick={onExit}>Back</button>
      </div>
    );
  }

  if (done) {
    return (
      <div className="zte-review-wrap">
        <div className="zte-quiz-meta">REVIEW COMPLETE</div>
        <h2 className="zte-content-heading">{right} of {deck.length} right</h2>
        <p className="zte-content-body">
          {right === deck.length
            ? "Clean sweep. Those questions will come back later on a longer schedule."
            : "The ones you missed will come back tomorrow. Seeing them again is how they stick."}
        </p>
        <button className="zte-btn-primary" onClick={onExit}>Done</button>
      </div>
    );
  }

  const cur = deck[i];
  const last = i === deck.length - 1;

  function submit() {
    if (!answered) {
      const ok = picked === cur.answer;
      if (ok) setRight(r => r + 1);
      onAnswer(cur, ok);
      setAnswered(true);
    } else if (!last) {
      setI(i + 1); setPicked(null); setAnswered(false);
    } else {
      setDone(true);
    }
  }

  return (
    <div className="zte-review-wrap">
      <div className="zte-quiz-meta">REVIEW &middot; QUESTION {i + 1} OF {deck.length}</div>
      <div className="zte-progress-bar" style={{ marginBottom: 20 }}>
        <div className="zte-progress-fill" style={{ width: `${(i / deck.length) * 100}%` }} />
      </div>
      <div className="zte-review-from">From: {cur.lessonTitle}</div>
      <div className="zte-quiz-q">{cur.q.q}</div>
      <div className="zte-quiz-options">
        {cur.options.map((opt, k) => {
          let cls = "";
          if (answered) {
            if (k === cur.answer) cls = "correct";
            else if (k === picked) cls = "wrong";
          } else if (k === picked) cls = "selected";
          return (
            <button key={k} className={`zte-quiz-opt ${cls}`} disabled={answered}
              onClick={() => { if (!answered) setPicked(k); }}>{opt}</button>
          );
        })}
      </div>
      {answered && <div className="zte-explanation">{cur.q.explanation}</div>}
      {answered && <ReportLink where={"Review, lesson " + cur.lessonKey} question={cur.q.q} />}
      <button className="zte-btn-primary" disabled={picked === null}
        style={picked === null ? { opacity: 0.4, cursor: "not-allowed" } : {}} onClick={submit}>
        {answered ? (last ? "See Results \u2192" : "Continue \u2192") : "Check Answer \u2192"}
      </button>
      <button className="zte-btn-secondary" style={{ marginTop: 12 }} onClick={onExit}>Exit review</button>
    </div>
  );
}
