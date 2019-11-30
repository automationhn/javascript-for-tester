import logger from "./logger";

export default function (scores) {
  if (scores === undefined) {
    return 0;
  } 
  const { math, word, excel } = scores;
  if (typeof math === "number" && typeof word === "number" && typeof excel === "number") {
    return Math.round((math + word + excel) / 3, 2);
  }
  return 0;
}
