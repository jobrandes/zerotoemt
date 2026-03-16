export function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
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
