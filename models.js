// 1. 변수 두 개값 swap
function swap (a, b){
    let room = a;
    a = b;
    b = room;
    console.log(a, b);
}
let ace = 3;
let jack = 4;
swap(ace,jack);


// 2. 비교해서 큰수 return 같으면 0 return
function compare(a,b){
    if(a>b) return a;
    else if(a==b) return 0;
    else return b;
}
let c,d;
c=4; d=4;
// console.log(compare(a,b))

// 나머지 조건 경우의 수 4~100을 일일히 주지 않아도
//  나머지로 한번에 묶을 수 있음
// else라고 쓰면 나머지 조건이 쓰인거나 마찬가지

// 3. array를 인자로 받아서 해당 array의 첫번쨰 인덱스값을 return하는 함수
function getFirst(arr) {
// 아래 한줄이 수행하는 일은?
// 변수 king '='-> 할당한다
// 변수 king에 [1,2,3,4]를 할당한다
// => king에 어떤것을 넣어도 [1,2,3,4]로 바뀌어버림
// 함수 선언시에 인자로 받은 king이 선언되기 떄문에
// let으로 다시 선언하면 error
return arr[0];
}
let king = [2,3,4];
getFirst(king);

function getFirst(king){
    king = [1, 2, 3, 4]
   
} 

/*
위의 king과 아래 king은 다름
함수에서 인자로 받으면 인자이름으로 변수가 자동으로 선언됨
함수 안에서 선언된 것은 함수 안에서만 선언되고 밖에서는 접근 할 수 없음
getFirst로 이름 바꾼이유는 함수기능을 대략적으로 이름보고 예측할수있게
우리가 반환하고 싶은것은 array의 첫번쨰 인덱스값
위 코드에서 array를 가리키는 것은?
array는 변수중에 하나 -> king
getFirst는 함수임
함수를 호출하는 방법 functionName(arguments)
*/
// array를 인자로 받아서 array에서 마지막 인덱스값 리턴

function getLast(arr) {
    return arr[arr.length -1];
}
    let testArr = [2,3,4];
    getLast(testArr);
    
// array에서 첫번쨰 , 마지막 값 바꾸기?
function swap(arr){
    let room = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = room;
    return arr;
}
let a = [1, 2, 3, 4];

swap(a)
// console.log(a)
swap(a)
// console.log(a)
console.log(swap(xa));



let num = 2;
function funcEx (){

}















// 오랜 시간 코딩하면 다 거기서 거기다. 오류를 외우고 다시 반복하는
// 시간을 줄이거나 없애는 것이 포인트



// 생에 같은 일이 한 번 일어나면 우연이지만 두번 일어나면 본인 탓이다.













function testStrict(arr) {
    if (arr === 7) { 
    return "Equal";
    }
    return "Not Equal";
  }

  testStrict(10);


  function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
