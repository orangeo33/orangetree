// const swap = (param1,param2)=>{
//     [param1,param2]=[param2,param1]
//     console.log(param1,param2)
// }



// let a = 3;
// let b = 4;
// swap(a,b);
/*
{
    let param1 = a value
    let param2 = b value
    [param1,param2]=[param2,param1]
    console.log(param1,param2)
}
*/

// console.log(swap(a,b));

const arrSwap =(arr1, arr2)=>{
    let room = arr1;
    arr1 = arr2;
    arr2 = room;
    arr1.push(1);
    console.log(arr1,arr2)
}
주소 값을 참조한다

let arrA = [1,2];
let arrB = [1,2,3,4]
arrSwap(arrA,arrB)
console.log(arrA,arrB)


const changeArr = (arr)=>{
    arr[0] = 10;
    console.log(arr);
}

// let test = [1,2,3,4];

// changeArr(test);
// {
//     let arr = test address
//     arr[0]=10
// }
// console.log(test);
