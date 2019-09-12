export default function(student, autoGenerateMiddleName = false) {
    let { firstName, middleName, lastName, isMale } = student;
    const names = [lastName];
    if (!middleName && autoGenerateMiddleName) {
        middleName = isMale ? 'Minh': 'Thi Thu';
    }
    middleName && names.push(middleName);
    names.push(firstName);
    return names.join(' ');
}