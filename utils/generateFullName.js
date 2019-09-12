export default function(student, autoGenerateMiddleName = false) {
    const { firstName, middleName, lastName, isMale } = student;
    const names = [lastName];
    if (!middleName && autoGenerateMiddleName) {
        names.push(isMale ? 'Minh': 'Thi Thu');
    } else {
        names.push(middleName);
    } 
    names.push(firstName);
    console.log(names.join(' '));
}