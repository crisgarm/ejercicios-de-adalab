"use strict";

// const lostNumbers = [4, 8, 15, 16, 23, 42];
// const arr = [];

// function bestLostNumber(){
// for (let i = 0; i < lostNumbers.lenght; i++){
//   console.log("hola");
//   if (lostNumbers[i] % 2 === 0){
//     console.log("hola");
//     arr += lostNumbers[i];
//     }
// }
// }
// bestLostNumber();
// console.log(lostNumbers);

//Ejercicio en clase:
 const lostNumbers = [4, 8, 15, 16, 23, 42];
 const even = [];
 const mult = [];

 function bestLostNumber(){
   for (let i = 0; i < lostNumbers.length; i++){
     if (lostNumbers[i] % 2 === 0){
        even.push(lostNumbers[i]);
      }
     if (lostNumbers[i] % 3 === 0){
        mult.push(lostNumbers[i]);
      }
    }
    console.log(even.concat(mult));
  }

 bestLostNumber();
 console.log(even);
 console.log(mult);