/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */

import logger, { newLine, newLineWithDash } from '../utils/logger';

const number = [5, 211, 43, 24, 1108, 246, 33, 81, 599, 11, 35, 98, 56, 104, 65];

/*
1. Viết function nhận vào mảng number và trả về những số chẵn, lớn hơn 50 và đc sắp xếp theo thứ tự tăng dần

2. In dãy số vừa tìm được ở câu 1 theo cấu trúc sau:
- số thứ 1 là: 52
- số thứ 2 là: 56
...
- số cuối cùng là: 1108
*/

//Cau 1
function timSoChanLonHon50 (arr){
  const arr1 = arr.filter((ele) => { 
  return ele % 2 === 0 && ele > 50;});
  const arr2 = arr1.sort((a,b) => {return a - b;});
  return arr2;
};
const numberNew = timSoChanLonHon50(number);
logger(`So chan lon hon 50 la: ${numberNew.join(', ')}`);

//cau 2
for (let i = 0; i < numberNew.length; i++){
  let a = numberNew[i];
  if (i < numberNew.length-1){  
    logger (`So thu ${i+1} la: ${a}`);
  }
  else {
    logger (`So cuoi cung la: ${a}`);
  }
}
  
  

const teams = [
  {
    name: 'Salad',
    id: 4,
    dev_lead: 'Hao Sua',
    dev_lead_address: {
      number: 179,
      street: 'Binh Hung',
      district: 'Binh Thanh',
      city: 'HCM',
    },
    qa_lead: 'Cuc Doan',
    members: ['Hanh', 'Nhat', 'Minh', 'Thoai', 'Thao MN', 'Hien', 'Tai', 'Tin', 'T. Anh', 'H. Anh'],
  },
  {
    name: 'Hotpot',
    id: 5,
    dev_lead: 'Phong Lan',
    dev_lead_address: {
      number: 33,
      street: 'Ho Tu Ki',
      district: 10,
      city: 'HCM',
    },
    qa_lead: 'Y Huynh',
    members: ['Toan', 'An', 'Lan', 'Anh', 'Tri', 'Quoc'],
  },
  {
    name: 'Cash',
    id: 1,
    dev_lead: 'Hieu Mai',
    dev_lead_address: {
      number: 11,
      street: 'CMT8',
      district: 3,
      city: 'HCM',
    },
    qa_lead: 'Thuy Le',
    members: ['Trung', 'Hue', 'Quynh', 'Thai', 'Thuong', 'Vy'],
  },
  {
    name: 'SM',
    id: 2,
    dev_lead: 'Mai Le',
    dev_lead_address: {
      number: 69,
      street: 'Biet Thu',
      district: 7,
      city: 'HCM',
    },
    qa_lead: 'C3',
    members: ['Chanh', 'Cuong', 'Hao Hach'],
  },
];
newLineWithDash();
/*


7. Viết function tuyền vào mảng teams -> trả về danh sách các team và số thành viên trong team đó 
8. Viết function tuyền vào mảng teams -> trả về danh sách các team có số thành viên lớn hơn 5
9. Viết function tuyền vào mảng teams -> in ra danh sách thông tin dev_lead như sau:
  1. Salad-Hao Sua-179 Nguyen Xi street, Binh Thanh District, HCM City
  2. .................................., District 7,..................

10. Viết function tuyền vào mảng teams -> trả về danh sách tất cả các thành viên có trong team mà dev_lead có tên bắt đầu bằng chữ H
*/

//3. Viết function truyền vào mảng teams -> trả ra mảng chứa danh sách tên của tất cả các team
logger('cau 3');
function allTeams(data){
  const teamArr = [];
  data.forEach((elemment) => {
    const team = elemment.name;
    teamArr.push(team);
  });
  return teamArr;
}
const danhSachTeam = allTeams(teams);
logger(danhSachTeam);
newLineWithDash();

//4. Viết function tuyền vào mảng teams -> trả về tên của team có qa_lead là chị của C5
logger('cau 4');
function qaLead(data, name){
  const crazy = data.find((ele) => {
    return ele.qa_lead === name;
  });
 return crazy.name;
}  

const chiCuaC5 = qaLead(teams,"C3");
logger(`team có qa_lead là chị của C5 la : ${chiCuaC5}`);
newLineWithDash();

//5. Viết function tuyền vào mảng teams và tên team -> trả về danh sách thành viên đc sắp xếp theo thứ tự tăng dần của team được truyền vào
logger('cau 5');
function danhSachThanhVien (data, name){
  const memByTeam = data.find((ele) => {  
      const a = ele.members;
      const b = a.sort();
      return b; 
    }
  );
  return memByTeam.members;
}

const memOfTeam = danhSachThanhVien(teams, "Salad")
logger(memOfTeam);
newLineWithDash();

//6. Viết function tuyền vào mảng teams và trả về team có số thành viên đông nhất
logger('cau 6');
function largestTeam(data){
  const sortLargestTeam = data.sort((a, b) => { return b.members.length - a.members.length; });
  return sortLargestTeam[0]; 
}
const theLargestTeam = largestTeam(teams);
logger(theLargestTeam);
newLineWithDash();