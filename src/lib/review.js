// Spaced review. A missed question comes back after 1 day, then 3, then 7.
// Answering it right moves it one step along; missing it starts it over.
// Items live on the device and (for signed-in users) sync to Supabase.

export const INTERVALS = [1, 3, 7]; // days until the next review, by step
export const REVIEW_BATCH = 10;     // questions per review session
const KEY = "zte-review";

// Local calendar day number, so "tomorrow" means tomorrow where the student is.
export function dayNum(date = new Date()) {
  return Math.floor((date.getTime() - date.getTimezoneOffset() * 60000) / 86400000);
}

// Small stable hash of the question text, so shuffled options never matter.
export function qHash(text) {
  let h = 5381;
  for (let i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

export const itemId = (lessonKey, q) => `${lessonKey}|${qHash(q)}`;

export function loadLocal() {
  try {
    const o = JSON.parse(localStorage.getItem(KEY) || "{}");
    return o && typeof o === "object" && !Array.isArray(o) ? o : {};
  } catch { return {}; }
}

export function saveLocal(items) {
  try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
}

// Returns a new items object after one answer.
export function recordAnswer(items, lessonKey, question, correct, today = dayNum()) {
  const id = itemId(lessonKey, question);
  const next = { ...items };
  const cur = next[id];
  const t = Date.now();
  if (!correct) {
    next[id] = { l: lessonKey, h: qHash(question), s: 0, d: today + INTERVALS[0], t };
  } else if (cur) {
    // Only advance an item that is actually due, so re-answering early cannot rush it.
    if (cur.d > today) return items;
    const s = cur.s + 1;
    if (s >= INTERVALS.length) delete next[id];
    else next[id] = { ...cur, s, d: today + INTERVALS[s], t };
  } else {
    return items;
  }
  return next;
}

// Merge two copies (device and server): the most recently touched entry wins,
// and an id missing on one side is treated as "not changed", never as a delete.
export function mergeItems(a, b) {
  const out = { ...a };
  for (const [id, v] of Object.entries(b || {})) {
    if (!out[id] || (v.t || 0) > (out[id].t || 0)) out[id] = v;
  }
  return out;
}

// Turns stored items into questions that still exist in the lesson data.
export function resolveDue(items, lessonData, today = dayNum(), limit = Infinity) {
  const out = [];
  for (const [id, it] of Object.entries(items)) {
    if (it.d > today) continue;
    const lesson = lessonData[it.l];
    const q = lesson && lesson.quiz.find(x => qHash(x.q) === it.h);
    if (q) out.push({ id, lessonKey: it.l, lessonTitle: lesson.title, due: it.d, q });
  }
  out.sort((x, y) => x.due - y.due);
  return out.slice(0, limit);
}

export function countDue(items, lessonData, today = dayNum()) {
  return resolveDue(items, lessonData, today).length;
}

// Drops items whose question no longer exists (content edits), so the count stays honest.
export function prune(items, lessonData) {
  const out = {};
  for (const [id, it] of Object.entries(items)) {
    const lesson = lessonData[it.l];
    if (lesson && lesson.quiz.some(x => qHash(x.q) === it.h)) out[id] = it;
  }
  return out;
}
