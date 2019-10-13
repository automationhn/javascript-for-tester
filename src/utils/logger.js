/* eslint-disable no-console */
const logger = console.log.bind(console);
export default logger;

export function newLine(char) {
  const data = char !== undefined ? `\n${char}\n` : '\n';
  logger(data);
}

export function newLineWithDash() {
  logger('\n----------------------------\n');
}
