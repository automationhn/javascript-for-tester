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
      team_name: 'QA Central',
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
  ],
};

console.log(cloudHms);
