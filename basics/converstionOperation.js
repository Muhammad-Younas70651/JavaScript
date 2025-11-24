// let score = "33sbc"// //this give us NaN
// //let score = null; // this gives us 0
// let score = undefined; // this give us Nan 
// let score = true; // thia give us 1

// console.log(typeof score);
// console.log(typeof (score));

// let ValueInNumber = Number(score);
// console.log(typeof ValueInNumber);
// console.log(ValueInNumber);

// This is the some important notes of Converstion 
// 1) when we convert the number its gives us a number like "33" => 33
// 2) When we convert the maxup of the number and string like "33agdfb" => Nan its give us Nan (Full form of NaN not an number)
// 3) When we take a boolean values like true or fales its give us 1 for true and 0 for false 

let isLoogedIn = 1
let booleanaIsloogedIn = Boolean(isLoogedIn)
console.log(booleanaIsloogedIn)

let isLogoutIn = 0
let booleanaIslogoutIn = Boolean(isLogoutIn)
console.log(booleanaIslogoutIn);
 
// when we write a 1 in boolean  its give us true , when we write 0 its give us false 
// when we use "" (empty string) its gives us false , when we add some value in string like "Younas" its gives us true