/* 
    Functions
    - Function Declaration
    - Function Expression

    - Function Expression can be anonymous
    - Function Expression is not Hoisted
*/

// Function Declaration - Statement
function sum(num1, num2) {
    return (num1 + num2);
}

console.log(sum(5, 3));
console.log(sum());

// Function Declaration - Hoisted
console.log(diff(5, 2));

function diff(num1, num2) {
    return (num1 - num2);
}

// Function Expression
const division = function (num1, num2) {
    return (num1 / num2);
}

// Function name is optional

console.log(division);
console.log(division(10, 2));

// First-class Functions
const myArr = [21, "Qara", function () {
    console.log("Array Element");
}]
myArr[2]();

const myObj = {
    age: 21,
    name: "Qara",
    func: function () {
        console.log("Object Element");
    }
}
myObj.func();

console.log(20 + (function () {
    return 10
})()); // IIFE

// Function Expression - is not Hoisted
// sayName("Qara");

// const sayName = function (name) {
//     console.log(name);
// }

// First-class Functions - davam
const addFive = function (num, myFunc) {
    console.log(num + myFunc())
}

addFive(10, function () {
    return 5
});

const myFunc2 = function (num) {
    return function toDouble() {
        console.log(num * 2);
    }
}

// myFunc2(8)();

const result = myFunc2(7);

result();

// IIFE

const help = function () {
    console.log("Help");
}();

(function () {
    console.log("Help 2");
})();