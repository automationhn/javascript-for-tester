/* eslint-disable max-len */
/*
1. In ra danh sách những số lẻ có 2 chữ số chia hết cho 3 và 9 (*)

2. In ra danh sách những số có index chẵn của dãy số (*)

3. Tính tổng của dãy số (*) theo 2 cách (1 cách dùng hàm reduce, cách còn lại thoải mái)

4. Sắp xếp dãy số (*) kể trên theo thứ tự giảm dần

5. Tính tích của 2 số lớn nhất và nhỏ nhất của dãy số (*)

6. Với kết quả của dãy số (*) lấy ra những số chỉ chia hết cho 3 và sắp xếp theo thứ tự giảm dần
*/

/*
7. Cho mảng sau:
const array = [5, -3, 12, 9, -2, 56, 24, 83, 0] (*)

a. Sắp xếp mảng trên theo thứ tự tăng dần và giảm dần

b. Tìm index của số chẵn lớn nhất trong mảng (*)
    Gợi ý: filter để lấy những số chẵn của mảng, sau đó tìm số lớn nhất, dùng giá trị đó tìm index của nó

    c. Tính tổng của những số âm trong mảng (*)
*/

/*
8.1 Viết 1 function để tính tổng của 2 tham số truyền vào
Gợi ý: truyền 2 tham số a = 4, b = 8 -> In ra màn hình kết quả 12

8.2 Viết 1 function để tính các phương thức "+ = x :" của 2 tham số truyền vài\o
Gợi ý: truyền 2 tham số a = 8, b = 2 -> In ra màn hình object kết quả với nội dung như sau
{
    tong: 10,
    hieu : 6,
    tich: 16,
    thương: 4
}

8.3 Viết hàm(function) để tạo ra tên đầy đủ của 1 người, 3 tham số truyền vào là tên, họ, lót
Gợi ý: function(ho, tên, lot) -> "Họ Lót Tên"
*/

const number = [];
for (let i = 11 ; i < 100 ; i++){
    if (i % 2 != 0 && ( i % 3 === 0 || i % 9 === 0 )){
    number.push(i);
    }
}
console.log (number);

for (let i1 = 0 ; i1 <= number.length; i1+=2) {
    console.log (number[i1]);
}

var sum = function (a,b){
    return a+b;
}
var total = number.reduce(sum,0);
console.log("total by reduce = " + total);


let total1 = 0;
for (let i2 = 0; i2 < number.length; i2++) {
    total1 = total1 + number[i2];
}
console.log("total by For = " + total1);

let sortNo = function(a, b){
    return b-a;
};
let sortDesc = number.sort(sortNo);
console.log(number);

let min = number[0];
let max = number[number.length-1];
console.log("Tich = " + min*max);

let a = Math.max(...number);
let b = Math.min(...number);
console.log("max = " + a + " / min = " + b);
console.log(`max = ${a} min = ${b}`);

let num5 = [];
for (let i3 = 0; i3 < number.length; i3++){
    if (number[i3] % 5 === 0){
    num5.push(number[i3]);
    } 
}

let sortNo5 = function(a, b){
    return a-b;
};
let sortAsc = num5.sort(sortNo5);
console.log (num5);

const array = [5, -3, 12, 9, -2, 56, 24, 83, 0];
let arrayDesc = array.sort(sortNo);
console.log(arrayDesc);
let arrayAsc = array.sort(sortNo5);
console.log(arrayAsc);

const array1 = [5, -3, 12, 9, -2, 56, 24, 83, 0];
let testArray1 = function(value, index, testArray){
    return value % 2 === 0;
}
let noArray1 = array1.filter(testArray1);
console.log(noArray1);
let maxArray1 = Math.max(...noArray1);
console.log(maxArray1);

for (let indexMax = 0; indexMax < array1.length; indexMax++){
    if (array1[indexMax] === maxArray1){
        console.log([indexMax]);
    }
}

let total2 = 0;
for (let indexint = 0; indexint < array1.length; indexint++) {
    if (array1[indexint] < 0){
        total2 = total2 + array1[indexint];
    }
    
}
console.log("total  = " + total2);

let cong = function(a, b){
   return a+b;
}
let tong = cong(4, 8);
console.log ("tong = " + tong);

let tru = function(a, b){
    return a-b;
 }
 let hieu = cong(8, 2);
 console.log ("hieu = " + hieu);

 let nhan = function(a, b){
    return a*b;
 }
 let tich = nhan(8, 2);
 console.log ("tich = " + tich);

 let chia = function(a, b){
    let thuong;
    if (b === 0){
        thuong = NaN;
    }
    else {
        thuong = a/b;
    }
    return thuong;
 }

 let chia1 = function(a, b){
    let thuong = NaN;
    if (b !== 0){
        thuong = a/b;
    }
    return thuong;
 }

 let thuong = chia(8, 0);
 console.log ("thuong = " + thuong);

let cau83 = function(ho, ten, lot){
    return ho + " " + lot + " " + ten;
}
let fullName = cau83('Nguyen', 'Hanh', 'Duc');
console.log(fullName);
