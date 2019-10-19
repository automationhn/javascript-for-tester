
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/*

---> MẢNG + ĐỐI TƯỢNG - ARRAY + OBJECT <---

Cho object sau, hãy viết phương thức theo các yên cầu sau:

1. Cho biết người đứng đầu của team cloud hms
2. Liệt kê danh sách các leader với thứ tự alphabet
3. Xuất ra địa chỉ công ty theo format sau: 11 Doan Van Bo st, Ward 10, District 4, Sai Gon City
4(*). Tái sử dụng hàm ở câu 3, xuất ra địa chỉ của account manager theo format sau: 123 Cong Hoa st, Ward 12, Tan Binh District, Sai Gon City
5. Cho biết số lượng team có trong dự án Cloud HMS
6(**). Cho biết tổng số thành viên trong danh sách team vừa tìm được (tổng thành viên cùa 1 team gồm tổng số devs + tổng số qas) và xuất ra màn hình
Cobra - 4; QA Central - 2
*/

import logger, { newLine, newLineWithDash } from '../utils/logger';

const cloudHms = {
  account_manager: 'Phuong Nguyen',
  account_manager_address: {
    number: 123,
    street: 'Cong Hoa',
    ward: '12',
    district: 'Tan Binh',
    city: 'Sai Gon',
  },
  leaders: ['Tam Hach', 'Hao Huynh', 'Huyen Truong', 'Chanh C', 'Cuong C', 'Lo Hong', 'HL'],
  department: 'TV',
  location: 'Floor 4',
  client_location: {
    number: 11,
    street: 'Doan Van Bo',
    ward: '10',
    district: '4',
    city: 'Sai Gon',
  },
  teams: [
    {
      id: 1,
      team_name: 'Cobra',
      leader: 'Tam Hach',
      team_size: 5,
      devs: [
        {
          id: '0001',
          name: 'Du',
          is_full_stack: false,
          experience_years: 5.5,
        },
        {
          id: '0002',
          name: 'Thao',
          is_full_stack: true,
          experience_years: 2.5,
        },
        {
          id: '0003',
          name: 'Khue',
          is_full_stack: true,
          experience_years: 3,
        },
      ],
      qas: [
        {
          id: '0004',
          name: 'Uyen',
          is_hard_working: false,
          experience_years: 6,
        },
      ],
    },
    {
      id: 2,
      team_name: 'QA Local',
      leader: 'HL',
      team_size: 3,
      devs: [],
      qas: [
        {
          id: '1108',
          name: 'Hanh Nguyen',
          is_hard_working: true,
          experience_years: 2.5,
        },
        {
          id: '0005',
          name: 'Uyen Ng',
          is_hard_working: false,
          experience_years: 1,
        },
      ],
    },
    {
      id: 3,
      team_name: 'QA Central',
      leader: 'LH',
      team_size: 4,
      devs: [],
      qas: [
        {
          id: '1111',
          name: 'Lan ko cao',
          is_hard_working: true,
          experience_years: 3.5,
        },
        {
          id: '2222',
          name: 'An Vu',
          is_hard_working: true,
          experience_years: 6,
        },
        {
          id: '3333',
          name: 'Tu ti ti',
          is_hard_working: true,
          experience_years: 5,
        },
      ],
    },
  ],
};



// 1. Cho biết người đứng đầu của team cloud hms 

// function getAccountManager(account) {
//   return account.account_manager;
// }

// const accMan = getAccountManager(cloudHms)
// console.log(`người đứng đầu của team cloud hms là: ${accMan}`);
// console.log ('======================================');

// // 2. Liệt kê danh sách các leader với thứ tự alphabet
// function getleaders(account) {
//   return account.leaders;
// }

// const leaderSorted = getleaders(cloudHms);
// console.log(`danh sách các leader: ${leaderSorted.sort().join(', ')}}`);
// console.log ('======================================');

// // 3. Xuất ra địa chỉ công ty theo format sau: 11 Doan Van Bo st, Ward 10, District 4, Sai Gon City
// // function getAddress(address) {
// //   if (parseInt(address.district) > 0){
// //     return `${address.number} ${address.street} st, Ward ${address.ward}, District ${address.district}, ${address.city} City`;
// //   }
// //   else {
// //     return `${address.number} ${address.street} st, Ward ${address.ward},  ${address.district} District, ${address.city} City`;
// //   };
// // } 

// function getAddressOther(address) {
//   const { number, street, ward, district, city } = address;
//   let formatedDistrict = `${district} District`;
//   if (parseInt(district) > 0){
//     formatedDistrict = `District ${district}`;
//   }
//   return `${number} ${street} st, Ward ${ward}, ${formatedDistrict}, ${city} City`;
// } 
  

// const add = getAddressOther(cloudHms.client_location);
// console.log(`Địa chỉ công ty client: ${add}`);
// console.log('======================================');


// // 4(*). Tái sử dụng hàm ở câu 3, xuất ra địa chỉ của account manager theo format sau: 123 Cong Hoa st, Ward 12, Tan Binh District, Sai Gon City

// const add1 = getAddressOther(cloudHms.account_manager_address);
// console.log(`Địa chỉ của account manager: ${add1}`);
// console.log('======================================');

// // 5. Cho biết số lượng team có trong dự án Cloud HMS
// function getTotalAmount(data) {
//   return data.length;
// }
// const numOfTeam = getTotalAmount(cloudHms.teams)

// console.log(`Số lượng team có trong dự án Cloud HMS: ${numOfTeam}`);
// console.log('======================================');

/* 6(**). Cho biết tổng số thành viên trong danh sách team vừa tìm được (tổng thành viên cùa 1 team gồm tổng số devs + tổng số qas) và xuất ra màn hình
Cobra - 4; QA Central - 2 */
// const memOfCobra = [];
// const qaCentral = [];

// function totalMem(ele, ) {
//   return ele.length;
  
// }
// b = totalMem(cloudHms.teams.devs);
// console.log(b)

// function getAmount(data, teamName) {
//   const teams = data.teams;
//   let teamByName;
//   for (let i = 0; i < teams.length; i++) {
//     const team = teams[i];
//     if(team.team_name === teamName) {
//       teamByName = team;
//     }
//   }
//   if (teamByName === undefined) {
//     return 0;
//   }
//   return team.devs.length + team.qas.length;
// }
// const a = getAmount(cloudHms, 'QA Central');
// console.log(a);

// function getAmount1(data) {
//   const result = [];
//   const teams = data.teams;
//   for (let i = 0; i < teams.length; i++){

//     const team = teams[i];
//     const numberOfDevs = team.devs.length;
//     const numberOfQas = team.qas.length;
//     const total = numberOfDevs + numberOfQas;
//     result.push({ name: team.team_name, total: total });

//   };
//   return result;
// }

// const a1 = getAmount1(cloudHms);
// console.log(a1);

// function getTotalMemberByTeamName(data, name) {
//   const teams = data.teams;
//   const teamByName = teams.find((team) => {
//     return team.team_name === name;
//   });
//   if (teamByName === undefined) {
//     return 0;
//   }
//   return teamByName.devs.length + teamByName.qas.length;
// }

// const a = getTotalMemberByTeamName(cloudHms, 'QA Central');
// console.log(a);

// function getTeamByTeamSize(data, teamSize) {
//   const teams = data.teams;
//   const teamBySize = teams.filter((team) => {
//     return team.team_size > teamSize;
//   });
//   if (teamBySize === undefined) {
//     return 'Hong co';
//   }
//   return teamBySize.team_name;
// }

// const a = getTeamByTeamSize(cloudHms, 2);
// console.log(a);

/*

const nguoi = {
  ten: 'Nhat',
  tuoi: 30
};

function tinhTienThuong(nguoi) {
  let tienThuong = 0;
  if (nguoi.tuoi > 0) {
    tienThuong = 5000;
  } else {
    tienThuong = 3000;
  }
  return tienThuong;
}

function tinhTienThuong1(nguoi) {
  if (nguoi.tuoi > 30) {
    return 5000;
  } else {
    console.log('a');
  }
}

*/

/*
const number = [1, 4, 6, 14, 5, 18, 50, 23, 34, 193];

***Lưu ý: không được dùng FOR***

7. tìm những số chẵn trong mảng number
8. in ra những số chẵn vừa tìm đc ở câu 7 (console.log ra)
9. tìm những số chia hết cho 3 trong mảng number
10. tìm số đầu tiên chia hết cho 2 trong mảng number

11(**). viết function nhận tham số truyền vào là mảng number, trả về tất cả những số chia hết cho 5 theo thứ tự giảm dần
*/
const number = [1, 4, 6, 14, 5, 18, 50, 23, 34, 193, 35, '20', '60'];

//cau 7
function timSoChan(no) {
  return no % 2 === 0;
};

const danhSachSoChan = number.filter(timSoChan);
console.log(danhSachSoChan);
newLineWithDash();

//cau 8
danhSachSoChan.forEach((ele) => {
  logger(ele);
})
newLineWithDash();

//cau 9
const soChiaHetCho3 =  number.filter((ele) => { return ele % 3 === 0;});
logger(soChiaHetCho3);
newLineWithDash();

//cau 10
const soDauChiaHetCho5 = number.find((ele) => { return ele % 5 === 0;});
logger(soDauChiaHetCho5);
newLineWithDash();

//cau 11
function timsoChiaHetCho5(arr) {
  const arr1 = arr.filter((ele) => { return ele % 5 === 0});
  const arr2 = arr1.sort((a, b) => {return b - a});
  return arr2;
};

const soChiaHetCho5 = timsoChiaHetCho5(number);
logger(soChiaHetCho5);