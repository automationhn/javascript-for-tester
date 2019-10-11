/* eslint-disable dot-notation */
/* eslint-disable no-new-object */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-array-constructor */
/* eslint-disable prefer-template */
/* eslint-disable no-console */
/* eslint-disable eol-last */
import logger, { newLine, newLineWithDash } from '../utils/logger';

/*
Khai đối tượng (object): có 2 cách
Cách 1: 
*/

logger('KHAI BÁO ĐỐI TƯỢNG');

const dog = {
  name: 'Meo',
  age: 4,
  color: 'Black and White',
  bark: function bark() {
    console.log(`${this.name} bark: meo meo meo`);
  },
};

console.log(dog);
newLine();

/*
Cách 2: 
*/

const anotherDog = new Object();

anotherDog.name = 'Meo Meo';
anotherDog.age = 6;
anotherDog.color = 'Den thui';
anotherDog.bark = function bark() {
  console.log(`${anotherDog.name} bark: meo meo meo`);
};
console.log(anotherDog);
newLine();
anotherDog.bark();

newLineWithDash();
/*
*/

/*
Cách truy xuất, lấy giá trị thuộc tính của đối tượng (object)
*/

logger('CÁCH TRUY XUẤT THUỘC TÍNH CỦA ĐỐI TƯỢNG');
newLine();

const banPhim = {
  nhaSanXuat: 'Varmilo',
  soPhim: 69,
  loaiSwitch: 'blue',
};

logger(`Cách 1: Bàn phím hiệu: ${banPhim.nhaSanXuat}`);

logger(`Cách 2: Bàn phím hiệu: ${banPhim['nhaSanXuat']}`);

const thuocTinhNhaSanXuat = 'nhaSanXuat';
logger(`Cách 3: Bàn phím hiệu: ${banPhim[thuocTinhNhaSanXuat]}`);

newLineWithDash();

/*
Cách thêm thuộc tính mới vào đối tượng (object)
*/

logger('CÁCH THÊM THUỘC TÍNH VÀO ĐỐI TƯỢNG');
newLine();

// thêm thuộc tính màu với giá trị trắng vào đối tượng bàn phím
banPhim.mau = 'trang';

// thêm thuộc tính keyCap với giá trị ABS vào đối tượng bàn phím
Object.assign(banPhim, { keyCap: 'ABS' });

logger('Bàn phím sau khi thêm thuộc tính mới: ');
logger(banPhim);
newLineWithDash();

/*
Cách xoá thuộc tính trong đối tượng (object)
*/

logger('CÁCH XOÁ THUỘC TÍNH TRONG ĐỐI TƯỢNG');
newLine();

// xóa thuộc tính màu trong đối tượng bàn phím
delete banPhim.mau;
logger('Bàn phím sau khi xoá thuộc tính màu: ');
logger(banPhim);
newLine();

// xóa thuộc tính keyCap trong đối tượng bàn phím
delete banPhim['keyCap'];
logger('Bàn phím sau khi xoá thuộc tính keyCap: ');
logger(banPhim);
newLineWithDash();