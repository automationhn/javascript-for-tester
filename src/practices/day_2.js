import logger, { newLine, newLineWithDash } from '../utils/logger';

/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/*
1. Tạo 1 đối tượng (object) nhân viên gồm name, birthDate, gender
Gợi ý: 
{
    name: hanh,
    gender: female,
    birthDate: '1990-06-24'
} */

const nhanVien = 
    {
        name: 'Hanh',
        gender: 'Female',
        birthDate: '1990-06-24'
    }

/*2. Thêm thuộc tính (field/property) vào cho đối tượng trên với kiểu dữ liệu là mảng để thể hiện skill của người này
Gợi ý: thêm field { skill: ['javascript', 'testing', 'automationUI'] } */
newLineWithDash();
logger('cau 2');
nhanVien.skill = ['javascript', 'testing', 'automationUI'];
logger(nhanVien)

/*3. Xoá thuộc tính name và thêm vào thuộc tính fullName */
newLineWithDash();
logger('cau 3');
delete nhanVien.name;
Object.assign (nhanVien, {fullname: 'Hanh Nguyen'});
logger(nhanVien)

/*4. Dựa vào thuộc tính gender, thêm thuộc tính isMale có giá trị true/false */
newLineWithDash();
logger('cau 4');
if(nhanVien.gender = 'Female'){
    nhanVien.isMale = true;
}
else{
    nhanVien.isMale = false;
}
logger(nhanVien);

/*5. In ra danh sách những số lẻ có 2 chữ số chia hết cho 3 và 9 (*) */
newLineWithDash();
logger('cau 5');
const number1 = [];
for (let i = 10; i <= 99; i++){
    if(i % 2 !== 0 && i % 3 === 0 | i % 9 === 0){
        number1.push(i);
    }
}
logger(number1);

/*6. In ra danh sách những số có index chẵn của dãy số (*) */

newLineWithDash();
logger('cau 6');
const soIndexChan = [];
for(let i = 0; i < number1.length; i++){
 if (i % 2 === 0){
    soIndexChan.push(number1[i]);
 }
}
logger(soIndexChan);


/*7. Tính tổng của dãy số (*) theo 2 cách (1 cách dùng hàm reduce, cách còn lại thoải mái)*/
newLineWithDash();
logger('cau 7');
function sum(a,b){
    return a + b;
}
const number1Total = number1.reduce(sum, 0);
logger("Total of array number1 - reduce = " + number1Total);
logger("------------------------")

const number1TotalNew = number1.forEach(sum, number1);
logger("Total of array number1 - other = " + number1TotalNew);

/*8. Sắp xếp dãy số (*) kể trên theo thứ tự giảm dần*/

/*9. Tính tích của 2 số lớn nhất và nhỏ nhất của dãy số (*)*/

/*10. Với kết quả của dãy số (*) lấy ra những số chỉ chia hết cho 3 và sắp xếp theo thứ tự giảm dần*/

