/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-console */
import printArray from '../utils/printArray';
/*
1. Tạo 1 đối tượng (object) nhân viên gồm name, birthDate, gender
Gợi ý: 
{
    name: hanh,
    gender: female,
    birthDate: '1990-06-24'
}
*/
const employee = {
  name: 'hanh',
  gender: 'female',
  birthDate: '1990-06-24',
};
/*

2. Thêm thuộc tính (field/property) vào cho đối tượng trên với kiểu dữ liệu là mảng để thể hiện skill của người này
Gợi ý: thêm field { skill: ['javascript', 'testing', 'automationUI'] }
*/
Object.assign(employee, { skill: ['javascript', 'testing', 'automationUI'] });
/*

3. Xoá thuộc tính name và thêm vào thuộc tính fullName
*/
delete employee.name;
Object.assign(employee, { fullName: 'Nguyen Thi Duc Hanh' });
/*

4. Dựa vào thuộc tính gender, thêm thuộc tính isMale có giá trị true/false
*/
Object.assign(employee, { isMale: employee.gender === 'male' });
/*

5. In ra danh sách những số lẻ có 2 chữ số chia hết cho 3 và 9 (*)
*/
const listNumber = [];
for (let i = 12; i < 99; i += 1) {
  if (i % 2 === 1 && (i % 3 === 0 || i % 9 === 0)) {
    listNumber.push(i);
  }
}

/*

6. In ra danh sách những số có index chẵn trong dãy số (*)
*/
for (let i = 0; i < listNumber.length; i += 2) {
  console.log(listNumber[i]);
}
/*

7. Tính tổng của dãy số (*) theo 2 cách (1 cách dùng hàm reduce, cách còn lại thoải mái)
*/
let sum1 = 0;
listNumber.forEach((i) => { sum1 += i; });
console.log(`Tong bang: ${sum1}`);

const sum2 = listNumber.reduce((sum, i) => {
  // eslint-disable-next-line no-param-reassign
  sum += i;
  return sum;
}, 0);
console.log(`Tong bang: ${sum2}`);
/*

8. Sắp xếp dãy số kể trên theo thứ tự giảm dần
*/
listNumber.sort((a, b) => b - a);
printArray(listNumber);
/*

9. Tính tích của 2 số lớn nhất và nhỏ nhất của dãy số trên
*/
const min = listNumber[listNumber.length - 1];
const max = listNumber[0];
console.log(`Tich dau duoi: ${min * max}`);
/*

10. Với kết quả của (*) lấy ra những số chỉ chia hết cho 3 và sắp xếp theo thứ tự giảm dần
*/
const ar = listNumber.filter((i) => i % 9 !== 0).sort((a, b) => b - a);
printArray(ar);
