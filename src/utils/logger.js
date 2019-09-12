var logger = console.log.bind(console);
export default logger;

export function newLine() {
    logger('\n');
};