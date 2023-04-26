// // // function swap(a, b){
// // //     let room = a;
// // //     a = b;
// // //     b = room;
// // //     console.log(a, b);
// // // }
// // // let dd = 3;
// // // let bb = 4;
// // // swap(dd, bb);
// // // console.log(dd, bb);

function sumArrayElement(arr){
    let sum = 0;
    for (i =0; i < arr.length; i++){
    sum += arr[i];
    } return sum;
}
    let myArr = [1, 2, 3, 4]
    let totalsum = sumArrayElement(myArr);
    console.log(totalsum);           


// // function getFirst(arr){
// //     return arr[0];
// // }
// // let toto =[1, 2, 3];
// // getFirst(toto);
// // console.log(getFirst(toto));



function getLast(arr) {
    return arr[arr.length -1];
}
    let testArr = [2,3,4];
    getLast(testArr);
    console.log(getLast(testArr));
    

// //     function  getLasr(arr){
// //         return arr[0];
// //     }
// //     let ato = [1, 32, 34];
// //     getLasr(ato);
// //     console.log(getLasr(ato));


// // function getLast (arr){
// //         return arr[0];
// // }
// // let ss =[1, 2, 3]
// // getLast(ss)
// // console.log(getLast(ss)));

// const calculator = {
//     add: function(a, b){
//         return a+b;
//     },
//     subtract: function(a, b){
//         return a - b;
//     }
// }
// ;
// console.log(calculator.add(3, 4));
// console.log(calculator.subtract(5, 2));


const person = {
    firstName: "john",
    lastName: "doe",
    greeting: function(){
    return `hello, my name is ${this.firstName} ${this.lastName}.`;
}};

console.log(person.greeting());
// this 키워드는 현재 객체를 참조하는 객체 자기 참조 변수

// let i =0 ;
// while (i<10){
//     console.log(i);
//     i++;
// }

// // 물건의 가격과 할인율
const price = 3000;
const discount = 0.2;

// 할인된 가격이 1000원 미만이 되는 최대 수량
let quantity = 1;
let discountedPrice = price;
while (discountedPrice >= 1000) {
//   quantity++;
  discountedPrice = price * (1 - discount) * quantity;
  console.log(discountedPrice)
}
console.log(`할인된 가격이 1000원 미만이 되는 최대 수량: ${quantity}`);




