/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/**
 * Follow the list of student below, try to get and print to the console the student(s) that satified the conditions:
 * 
 * 1. Print the list of student with the full-name (fistname lastName)
 *  Expectation:
 *      Nguyen Minh Nhat
 *      Nguyen Thi Duc Hanh
 *      Tran Thoai
 *      Huynh Hao
 *      Do Tai
 * 
 * 2. Print the list of student with the full-name by this format firstName middleName lastName, if the middleName is undefined, use the gender to populate the middle name:
 * Ex: 
 * {
        id: 16,
        firstName: 'Nhat',
        lastName: 'Nguyen',
        middleName: 'Minh',
        birthdate: '1990-01-21',
        isMale: true,
        scores: {
            math: 5,
            word: 6,
            excel: 9
        }
    } -> Nguyen Minh Nhat

    {
        id: 56,
        firstName: 'Thoai',
        lastName: 'Tran',
        birthdate: '1993-11-25',
        isMale: false, // middleName is Thi
        scores: {
            math: 6,
            word: 6,
            excel: 6
        }
    } -> Tran Thi Thoai

    {
        id: 4,
        firstName: 'Hao',
        lastName: 'Huynh',
        birthdate: '1985-06-09',
        isMale: true, // middleName is Minh
        scores: {
            math: 9,
            word: 9,
            excel: 9
        }
    } -> Huynh Minh Hao

*   Expectation:
*      Nguyen Minh Nhat
*      Nguyen Thi Duc Hanh
*      Tran Thi Thoai
*      Huynh Minh Hao
*      Do Thi Tai

    3. Print the student has the avarage score is highest and lowest as format:
    Expectation:
        The best student is Nguyen Van A with 9.5 score
        The worst student is Nguyen Van B with 3.3 score

    4. Sort the list of student by the id with 2 way Acending and Descending and print it out with the id and average score only
    Expectation:
        Nhat - 6.9
        Hanh - 7.0
        Hao - 8.9
        Thoai - 9.0
        Tai - 10

    5. Print out the list of student (full fields) without the best and the worst student
    Expectation:
        Hanh - 7.0
        Hao - 8.9
        Thoai - 9.0

    6. Print the student has the age is highest and lowest as format:
    Ex:
        The youngest: Nguyen Van A - 25 year olds
        The youngest: Nguyen Van B - 100 year olds

 */

import { orderBy } from 'lodash';

import generateFullName from '../utils/generateFullName';
import calculateAverageScore from '../utils/calculateAverageScore';
import logger, { newLine } from '../utils/logger';

import studentList from '../data/studentList';

/* --- ĐÁP ÁN --- */

// Câu 1
logger('=== CÂU 1 ===');
newLine();
// Cách 1: Dùng for thuần, giống như những ví dụ trước giờ mình đã học nên sẽ dễ nắm bắt hơn

logger('--- CÁCH 1 ---');
for (let i = 0; i < studentList.length; i += 1) {
  // khởi tao biến student với từ khoá const bởi student chỉ dùng để lấy thông tin của sinh viên tương ứng với mỗi index i
  const student = studentList[i];
  // khởi tạo biến fullName với từ khoá let bởi biến này sẽ thay đổi giá trị khi ta cộng chuỗi họ tên và tên lót vào
  // đầu tiên ta gán fullName bằng với lastName do mình muốn bắt đầu từ họ trước 
  let fullName = student.lastName;
  // kiểm tra thử giá trị của middleName có được định nghĩa với mỗi student hay ko để tiếp tục tạo tên đầy đủ cho sinh viên
  // nếu middleName có tồn tại mình gắn thêm nó tiếp vào fullName nếu không tồn tại mình bỏ qua
  if (student.middleName !== undefined) { // mình có thề kiểm tra middleName có khác undefined hay ko theo cách sau if(!student.middleName) -> cách viết ngắn gọn của dòng code hiện tại
    fullName = `${fullName} - ${student.middleName}`;
  }
  // cuối cùng nối firstName vào để hoàn thành tên đầy đủ
  fullName = `${fullName} - ${student.firstName}`;
  // In tên đầy đủ ra màn hình
  logger(fullName);
}
newLine();
// Cách 2: dùng forEach thì sẽ đỡ tốn công code hơn, code nhìn gọn dễ đọc 
logger('--- CÁCH 2 ---');
studentList.forEach((student) => {
  // khai báo và gán giá các giá trị cho firstName - tên, middleName - tên lót và lastName - họ thônng qua đối tương sinh viên (student)
  const { firstName, middleName, lastName } = student;
  // Khai báo mảng chứa tên của mỗi sinh viên bao gồm họ, tên lót, tên
  // mảng này bắt đầu với phần tử đầu tiên là họ 
  const names = [lastName]; // names = ['Nguyen']
  // kiểm tra điều kiện tên lót có tồn tại ko, nếu có thì cho tên lót vào mảng chứa tên, lúc nãy đã có sẵn họ trong mảng đó rồi
  // mảng names này là màng chứa chuỗi
  if (middleName !== undefined) { // có thể kiểm tra bởi điều kiện if(!middleName) cho code gọn hơn
    // names.push là đẩy cái middleName vào mảng names, push là function có sẵn của array, tương tự như length
    // length là thuộc tính nên chỉ cần array.length còn push là function nên phải thực thi bằng cách array.push(middleName)
    // middleName là tham số của function push nên đc đặt trong cặp ngoặc đơn
    names.push(middleName); // names = ['Nguyen', 'Minh']
  } 
  // sau đó push firstName vào trong mảng names luôn
  // do mình cần xuất ra theo format họ + tên lót + tên nên mình push phần từ vào trong mảng theo thứ tự họ trước -> tên lót -> tên
  names.push(firstName); // names = ['Nguyen', 'Minh', 'Nhat']
  // dùng function join() để nối tất cả thành tên đầy đủ
  // join là function của array nên khi gọi phải có cặp ngoặc đơn 
  // ' ' do mình muốn cách ra bởi khoảng trắng nên truyền khoảng trắng (' ') vô trong function join như là tham số
  // cơ chế hoạt động của hàm join là lấy phần từ đầu tiên + khoảng trắng + đến khi hết phần tử cuối cùng
  logger(names.join(' '));
});
newLine();

// Câu 2: 
// Cách 1: dùng forEach, mình nên tập xài cái này cho quen cũng tốt, vì sau này nó sé gọn, xài tối ưu hoá đc hơn là cái for kiểu cũ
logger('=== CÂU 2 ===');

studentList.forEach((student) => {
  // Khai báo biến để lấy thông tin của sinh viên 1 lần, do vòng lặp forEach sẽ chạy từ phần từ đầu tiên tới phần tử cuối cùng của màng
  // nên với mỗi phần tử trong mảng mình sẽ lấy đc những thông tin tương ứng của nó
  // Thay vì muốn lấy firstName của sinh viên thì mình sẽ phải dùng student.firstName thì mình dùng cách này gọn hơn
  // khai báo 1 lần cho tất cả các field cần thiết, lúc sau chỉ cần dùng thôi
  const {
    firstName, middleName, lastName, isMale, 
  } = student;
  // Cũng giống như cách 2 của câu 1, mình dùng cách tạo ra 1 mảng chứa [họ, tên lót, tên] 
  // của 1 object student tương ứng để sau đó gọi 1 lần xuất ra đc tên đầy đủ của sinh viên đó luôn
  // đầu tiên là mình tạo mảng mới bỏ họ của sinh viên đó vào 
  const names = [lastName];
  // kiểm tra tên lót (middleName) của object (đối tượng) này có đc defined hay ko, nếu ko sẽ gán lên lót cho đối tượng theo yêu cầu để bài
  if (middleName === undefined) {
    // ở bước này mình kiểm tra để lấy đúng tên lót của những sinh viên không có tên lót, do yêu cầu của bài toán
    // mình sẽ dùng field isMale để quyết định tên lót cho mỗi đối tượng mà forEach đi qua
        
    // Khai báo 1 biến mới là middleName1 để tính toán giá trị cho tên lót
    // Mình có thể dùng biến middleName cũ để xài như cứ khai báo ra biến mới cho nó rõ ràng
    // Mình cho giá trị mặc định của middleName1 là "Minh" tương ứng với con trai sau đó mình kiểm tra nếu đúng thì coi như bỏ qua, middleName1 vẫn là con trai
    // nhưng nếu isMale là false thì mình lại gán lại giá trị cho middleName1 là "Thi Thu"
    // do dùng từ khoá let nên giá trị của middleName1 có thể đc gán lại, nếu mình dùng const ở trường hợp này là sai
    let middleName1 = 'Minh';
    if (isMale === false) {
      middleName1 = 'Thi Thu';
    }

    /*
        Cách khác để check điều kiện cho middleName1

        Cách 1:
        let middleName1 = ''
        if (isMale === true) {
            middleName1 = 'Minh';
        } else {
            middleName1 = 'Thi Thu';
        }
        Cách này mình khởi tạo giá trị cho middleName1 ban đầu là 1 chuỗi empty
        Nếu isMale là true thì mình gán Minh còn else thì mình gán 'Thi Thu'
        
        Cách 2: 1 kiểu viết tắt của if, nó giống giống như là if của excel
        const middleName1 = isMale ? 'Minh' : 'Thi Thu'; --> Cách này gọn đẹp nhất, đốpi với những if đơn giản thì khuyến khích xài cách này
        
        3 cách là tương đương nhau nhưng nếu mình khởi tạo thẳng giá trị mặc định cho biến middleName1 như cách trên sẽ gọn hơn
        */

    // function push() cũng giống như ở trên mình sẽ đẩy middleName vào trong mảng chứa tên để khi đầy đủ sẽ build ra full name như yêu cầu để bài
    names.push(middleName1);
  } else {
    names.push(middleName);
  } 
  names.push(firstName);
  logger(names.join(' '));
});
newLine();

// Câu 3:
logger('=== CÂU 3 ===');
const studentsWithCalculateScore = studentList.map((student) => ({
  averageScore: calculateAverageScore(student.scores),
  fullName: generateFullName(student, true),
  ...student,
}));

const sortedStudentByScore = orderBy(studentsWithCalculateScore, ['averageScore'], ['desc']);

const bestStudent = sortedStudentByScore[0];
const worstStudent = sortedStudentByScore[sortedStudentByScore.length - 1];

logger(`The best student is ${bestStudent.fullName} with ${bestStudent.averageScore} score`);
logger(`The worst student is ${worstStudent.fullName} with ${worstStudent.averageScore} score`);
newLine();

// Câu 4:
logger('=== CÂU 4 ===');


logger('> Ordered by Descending');
const sortedDescStudentByScore = orderBy(studentsWithCalculateScore, ['averageScore'], ['desc']);
sortedDescStudentByScore.forEach((student) => {
  logger(`${student.fullName} - ${student.averageScore}`);
});

newLine();
logger('> Ordered by Ascending');

const sortedAscStudentByScore = orderBy(studentsWithCalculateScore, ['averageScore'], ['asc']);
sortedAscStudentByScore.forEach((student) => {
  logger(`${student.fullName} - ${student.averageScore}`);
});
newLine();
