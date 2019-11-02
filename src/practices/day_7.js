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
      number: '179',
      street: 'Binh Hung',
      district: 'Binh Thanh',
      city: 'HCM',
    },
    qa_lead: 'Cuc Doan',
    qa_lead_address: {
      number: '106/258',
      street: 'CMT8',
      district: 3,
      city: 'HCM',
    },
    members: ['Hanh', 'Nhat', 'Minh', 'Thoai', 'Thao MN', 'Hien', 'Tai', 'Tin', 'T. Anh', 'H. Anh'],
  },
  {
    name: 'Hotpot',
    id: 5,
    dev_lead: 'Phong Lan',
    dev_lead_address: {
      number: '33/34',
      street: 'Ho Tu Ki',
      district: 10,
      city: 'HCM',
    },
    qa_lead: 'Y Huynh',
    qa_lead_address: {
      number: '69/619',
      street: 'Cong Hoa',
      district: 'Tan Binh',
      city: 'HCM',
    },
    members: ['Toan', 'An', 'Lan', 'Anh', 'Tri', 'Quoc'],
  },
  {
    name: 'Cash',
    id: 1,
    dev_lead: 'Hieu Mai',
    dev_lead_address: {
      number: '11/4',
      street: 'CMT8',
      district: 3,
      city: 'HCM',
    },
    qa_lead: 'Thuy Le',
    qa_lead_address: {
      number: '45/334',
      street: 'Le Thuc Hoach',
      district: 'Tan Phu',
      city: 'Binh Dinh',
    },
    members: ['Trung', 'Hue', 'Quynh', 'Thai', 'Thuong', 'Vy'],
  },
  {
    name: 'SM',
    id: 2,
    dev_lead: 'Mai Le',
    dev_lead_address: {
      number: '69',
      street: 'Biet Thu',
      district: 7,
      city: 'HCM',
    },
    qa_lead: 'C3',
    qa_lead_address: {
      number: '258',
      street: 'Hoang Sa',
      district: '1',
      city: 'Binh Duong',
    },
    members: ['Chanh', 'Cuong', 'Hao Hach'],
  },
];

const scrum_master_by_team = [
  {
    id: 1,
    team_id: 4,
    sm: 'Cuong',
  },
  {
    id: 2,
    team_id: 5,
    sm: 'Chanh',
  },
  {
    id: 3,
    team_id: 1,
    sm: 'Hao Hach',
  },
];

const features = [
  {
    id: 1,
    name: 'Accumulation',
    team_ids: [5, 4],
  },
  {
    id: 2,
    name: 'Vendor',
    team_ids: [4],
  },
  {
    id: 3,
    name: 'Cash drawer',
    team_ids: [1],
  },
  {
    id: 4,
    name: 'Transfer',
    team_ids: [5, 4, 1],
  },
  {
    id: 5,
    name: 'GL Report',
    team_ids: [5],
  },
  {
    id: 6,
    name: 'Backdating',
    team_ids: [4],
  },
];

newLineWithDash();


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

//7. Viết function tuyền vào mảng teams -> trả về danh sách các team và số thành viên trong team đó 
logger('cau 7');
function membersByTeam(data){
  const filterTeam = [];
  data.forEach((ele)=> {
    const name = ele.name;
    const totalMems = ele.members.length;
    filterTeam.push({name,totalMems});
  })
  return filterTeam;
};
const filterMemByTeam = membersByTeam(teams);
logger(filterMemByTeam);
newLineWithDash();

//8. Viết function tuyền vào mảng teams -> trả về danh sách các team có số thành viên lớn hơn 5
logger('cau 8');
function teamHasMoreThan5(data) {
  const totalMemsGreater5 = data.filter((ele) => { return ele.members.length > 5; });
  return totalMemsGreater5;
}

const teamHasMoreThan5a  = teamHasMoreThan5(teams);
logger(teamHasMoreThan5a);
newLineWithDash();

/*9. Viết function tuyền vào mảng teams -> in ra danh sách thông tin dev_lead như sau:
1. Salad-Hao Sua-179 Nguyen Xi street, Binh Thanh District, HCM City
2. .................................., District 7,..................*/

logger('cau 9');

function getAddressOther(address) {
  const { number, street, district, city } = address;
  let formatedDistrict = `${district} District`;
  if (parseInt(district) > 0){
    formatedDistrict = `District ${district}`;
  }
  return `${number} ${street} st, ${formatedDistrict}, ${city} City`;
} 

function ditLep(data){
  const dsDitLep = [];
  data.forEach((ele) => {
    const {name, dev_lead: devLead, dev_lead_address: address} = ele;
    dsDitLep.push(`${name} - ${devLead} - ${getAddressOther(address)}`);
  });
  return dsDitLep;
}
const ditLepAddress  = ditLep(teams);
logger(ditLepAddress);
newLineWithDash();



//10. Viết function tuyền vào mảng teams -> trả về danh sách tất cả các thành viên có trong team mà dev_lead có tên bắt đầu bằng chữ H
logger('cau 10');
function teamOfHDev(data){
  const teamH = data.filter((ele) => {
    const ditLeplist = ele.dev_lead;
    const filterList = ditLeplist.startsWith('H');
    return filterList;
   });
  let all = [];
  teamH.forEach((ele) => {
    const { members, qa_lead } = ele;
    all.push(...members, qa_lead);
  });
  return all;
}; 

const abc = teamOfHDev(teams);
logger(abc);


/*11. Viết function tuyền vào mảng teams -> in ra danh sách thông tin qa_lead như sau:
  1. Team: Salad, Name: Cuc Doan, Address: 106 lane of 258 CMT8 street, District 3, HCM City
  2. ......................................69 Cong Hoa street, Tan Binh District, HCM City*/
logger('cau 11');
function ngoiNhaTrongHem(add) {
  const { number, street, district, city } = add;
  let formatedDistrict = `${district} District`;
  if (parseInt(district) > 0){
    formatedDistrict = `District ${district}`;
  }
  if (number.includes('/')){
    let hem = number.split('/');
    return(`${hem[0]} lane of ${hem[1]}, ${street} st, ${formatedDistrict}, ${city} City`);
  }
  return `${number} ${street} st, ${formatedDistrict}, ${city} City`;
}
  
function qaLeadInfo(data){
  const info = [];
  data.forEach((ele) => {
    const {name, qa_lead: qaLead, qa_lead_address: address} = ele;
    info.push(`Team: ${name}, Name: ${qaLead}, Address: ${ngoiNhaTrongHem(address)}`);
  });
  return info;
}
const qaLeadAddress  = qaLeadInfo(teams);
logger(qaLeadAddress);
newLineWithDash();
// const qaLeader = teamH.filter((ele) => {return ele.qa_lead});
// const mems = teamH.filter((ele) => {return ele.members});
// const noi = qaLeader.concat(mems);


/*
12. Viết function tuyền vào mảng teams -> in ra danh sách thông tin dev_lead và qa_lead như sau:
  1. Team: Salad | Dev_Lead: Hao Sua - Address: 179 Nguyen Xi street, Binh Thanh District, HCM City | Qa_Lead: Cuc Doan - Address: 106 lane of 258 CMT8 street, District 3, HCM City
  2. ...
*/

logger('cau 12');
function teamLeadInfo(data){
  const infoOfTeamLead = [];
  data.forEach((ele) => {
    const {name, qa_lead: qaLead, qa_lead_address: address, dev_lead: devLead, dev_lead_address: address1} = ele;
    infoOfTeamLead.push(`Team: ${name} | Dev_Lead: ${devLead} - Address: ${ditLep(address)} | Qa_Lead: ${qaLead}, Address: ${ngoiNhaTrongHem(address1)}`);
  }) 
  return infoOfTeamLead;
}
const leaderInfo = teamLeadInfo(teams);
logger(leaderInfo);

/*
13. Thêm thuộc tính number_of_member để thể hiện số lượng thành viên trong mỗi team (tính cả Dev_lead và Qa_lead)

14. Dựa vào danh sách scrum_master_by_team, in ra danh sách team và sm tương ứng, nếu team ko có SM thì lấy Dev_lead
  1. Team: Salad | SM: Cuong
  2. Team: Hotpot | SM: Chanh
  3. Team: Cashier | SM: Hao Hach
  4. Team: SM | SM: Mai Le
*/
