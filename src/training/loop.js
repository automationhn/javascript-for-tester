/* eslint-disable func-names */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-array-constructor */
/* eslint-disable prefer-template */
/* eslint-disable no-console */
/* eslint-disable eol-last */
import logger, { newLine, newLineWithDash } from '../utils/logger';
import studentList from '../practices/data/studentList';

/*
Cho 1 mảng, thực hiện mọi hàm dùng để truy xuất và tương tác với mảng đó.
Tuỳ vào mỗi nhu cầu mà mình sử dụng cách tương tác với mảng khác nhau

1. Xuất ra danh sách tên sinh viên
*/

const studentNames_1 = [];
for (let i = 0; i < studentList.length; i++) {
  const student = studentList[i];
  studentNames_1.push(`${student.firstName} ${student.lastName}`);
}
logger('Cách 1: dùng for: ' + studentNames_1);

/*
Cách viết đầy đủ của map:
const studentNames_2 = studentList.map((e) => {
  return `${e.firstName} ${e.lastName}`;
});
*/
const studentNames_2 = studentList.map(e => `${e.firstName} ${e.lastName}`); // single line: cách viết ngắn của map
logger('Cách 2: dùng map: ' + studentNames_2);

const studentNames_3 = studentList.reduce((result, e) => {
  result.push(`${e.firstName} ${e.lastName}`);
  return result;
}, []);
logger('Cách 3: dùng reduce: ' + studentNames_3);
newLineWithDash();
/*
=> với trường hợp này map là lựa chọn hợp lý nhất, mình chỉ cần lấy data từ array,
ko cần sàng lọc hay tìm kiếm theo điều kiện gì, số phần tử trả ra bằng với phần tử nhận vào
*/

/*
2. Tìm sinh viên theo Id (điều kiện mang tính duy nhất, có nhiều nhất 1 element duy nhất thoả)
-> Do id là duy nhất (unique) thì khi mình loop qua hết tất cả các phần tử trong array
thì cũng chỉ tìm được đúng 1 element duy nhất
Có nhiều cách để làm nhưng find là cách tốt nhất vì khi tìm đc element thoả điều kiện thì vòng loop sẽ dừng lại
*/
function getNameById(id) {
  // const student = studentList.find(e => e.id === id); // single line
  const student = studentList.find(e => {
    return e.id === id; // chỉ return điều kiện tìm kiếm, nếu thoả điều kiện thì element tại lúc đó sẽ đc return, ko return object đó ra
  });
  return `${student.firstName} ${student.lastName}`
}
logger('Câu 2: ' + getNameById(16));
newLineWithDash();

/*
3. Tìm sinh viên giới tính nam (điều kiện chung, có hơn 1 element thoả)
-> Do isMale là điều kiện chung, có thể có nhiều element thoả nên dùng find sẽ bị thiếu, để tìm hết đc mình nên dùng filter
For/ForEach/Reduce trong trường hợp này đều có thể sử dụng nhưng filter là cách tối ưu nhất
*/

function getMaleStudent() {
  // const students = studentList.filter(e => e.isMale); 
  // single line, với so sách true/false có thể viết gọn lại 
  // e.isMale tương tứng e.isMale === true
  // nếu ngược lại dùng !
  // e.isMale !== true hoặc e.isMale === false hoặc !e.isMale
  const students = studentList.filter(e => {
    return e.isMale === true; // chỉ return điều kiện tìm kiếm, nếu thoả điều kiện thì element tại lúc đó sẽ đc return, ko return object đó ra
  });
  return students; 
}
// Function này trả về array cách element có field isMale là true, do mình cần danh sách tên cách name sinh viên
// Phải loop qua danh sách sinh viên nam 1 lần nữa để lấy tên
const maleStudents = getMaleStudent();
const nameOfMaleStudent = maleStudents.map(e => `${e.firstName} ${e.lastName}`);
logger('Câu 3: ' + nameOfMaleStudent);
newLine();
// Để gọn nhất, vừa lấy được nam sinh viên và trả ra cả tên sinh viên, chỉ loop qua array 1 lần thôi
// -> dùng reduce là tối ưu nhất, reduce có thể loop qua array, kiểm tra điều kiện và format, 
// tính toán lại thêm logic trong lúc loop qua array

function getMaleStudentByReduce() {
  return studentList.reduce((listName, e) => {
    if (e.isMale === true) {
      listName.push(`${e.firstName} ${e.lastName}`);
    }
    return listName;
  }, []);
}
logger('Câu 3 sử dụng reduce: ' + getMaleStudentByReduce());

newLineWithDash();

/*
BẢN CHẤT CỦA MỌI FUNCTION LÀM VIỆC VỚI ARRAY ĐỀU LÀ LOOP (CHẠY QUA TẤT CẢ CÁC PHẦN TỬ TRONG ARRAY)
TUỲ VÀO NHU CẦU MÀ MÌNH CHỌN PHƯƠNG THỨC PHÙ HỢP NHẤT ĐỂ DÙNG
FIND - FILTER - MAP - REDUCE thực chất đều là biến thể của FOR/FOREACH
*/