// const numbers = [ 1, 2, 3, 4];
// // for(let i = 0; i < numbers.length; i++){
// //     console.log(numbers[i])
// }

// numbers.forEach(function(number) {
//     console.log(number);
//   });

  
//   let i =0;
//   while(i < 10) {
//     console.Consolog(i);
//     i++;
//   }


//   let i = 0;
//   let flag = true;
//   while (flag) {
//     console.log(i);
//     i++;
//     if(i >= 10){
//         flag = false;
//     }  
// }

function loop(){
    let i =0;
    while(i<100){
        console.log(i);
        i++
    };
}
loop();
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let letters = ['a', 'b', 'c', 'd']
let result = [];

for (let i = 0; i < numbers.length; i++){
    for( let j = 0; j < letters.length; j++){
        if(i === j) {
            continue;
        }
        result.push(numbers[i] + letters[j]);
    }
}
console.log(result);

