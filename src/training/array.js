/* eslint-disable func-names */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-array-constructor */
/* eslint-disable prefer-template */
/* eslint-disable no-console */
/* eslint-disable eol-last */
import logger, { newLine, newLineWithDash } from '../utils/logger';

/*
Khai báo mảng:
Cách 1: var arr = [value1, value2, ..., valuen];
- arr:  là tên biến mảng.
- value1, ...valuen là các giá trị của mảng mình muốn tạo.
- ví dụ: var do_an_vat = ['banh trang nuong', 'bap xao', 'banh trang tron', 'goi kho bo']

Cách 2: var arr = new Array(value1, value2, ..., valuen);
- arr: là tên biến mảng.
- value1, ...valuen là các giá trị của mảng mình muốn tạo.
- ví dụ: var do_uong_vat = new Array('xi tin dau', 'tra sua bobacho', 'sua tuoi tran dau duong den')
*/

const doAnVat = ['banh trang nuong', 'bap xao', 'banh trang tron', 'goi kho bo'];
console.log('Danh sách đồ ăn vặt: ' + doAnVat);
newLine();

const doUongVat = new Array('xi tin dau', 'tra sua bobacho', 'sua tuoi tran dau duong den');
console.log(`Danh sách đồ uống vặt: ${doUongVat}`);
newLine();

/*
Truy xuất mảng: arr[index];
index:
- chỉ số vị trí của phần tử trong mảng
- index bắt đầu từ 0 và kết thúc ở n (dương vô cực)
- nếu phần tử có index = -1 tức là phần tử ko tồn tại trong mảng

ví dụ:  var arr = ['mien vit', 'bun bo', 'bun moc', 'bun xao chay', 'bun xi dau']
arr[0] = 'mien vit'
giá trị (value) của mảng tại vị trí (index) thứ 0 là 'mien vit'
 */

const doAnNgIu = ['mien vit', 'bun bo', 'bun moc', 'bun xao chay', 'bun xi dau'];
console.log(`Danh sách đồ ăn ng iu thích là: ${doAnNgIu}`);
const monNgonNhat = doAnNgIu[0];
console.log(`Món ngon nhất là: ${monNgonNhat}`);
newLine();

/*
Các hàm xử lý mảng

1. Length: 
- đây là thuộc tính chứ ko phải phương thức
- trả về số phần tử có trong mảng hay còn gọi là độ dài của mảng
const doAnNgIu = ['mien vit', 'bun bo', 'bun moc', 'bun xao chay', 'bun xi dau'];
const soMon = doAnNgIu.length // -> kết quả là 5
*/
const soMon = doAnNgIu.length;
console.log(`1. Số món ăn ng iu thích là: ${soMon}`);
newLine();
/*
2. join()
- đây là hàm (phương thức) có tác dụng gộp tất cả các phần tử có trong mảng thành một chuỗi.
- cú pháp: arr.join(string);
  + string: kí hiệu để nối các phần tử trong mảng lại với nhau
 */
let danhSachDoAnNgIu = doAnNgIu.join(',');
console.log(`2. Danh sách món ăn của ng iu xài join , : ${danhSachDoAnNgIu}`);
newLine();

const danhSachDoAnNgIu1 = doAnNgIu.join(' - ');
console.log(`2.1 Danh sách món ăn của ng iu xài join - : ${danhSachDoAnNgIu1}`);
newLine();
/*
3. push()
- đây là hàm thêm 1 hoặc nhiều phần tử vào CUỐI mảng
- cú pháp: arr.push('bun oc')
  + 'bun oc' là phần tử sẽ được thêm vào cuối mảng
 */
doAnNgIu.push('bun oc');
danhSachDoAnNgIu = doAnNgIu.join(',');
console.log(`3. Danh sách món ăn của ng iu sau khi push 1 phần tử: ${danhSachDoAnNgIu}`);
newLine();

// push 1 lúc 2 phần tử
doAnNgIu.push('bun thit nuong', 'bun thit xao');
danhSachDoAnNgIu = doAnNgIu.join(',');
console.log(`3.1. Danh sách món ăn của ng iu sau khi push 2 phần tử: ${danhSachDoAnNgIu}`);
newLine();

/*
4. pop()
- xoá đi phần tử cuối cùng trong mảngmảng
- cú pháp: arr.pop()
 */
doAnNgIu.pop();
// mất đi cái phần tử cuối cùng là bún thịt xào
console.log(`4. Danh sách món ăn của ng iu sau khi pop: ${doAnNgIu.join(',')}`);
newLine();

/*
5: unshift()
- thêm 1 hay nhiều phần tử vào đầu mảng
- ngược với push là thêm vào cuối
- cú pháp: arr.unshift('mien ga')
 */

doAnNgIu.unshift('mien ga');
danhSachDoAnNgIu = doAnNgIu.join(',');
console.log(`5. Danh sách món ăn của ng iu sau khi thêm 1 phần tử vào đầu danh sách: ${danhSachDoAnNgIu}`);
newLine();

/*
6. shift()
- xoá phần tử đầu tiên trong mảng
- ngược với pop là xoá phần tử cuối cùng trong mảng
- cú pháp: arr.shift()
 */
doAnNgIu.shift();
// mất đi cái phần tử đầu tiên là miến gà
console.log(`6. Danh sách món ăn của ng iu sau khi shift làm mất đi phần tử đầu tiên là 'mien ga': ${doAnNgIu.join(',')}`);
newLine();

/*
7. splice()
- hàm này để thêm phần tử vào mảng với vị trí xác định, chêm giữa mảng 1 hoặc 1 số phần tửtử
- cú pháp: arr.splice(index, howmany, item1, ....., itemX)
  + index: vị trí muốn thêm phần tử vào
  + howmany: số phần tử sẽ xóa tính tự vị trí thêm mảng, để 0 nếu không muốn xóa phần tử nào.
  + item1,...itemX: giá trị của các phần tử muốn thêm vào.
 */

 // thêm 2 phần tử là 'canh bun' và 'banh trang nuong' vào mảng tại vị trí thứ 1, sau phần tử 'mien vit' và không xoá đi bất cứ phần tử nào
 console.log(`7. Danh sách trước khi splice: ${doAnNgIu.join(', ')}`);
 newLine();

 doAnNgIu.splice(1, 0, 'canh bun', 'banh trang nuong');
 console.log(`7.1 Danh sách món ăn của ng iu sau khi thêm 2 phần tử vào giữa danh sách: ${doAnNgIu.join(', ')}`);
 newLine();

/*
8. concat()
- hàm này để nối cái mảng lại với nhau
- cú pháp: array.concat(array1, ...arrayN)
 */
const doAnUong = doAnVat.concat(doUongVat);
console.log(`8. Danh sách đồ ăn uống sau khi concat: ${doAnUong.join(', ')}`);
newLine();

/*
9. slice()
- hàm này lấy ra số phần tử trong mảng dựa theo index
- cú pháp: slice(start, end)
  + start: vị trí (index) bắt đầu lấy
  + end: vị trí (index) kết thúc lấy
 */

 const danhSachSo = [0, 1, 2, 3, 4, 5];
 console.log(`9. Danh sách số trước khi lấy: ${danhSachSo.join(' - ')}`);
 newLine();

 const danhSachSoBiLay = danhSachSo.slice(1, 4); // lấy từ index = 1 đến index = 4 là ngừng -> lấy 3 index 1, 2, 3 tương ứng với 3 giá trị 1, 2, 3 trong mảng
 console.log(`9.1. Danh sách số lấy được: ${danhSachSoBiLay.join(' - ')}`);
 newLine();

 /*
 10. sort()
 - hàm này có tác dụng sắp xếp lại mảng theo chiều tăng dần, nếu là số thì từ bé đến lớn, chữ thì sắp xếp theo a -> z
 - cú pháp arr.sort()
*/
const danhSachSoChuaXep = [24, 6, 12, 21, 1, 20, 18];
console.log(`10. Danh sách số CHƯA được sắp xếp: ${danhSachSoChuaXep.join(' - ')}`);
newLine();

console.log(`10.1 Danh sách số ĐÃ được sắp xếp: ${danhSachSoChuaXep.sort().join(' - ')}`);
newLine();

/*
NOTE***: Nếu dùng sort đơn thuần thì nó sẽ sắp xếp dựa trên kí tự đầu chứ ko xếp theo giá trị, nếu muốn sắp xếp theo thứ tự tăng dần mình cần định nghĩa 1 hàm sort cho nó
 */
function compare(a, b) {
  return a - b;
}
const danhSachSoDaXep = danhSachSoChuaXep.sort(compare);
console.log(`10.2 Danh sách số ĐÃ được sắp xếp hẳn hoi: ${danhSachSoDaXep.join(' - ')}`);
newLine();

/*
11. reverse()
- hàm này đảo ngược thứ tự của mảng đã cho, đưa số có index lớn nhất lên đầu, index lớn nhì lên vị trí thứ 2, lần lượt đến cuối mảng
 */
const danhSachSoLonXon = [24, 6, 12, 21, 1, 20, 18];
console.log(`11. Danh sách số CHƯA được ĐẢO NGƯỢC: ${danhSachSoLonXon.join(' - ')}`);
newLine();

console.log(`11. Danh sách số lộn lộn ĐÃ được ĐẢO NGƯỢC: ${danhSachSoLonXon.reverse().join(' - ')}`);
newLine();

/*
12. forEach()
- hàm này tương tự với for, dùng để duyệt qua các phần tử trong mảng, nhưng không dùng tới index
*/
const propeties = ['Vinpearl Hội An', 'The Grand HoTram', 'Teracotta', 'Phoenix'];

logger('12. Danh sách khách sạn: ');
propeties.forEach((element) => {
  console.log(element);
});
newLine();

/*
13. filter()
- hàm này tương tự với for, dùng để duyệt qua các phần tử trong mảng và trả ra mảng mới chứa những phần tử thoả điều kiện
-> cho danh sách số phòng như sau, hãy lấy ra những phòng là số chẵn
*/
const danhSachSoPhong = [619, 302, 304, 403, 404, 305];

const timSoChan = function (so) {
  return so % 2 === 0;
};
const danhSachSoChan = danhSachSoPhong.filter(timSoChan);

logger(`13. Danh sách phòng số chẵn: ${danhSachSoChan}`);
newLine();

const danhSachPhongSoChan = danhSachSoPhong.filter((element) => element % 2 === 0);

logger(`13.1. Danh sách phòng số chẵn: ${danhSachPhongSoChan}`);
newLineWithDash();

/*
14. find()
- hàm này tương tự với for, dùng để duyệt qua các phần tử trong mảng và trả về phần tử đầu tiên thoả điền kiện
-> với danh sách số phòng nhưng bên trên, tìm ra phòng chẵn
*/
const soChanDauTien = danhSachSoPhong.find(timSoChan);

logger(`14. Phòng số chẵn đầu tiên là: ${soChanDauTien}`);
newLine();

const phongSoChanDauTien = danhSachSoPhong.find((element) => element % 2 === 0);

logger(`14.1 Phòng số chẵn đầu tiên là: ${phongSoChanDauTien}`);
newLineWithDash();

/* 15.
***NOTE: so sánh giữa filter và find
* Giống nhau:
- 2 hàm này gần như tương tự nhau khi cùng duyệt qua mảng và dựa vào điều kiện để lấy ra phần tử
- 2 hàm này nhận tham số là 1 hàm khác với nhiệm vụ kiểm tra điều kiện của mỗi phần được duyệt qua và trả về kết quả true | false
-> nếu true, thoả điều kiện, false bỏ qua phần tử đó
* Khác nhau: 
- find sẽ ngưng duyệt mảng khi tìm đc phần tử thoả điều kiện và trả nó ra luôn -> find sẽ return ra 1 phần tử là chuỗi, số hoặc đối tượng
- filter sẽ duyệt qua tất cả các phần tử của mảng và lấy ra những phần tử nào thoả điều kiện -> filter sẽ return ra 1 mảng có thể là mảng rỗng hoặc chứa những phần tử thoả điều kiện truyền vào
 */

 /*
 So sánh forEach, filter và find
 - for, forEach chỉ duyệt qua mảng với những logic nào đó được viết bên trong
 - filter, find: duyệt qua mảng và trả ra kết quả thoả điều kiện với logic được viết bên trong
 */

 const mangSoChan = [];
 danhSachSoPhong.forEach((so) => {
   if (timSoChan(so) === true) {
     mangSoChan.push(so);
   } 
 });

logger(`15 Danh sách phòng số chẵn là: ${mangSoChan}`);
newLineWithDash();