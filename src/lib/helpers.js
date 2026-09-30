// Fisher-Yates. (Sorting with a random comparator is biased: with 4 options the
// correct answer landed in the middle two slots about 70% of the time.)
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function shuffleQuiz(questions) {
  return shuffle(questions).map(q => {
    const correctText = q.options[q.answer];
    const shuffledOptions = shuffle(q.options);
    return { ...q, options: shuffledOptions, answer: shuffledOptions.indexOf(correctText) };
  });
}

export function pickQuiz(questions, n = 5) {
  return shuffleQuiz(shuffle(questions).slice(0, n));
}

export function calcProgress(completed, total) {
  return Math.round((completed.length / total) * 100);
}
