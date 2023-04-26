    // num1
    function swap(param1,param2){
        let la;
        la = param1;
        param1 = param2;
        param2 = la;
        console.log(param1,param2);
    }
    var a = 3;
    var b = 4;
    swap(a,b);
    
    // console.log(a,b);




// Num2
// function compare(a,b){
//     if(a>b)
//     return a;
//     else if 
//     (a==b)
//     retrn (0);
//     else 
//     (a<b)
//     return b;    
// }

// let a = 3;
// let b = 5;
// console.log(compare(a,b));

// // num3
// function arr[1, 3 ,5]{
//     Array.indexof[0];
// }
// console.log(arr);

// function getFirstValue(arr){
//     return arr[0]
// }
// let myarr =[1, 2, 3, 4,5]
// console.log(getFirstValue(myarr));

// function getFirstValue(arr){
//     return arr[0]
// }
// let myarr =[1, 2, 3, 4, 5]
// console.log(getFirstValue(myarr));


// function getLastvalue(arr){
//     return arr[arr.length - 1]
// }
// let myArr =[1, 2, 3, 4, 5]
// console.log(getLastvalue(myArr));

// // num4
// function arr[1, 3 ,5]{
//     arr.indexof(2);
// }
// console.log(arr);

// num5
function arr(){
    let room = arr[0];
    arr[0] = arr[arr.length -1];
    arr[arr.length -1] = room;
}
let array = [1, 3, 5];
arr(array);
console.log(array);



// // 함수를 선언한다.
// function add(first, second) {
//     // let first = 1;
//     // let second = 2
//     return first + second
// }
// // 함수를 호출한다.
//     // 매개변수를 선언한다.
//     let a = 1;
//     let b = 2;
//     // 함수를 호출할때 매개변수를 넣어준다.
// // add(first, second)
// const result = add(a, b) // 3
// // const result = 3
// // 변수를 선언해서 리턴값을 받는다.
// console.log(result)
// // console.log(3)