export default function (scores) {
  const { math, word, excel } = scores;
  return Math.round((math + word + excel) / 3, 2);
}
