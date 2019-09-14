export default function (student, autoGenerateMiddleName = false) {
  const { firstName, lastName, isMale } = student;
  let { middleName } = student;
  const names = [lastName];
  if (!middleName && autoGenerateMiddleName) {
    middleName = isMale ? 'Minh' : 'Thi Thu';
  }
  if (middleName) {
    names.push(middleName);
  }
  names.push(firstName);
  return names.join(' ');
}
