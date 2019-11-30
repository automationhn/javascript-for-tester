/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */

import logger, { newLine, newLineWithDash } from '../utils/logger';
import { teams, scrum_master_by_team, features, velocities } from '../data/teamData'

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

function getAddressOfDevLead(data){
  const dsDitLep = [];
  data.forEach((ele) => {
    const {name, dev_lead: devLead, dev_lead_address: address} = ele;
    dsDitLep.push(`${name} - ${devLead} - ${getAddressOther(address)}`);
  });
  return dsDitLep;
}
const ditLepAddress  = getAddressOfDevLead(teams);
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
newLineWithDash();


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

/*
12. Viết function tuyền vào mảng teams -> in ra danh sách thông tin dev_lead và qa_lead như sau:
  1. Team: Salad | Dev_Lead: Hao Sua - Address: 179 Nguyen Xi street, Binh Thanh District, HCM City | Qa_Lead: Cuc Doan - Address: 106 lane of 258 CMT8 street, District 3, HCM City
  2. ...
*/


logger('cau 12');
function getTeamLeadInfo(data){
  const infoOfTeamLead = [];
  data.forEach((ele) => {
    const {name, qa_lead: qaLead, qa_lead_address: addressOfQaLead, dev_lead: devLead, dev_lead_address: addressOfDevLead} = ele;
    infoOfTeamLead.push(`Team: ${name} | Dev_Lead: ${devLead} - Address: ${ngoiNhaTrongHem(addressOfDevLead)} | Qa_Lead: ${qaLead}, Address: ${ngoiNhaTrongHem(addressOfQaLead)}`);
  }) 
  return infoOfTeamLead;
}
const leaderInfo = getTeamLeadInfo(teams);
logger(leaderInfo);
newLineWithDash();

//13. Thêm thuộc tính number_of_member để thể hiện số lượng thành viên trong mỗi team (tính cả Dev_lead và Qa_lead)
logger('cau 13');
function addNewElement (data){
  const newObject = [];
  data.forEach((ele) => {
    const memOfTeam = Object.assign(ele, { number_of_member: ele.members.length+2 });
    newObject.push(memOfTeam);
  })
  return newObject;
}
const newTeams = addNewElement(teams);
logger(newTeams);
newLineWithDash();


/*
14. Dựa vào danh sách scrum_master_by_team, in ra danh sách team và sm tương ứng, nếu team ko có SM thì lấy Dev_lead
  1. Team: Salad | SM: Cuong
  2. Team: Hotpot | SM: Chanh
  3. Team: Cashier | SM: Hao Hach
  4. Team: SM | SM: Mai Le */
  newLineWithDash();
  logger('cau 14');
  function scrumMasterByTeam (data, smArray){
    let no = 0;
    return data.map((ele) => {
      const { id: teamId, name: teamName, dev_lead: devLeadName } = ele;
      const smByTeamId = smArray.find((ele) => {
        return ele.team_id === teamId;
      });
      let smName = devLeadName;
      if (smByTeamId !== undefined) {
        smName = smByTeamId.sm;
      }
      no += 1;
      return `${no}. Team: ${teamName} | SM: ${smName}`;
    });
  };
  const smOfTeam = scrumMasterByTeam(teams,scrum_master_by_team);
  logger(smOfTeam);
  newLineWithDash();

 // 15. Viết function trả về tên của 1 hoặc nhiều team tham gia trong feature Transfer
 newLineWithDash();
 logger('cau 15');
 /* Hanh
 function teamWorkInTransfer (data, featureArr, feature){
  const teamIdByFeature = featureArr.find((ele) => {
    return ele.name === feature
  });
  const result = [];
  for (let i = 0; i < data.length; i++){
    let team = data[i];
    if (teamIdByFeature.team_ids.includes(team.id)){
      result.push(team.name);
    }
  }
  return result;
 }
*/

function teamWorkInTransfer1 (data, featureArr, feature){
  const teamsIdByFeature = featureArr.find((ele) => {
    return ele.name === feature;
  });

 return data.reduce((acc, team) => {
   if (teamsIdByFeature.team_ids.includes(team.id)) {
    acc.push(team.name);
   }
   return acc;
 }, []);
}

 const teamWorksByFeature = teamWorkInTransfer1(teams, features, 'Transfer');
 logger(teamWorksByFeature);
 newLineWithDash();

 //16. Viết function nhân vào tên feature bất kì và trả về tên của những thành viên có tham gia trong feature đó (dev and qa only)
 newLineWithDash();
 logger('cau 16');
 function teamMemsByFeature (data, featureArr, feature) {
  const teamsIdByFeature = featureArr.find((ele) => {
    return ele.name === feature;
  });
  return data.reduce((acc, team) => {
    if (teamsIdByFeature.team_ids.includes(team.id)) {
     acc.push(...team.members);
    }
    return acc;
  }, []);
 }
  
 const teamMembersByFeature = teamMemsByFeature(teams, features, 'Vendor');
 logger(teamMembersByFeature);
 newLineWithDash();

//17. Viết function nhân vào tên feature bất kì và trả về tên của những thành viên có tham gia trong feature đó (dev, qa, leader, sm)
newLineWithDash();
logger('cau 17');
function getAllMemsByFeature (data, smArray, featureArr, feature){
  const teamsIdByFeature = featureArr.find((ele) => {
    return ele.name === feature;
  });
  if (teamsIdByFeature === undefined) { 
    return `Team Feature is not existed, please recheck`};
  const result = [];
  for (let i = 0; i < smArray.length; i++){
    let smData = smArray[i];
    if (teamsIdByFeature.team_ids.includes(smData.team_id)){
      result.push(smData.sm);
    }
  }
  const result2 = [];
  for (let i = 0; i < data.length; i++){
    let teamData = data[i];
    if (teamsIdByFeature.team_ids.includes(teamData.id)){
      result2.push(teamData.members, teamData.qa_lead, teamData.dev_lead);
    }
  }
  return result.concat(...result2)
 }
 const getAllMembersByFeature = getAllMemsByFeature(teams, scrum_master_by_team, features, 'Backdatinga');
 logger(getAllMembersByFeature);
 newLineWithDash();

 //18. Viết function nhận vào tên team bất kì và trả về những feature mà team đó đã tham gia 
 //ex: Salad: ['Accumulation', 'Transfers']
 newLineWithDash();
 logger('cau 18');
 function getTeamNameByID (data, feature, teamName){
  const teamNameById = data.find((ele) => {
    return ele.name === teamName;
  })
  if (teamNameById === undefined) { 
    return `Team Name is not existed, please recheck`};
  const teamFeatureById = feature.filter ((ele) => {
    return ele.team_ids.includes(teamNameById.id)
  })
  if (teamFeatureById.length === 0){
    return `${teamName}: is the management team`;
  }
  const allFeatureByTeam = teamFeatureById.map((ele) => {
    return ele.name;
  })
  return `${teamName}: ${allFeatureByTeam}`;
}
 const teamFeature = getTeamNameByID(teams, features, 'SM');
 logger(teamFeature);
 newLineWithDash();
 
  //19. Viết function nhận vào tên team bất kì và trả về tổng số point mà team đó đã làm đc dựa vào thuộc tính point trong features
 //ex: Salad: 69 points
 newLineWithDash();
 logger('cau 19');
 function getPointsByTeam (data, feature, teamName){
  const teamNameInData = data.find((ele) => {
    return ele.name === teamName;
  })
  if (teamNameInData === undefined) { 
    return `Team Name is not existed, please recheck`};
  const teamFeatureById = feature.filter ((ele) => {
    return ele.team_ids.includes(teamNameInData.id)
  })
  let total = 0;
  teamFeatureById.forEach ((ele) => {
    total = total + ele.points;
  })
  return {Team: teamName, totalPoints: total};
 }
 const pointsTotal = getPointsByTeam(teams, features, 'Salad');
 logger(pointsTotal);
 newLineWithDash();

 //20. Viết function in ra danh sách team và tổng số point mà team đó đã làm đc dựa vào thuộc tính point trong features, xếp hạng team nào làm đc nhiều point nhất
 //ex:  Salad: 69 points
 //     Hotpot: 30 points
 //     Cashier: 15 ponts
 //     SM: 0 points

 // Note: cố gắng viết những function nhỏ có thể dùng chung đc cho những function lớn, tái sử dụng đc function, ko làm code bị duplicate
 newLineWithDash();
 logger('cau 20');
 function sortTeamByPoints (data, features){
  const result = [];
  data.forEach((ele) => {
    result.push(getPointsByTeam(data, features, ele.name));
  })
  result.sort((a, b) => {
    return a.points - b.points;
  })
  return result;
 }
 const pointsByTeam = sortTeamByPoints(teams, features);
 logger(pointsByTeam);
 newLineWithDash();

 /*
 21. Dựa vào velocities, tính số points đã làm đc qua mỗi spints
 ex: 
 sprint 0: 5 points
 sprint 1: 10 points
 ...

 22. Viết function truyền vào tên team và trả về số point mà team đó làm được từ đầu đến hiện tại
 ex: let a = function CountVelocityByTeam(name) {...}
 console(a) => Salad: 69 points

 23. Viết function trả về danh sách team và số point mà team đó làm đc dựa vào velocity

 24. Viết function tìm ra SM đạt hiệu quả cao nhất (quản lý team có velocity cao nhất từ đầu tới hiện tại)
  */