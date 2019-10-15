/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/*

---> MẢNG - ARRAY <---

/* 1. Tạo ra mảng hiển thị danh sách tiện nghi phòng nghỉ và sắp xếp theo thứ tự alphabet và ngược lại
ex: tien_nghi = ['ti vi', 'may dieu hoa', 'mini-bar', 'lo suoi am', 'bon tam', 'may chieu phim', 'phong tam dung']*/

var tien_nghi = ['ti vi', 'may dieu hoa', 'mini-bar', 'lo suoi am', 'bon tam', 'may chieu phim XXX', 'phong tam dung'];
console.log(`Danh sách đã được sắp xếp: ${tien_nghi.sort().join(' - ')}`);

console.log(`Danh sách được đảo ngược: ${tien_nghi.reverse().join(' - ')}`);

/* 2. Xoá tiện nghi có độ dài lớn nhất trong danh sách tiện nghi
ex: 
  - 'ti vi' có độ dài 5
  - 'may lanh' có độ dài là 8 */

// const tienNghi = ['ti vi', 'may dieu hoa', 'mini-bar', 'lo suoi am', 'bon tam', 'may chieu phim XXX', 'phong tam dung'];
// const tienNghiWithLength = tienNghi.reduce((result, ele) => {
//   result.push({ name: ele, length: ele.length });
//   return result;
// }, []);

// tienNghiWithLength.sort((ele, ele1) => ele.length - ele1.length).pop();

// const newTienNghi1 = tienNghiWithLength.map((ele) => {
//   return ele.name;
// });

// console.log(newTienNghi1.join(', '));

// let newTienNghi = [];
// tien_nghi.forEach((element) => {
//   // console.log(`Do dai cua ${element} la: ${element.length}`);
//   if (element.length < 18){
//     newTienNghi.push(element);
//   }
// });
// console.log(`${newTienNghi} `);

const tienNghiSorted = tien_nghi.sort((tienNghi1, tienNghi2) => tienNghi1.length - tienNghi2.length);
tienNghiSorted.pop();
console.log(tienNghiSorted.join(', '));



/* 3**. Sắp xếp mảng còn lại theo thứ tự tăng dần của độ dài mỗi phần tử
ex: tien_nghi_1 = ['ti vi', 'bon tam', 'may dieu hoa', ...]*/

/* 4. Với mảng đã sắp xếp trên, loại bỏ phần tử đầu và cuối mảng*/
let cau4 = tienNghiSorted.slice(1, tienNghiSorted.length-1);
console.log(cau4);

// ---> ĐỐI TƯƠNG - OBJECT <---

/* 5. Tạo 1 đối tượng định nghĩa cho phòng nghỉ của khách sạn 
ex: 
var phong = {
  id: 1,
  so_nguoi: 4,
  loai_phong: 'luxury',
  dia_diem: 'Cantho'
}*/

var phong = {
  id: 1,
  so_nguoi: 4,
  loai_phong: 'luxury',
  dia_diem: 'Cantho'
}
console.log('---------------------------------');
/* 6. Thêm những thuộc tính về tiện nghi vào đối tượng vừa tạo*/

phong.tien_nghi = tien_nghi;
console.log(`Object phong sau khi đã thêm tiện nghi: `);
console.log(phong);
console.log('---------------------------------');
/* 7. Xoá thuộc tính dia_diem ra khỏi đối tượng */
delete phong.dia_diem;
console.log(`Object phong sau khi đã xoá địa điểm : `);
console.log(phong);
console.log('---------------------------------');
/* 8. Thay thế thuộc tính so_nguoi bằng co_giuong với giá tri 'kingsize'*/

Object.assign(phong, { co_giuong: 'kingsize' });
delete phong.so_nguoi;
console.log(`Object phong sau khi đã xoá và thêm : `);
console.log(phong);
console.log('---------------------------------');
/* 9. Viết phương thức in ra thông tin phòng từ đối tượng phòng theo định đạng sau:
ex: 1_luxury_kingsize_Cantho
note: có thể truyền tham số theo 1 danh sách hoặc truyền cả đối tương phòng nghỉ vào phương thức vừa tạo*/
Object.assign(phong, { dia_diem: 'Can Tho' });

function printEle(element) {
  return `${element.id}_${element.loai_phong}_${element.co_giuong}_${element.dia_diem}` ;
}
const a = printEle(phong);
console.log(a);
console.log('---------------------------------');

/* 10. Với phương thức đã viết ở câu 9, sửa lại để xuất ra thêm danh sách tiện nghi đc nối với nhau bằng dấu ';'
ex: 1_luxury_kingsize_Cantho_tivi;bontam;maydieuhoa
*/

console.log(`${a}_${tien_nghi.join(' ; ')}`);


 