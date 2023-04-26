ㅋ//  num1_ 스왑하는 함수

function swap(a, b){
    let room = a;
    a = b;
    b = room;
    console.log(a, b);
}

let dd = 3;
let bb = 4;
swap(dd, bb);
console.log(dd, bb);

// num2_ 배열의 첫번째 인덱스를 호출하는 함수

function getFirst(arr){
    return arr[0];
}
let toto =[1, 2, 3];
getFirst(toto);
console.log(getFirst(toto));

// num_3 배열의 마지막 인자를 호출하는 함수

function getLast(arr) {
    return arr[arr.length -1];
}
    let testArr = [2,3,4];
    getLast(testArr);
    console.log(getLast(testArr));
    
// num_4 객체 매소드를 사용하는 함수

    const calculator = {
            add: function(a, b){
                return a+b;
            },
            subtract: function(a, b){
                return a - b;
            }
        }
        ;
    console.log(calculator.add(3, 4));
    console.log(calculator.subtract(5, 2));
        



// num5_ 인자를 모두 더하는 반복문

function sumArrayElement(arr){
    let sum = 0;
    for (i =0; i < arr.length; i++){
    sum += arr[i];
    } return sum;
}
    let myArr = [1, 2, 3, 4]
    let totalsum = sumArrayElement(myArr);
    console.log(totalsum);  


    // 메소드를 사용한 객체 사용
    const person = {
        firstName: "john",
        lastName: "doe",
        greeting: function(){
        return `hello, my name is ${this.firstName} ${this.lastName}.`;
    }
};
    console.log(person.greeting());
// this 키워드는 현재 객체를 참조하는 
// 객체 자기 참조 변수
    




