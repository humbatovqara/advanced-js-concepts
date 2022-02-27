// var - let - const

/* 
    Let 
    - dəyişə bilən ifadələr üçün.
    - başlanğıc dəyər verilməsi vacib deyil, sonradan dəyər mənimsədilə bilər
*/
let age;
console.log(age);

age = 22;
console.log(age);

/* 
    Const
    - dəyişilə bilməyən ifadələr üçün.
    - başlanğıc dəyər mütləq verilməlidir, sonradan mənimsədilə bilməz.
*/
const name = "Qara";
console.log(name);

// name = "Ulvi"

/*
    const ilə Array/Object təyin etdikdə proses fərqlənir
    - Array/Object yaddaş ünvanlarını referans etdiyi üçün, biz metodlar vasitəsilə həmin ünvanların daxilində dəyişiklik edirik
    - əks halda const özünə məxsus özəlliyi olaraq, yaddaş ünvanlarının özünü dəyişdirməyə çalışsaq, xəta verəcək
*/
const myArr = [1, 2, 3];

console.log(myArr);

myArr.pop();

console.log(myArr);

const student = {
    name: "Ulvi",
    age: 20
}

console.log(student);

/* Object.freeze() */
Object.freeze(student);

student.name = "Tebriz";

console.log(student);

// myArr = [1, 2, 3, 4, 5];

/*
    var
    - global scope
    - functional scope
*/

var month = 7;
console.log(month);

month = 8;
console.log(month);

var x = 1;
console.log(x);

if (x === 1) {
    var x = 10;
    console.log(x);
}

// Global scope
console.log("Global scope: " + window.x);

/*
    let
    - block scope
*/

let y = 1;
console.log(y);

if (y === 1) {
    let y = 10;
    console.log(y);
}

console.log(y);

/* Hoisting - var */
// var color;

console.log(color);

var color = 333;

/* Hoisting - let */
// let type -> Hoisting olmur

console.log(type);

let type = 20;