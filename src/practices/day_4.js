/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/*

MẢNG - ARRAY

1. Tạo ra mảng số tự nhiên chia hết cho 5 trong khoảng [-200, 200]

2. Cho mảng array1 = [0, 1]
Tạo ra các phần tử tiếp theo bằng cách cộng 2 phần từ liền trước lại và thêm vào mảng sao cho phần tử cuối cùng là số có 3 chữ số
0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
ex: array1 = [0, 1, 1, 2, 3, 5, 8, 13, ...]
note: có thể dùng for, while hoặc do while

3. Cho mảng array2 = [1, 2]
Tạo ra các phần tử tiếp theo bằng cách nhân 2 phần từ liền trước lại và thêm vào mảng sao cho phần tử cuối cùng là số có 4 chữ số
1 * 2 = 2
2 * 2 = 4
1 + 2 = 3
ex: array2 = [1, 2, 2, 4, 8, 32, ...]
note: có thể dùng for, while hoặc do while

4. Nối 2 mảng lại với nhau
note: có thể dùng mọi cách

5. Loại bỏ những phần tử trùng nhau trong mảng mới vừa nối lại
note: có thể dùng google để tìm cách, nên tìm bằng tiếng anh, hạn chế sử dụng tiếng việt nha e, google cũng là 1 skill trong lập trình
syntax: javascript distict duplication element in array ...

6. Viết phương thức với tham số truyền vào là 1 mảng bất kì và trả về tổng giá trị các phần tử trong mảng đó

7. Viết phương thức với tham số truyền vào là 1 mảng bất kì và trả về phần tử nhỏ nhất trong mảng đó

8. Viết phương thức với tham số truyền vào là 1 mảng bất kì và trả về 1 đối tượng chứa phần tử lớn và nhỏ nhất trong mảng
ex: {
  min: -16,
  max: 24 
}

***9. Thử viết hàm test cho 3 phương thức ở câu (6, 7, 8)

*/

// cau 1
// const no1 = [];
// for (let i1 = -200; i1 <= 200; i1++){
//   if (i1 % 5 === 0){
//     no1.push(i1);
//   }
// }
//   console.log(no1);

//   // cau 2
//   const array1 = [0, 1];
//   let isStop = false;
//   for (let i2 = 0; i2 <= 50; i2++){
//     const no2 = array1[i2] + array1[i2 + 1];
//     if (isStop===false) {
//       array1.push(no2);
//     }

//     if (no2 > 99) {  
//       isStop = true;
//     }
//   };   
//   console.log(array1);

//   // cau 3
//   const array2 = [1, 2];
//   let isStop1 = false;
//   for (let i = 0; i < 10; i++){
//     let result = array2[i] * array2[i + 1];
//     if(isStop1 === false){
//       array2.push(result);
//     }
//     if (result > 999){
//       isStop1 = true;
//     }
//   }
// console.log(array2);


// //cau 4
// const array3 = array2.concat(array1);
// console.log(array3);

// //cau 5
// const uniqueSet = new Set(array3);
// const backToArray = [...uniqueSet];
// console.log(backToArray);

// //cau 6


// function tinhTong(mang) {
//   let tong = 0;
//   for(let i = 0; i < mang.length; i++) {
//     tong = tong + mang[i];
//   }
//   return tong;
// }

// const mang = [1,2,5, 4, 3,4]
// let tong = tinhTong(mang);
// console.log(`tong cua mang ${mang.join(', ')} la: ${tong}`);

// //cau 7
// function timMinNo(mang) {
//   let sort = function(a, b){
//     return a-b;
//   }
//   let sortMang = mang.sort(sort);
//   return mang[0];
// }

// const mang1 = [1,2,5, 4, 0, 3, 4]
// let min = timMinNo(mang1);
// console.log(`so nho nhat cua mang ${mang1.join(', ')} la: ${min}`);

// /*cau 8
// 8. Viết phương thức với tham số truyền vào là 1 mảng bất kì và trả về 1 đối tượng chứa phần tử lớn và nhỏ nhất trong mảng
// ex: {
//   min: -16,
//   max: 24 
// }*/

// function timMaxNo(mang){
//   let sort = function(a, b){
//     return b-a;
//   }
//   let sortMang = mang.sort(sort);
//   return mang[0];
// }

// function findMaxMin(array){
//   let maxNo = timMaxNo(array);
//   let minNo = timMinNo(array);
//   const result = {min: minNo,  max: maxNo};
//   return result;
// }

// const mang2 = [1,2,5, 4, 0, 3, 4]
// let object = findMaxMin(mang2);
// console.log(object);
// console.log(object.min);

/*

var object = {
  key: value,
  key1: value1
}

var hocSinh = {
  ten: Hanh, // chuoi 
  gioiTinh: Hanh, // chuoi
  ngaySinh: 240690, // so
  soThich: ['choi', 'an', 'ngu'], //mang
  giaDinh: {
    ba: '',
    me: {
      ten: 'Tuyet',
      soThichMe: ['nau an', 'choi ipad']
    }
  },
  banBe: [
    {
      ten: 'Chip',
      tuoi: 31,
      tenChong: 'Hien'
    },
    {
      ten: Dung,
      tuoi: 30
    }
  ]
}

var array = [ele, ele1,.... eleN]

var so = [0, 12, 3, 6]

var chu = ['a', 'n', 'h']

var hocSinh = [
  {
    ten: Hanh,
    gioiTinh: Hanh,
    ngaySinh: 240690
  },
  {
    ten: Nhat,
    gioiTinh: Nam,
    ngaySinh: 210190
  }
]

*/
var ngIu = {
  id: 1,
  ten: 'Hanh',
  bietBoi: true,
  gioiTinh: 'Nu',
  ngaySinh: '1990-06-24',
  soThich: ['choi', 'an', 'ngu'],
  giaDinh: {
    me: {
      ten: 'Tuyet',
      soThich: ['nau an', 'choi ipad']
    },
    anh: {
      ten: 'Hieu',
      soThich: ['nau an', 'choi ipad']
    }
  },
  banBe: [
    {
      ten: 'Chip',
      tuoi: 31,
      tenChong: 'Hien',
      banBe: [
        {
          ten: 'cho',
          tuoi: 80,
          tenChong: 'hl'
        }
      ]
    },
    {
      ten: 'Tien',
      tuoi: 40,
      tenChong: 'Cuong'
    },
    {
      ten: 'Dung',
      tuoi: 30
    }
  ]
}

function getAgeByName(data, name) {
  let age = 0;
  const friends = data.banBe;
  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.ten === name) {
      age = friend.tuoi;
    }
  }
  return age;
}

function getAgeByNameShort(data, name) {
  return data.banBe.find(x => x.ten === name).tuoi;
}

const ageOfDung = getAgeByName(ngIu, 'Dung');
console.log(`Tuoi cua Dung la: ${ageOfDung}`)
const ageOfTien = getAgeByName(ngIu, 'Tien');
console.log(`Tuoi cua Tien la: ${ageOfTien}`)

const ageOfDung1 = getAgeByNameShort(ngIu, 'Dung');
console.log(`Tuoi cua Dung la: ${ageOfDung1}`)

// console.log(`Ten ng iu: ${ngIu.ten}`);
// console.log(`Ten me ng iu: ${ngIu.giaDinh.me.ten}`);
// console.log(`So thich anh ng iu: ${ngIu.giaDinh.anh.soThich[0]}`);
// console.log(`tuoi Dung: ${ngIu.banBe[1].tuoi}`);