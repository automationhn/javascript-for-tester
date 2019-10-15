// const number = [1, 2, 8 ,5 ,6, 7, 16,21,25,99];

// // for (let i = 0; i < number.length; i++){
// //  console.log(number[i]);
// // }

// function print(element) {
//     console.log(element);
// }

// number.forEach(print);

// console.log('--------------------------');

// number.forEach((element) => {
//   console.log(element);
// });

const propeties = ['Vinpearl Hội An', 'The Grand HoTram', 'Teracotta', 'Phoenix'];

const mangSo = [1, 14, 61, 20, 34, 11, 0];

propeties.forEach ((element) => {
    console.log(element);
})
console.log('--------------------------');

function print(element) {
    if (element % 2 === 0){
        console.log(element);
    }
}
mangSo.forEach(print);
console.log('--------------------------');

mangSo.forEach((element) => {
    if(element % 2 === 0){
        console.log(element);
    }
})
console.log('--------------------------');

let mangSoLe = [];
mangSo.forEach((element) => {
    if (element % 2 !== 0){
        mangSoLe.push(element);
    };
})
console.log(mangSoLe);