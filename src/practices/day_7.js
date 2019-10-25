/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */

const number = [5, 211, 43, 24, 1108, 246, 33, 81, 599, 11, 35, 98, 56, 104, 65];

/*
1. Viết function nhận vào mảng number và trả về những số chẵn, lớn hơn 50 và đc sắp xếp theo thứ tự tăng dần

2. In dãy số vừa tìm được ở câu 1 theo cấu trúc sau:
- số thứ 1 là: 52
- số thứ 2 là: 56
...
- số cuối cùng là: 1108
*/

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
      number: '258/106',
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

/*
3. Viết function truyền vào mảng teams -> trả ra mảng chứa danh sách tên của tất cả các team
4. Viết function tuyền vào mảng teams -> trả về tên của team có qa_lead là chị của C5
5. Viết function tuyền vào mảng teams và tên team -> trả về danh sách thành viên đc sắp xếp theo thứ tự tăng dần của team được truyền vào
6. Viết function tuyền vào mảng teams và trả về team có số thành viên đông nhất

7. Viết function tuyền vào mảng teams -> trả về danh sách các team và số thành viên trong team đó 
8. Viết function tuyền vào mảng teams -> trả về danh sách các team có số thành viên lớn hơn 5
9. Viết function tuyền vào mảng teams -> in ra danh sách thông tin dev_lead như sau:
  1. Salad-Hao Sua-179 Nguyen Xi street, Binh Thanh District, HCM City
  2. .................................., District 7,..................

10. Viết function tuyền vào mảng teams -> trả về danh sách tất cả các thành viên có trong team mà dev_lead có tên bắt đầu bằng chữ H
11. Viết function tuyền vào mảng teams -> in ra danh sách thông tin qa_lead như sau:
  1. Team: Salad, Name: Cuc Doan, Address: 106 lane of 258 CMT8 street, District 3, HCM City
  2. ......................................69 Cong Hoa street, Tan Binh District, HCM City
12. Viết function tuyền vào mảng teams -> in ra danh sách thông tin dev_lead và qa_lead như sau:
  1. Team: Salad | Dev_Lead: Hao Sua - Address: 179 Nguyen Xi street, Binh Thanh District, HCM City | Qa_Lead: Cuc Doan - Address: 106 lane of 258 CMT8 street, District 3, HCM City
  2. ...
*/
