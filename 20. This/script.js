/*
    1. obj.func() --> this obj
    2. this --> global object --> window()
*/

/* 
console.log(this);
console.log(this.location);
console.log(this.location.href);
console.log(window.location.href);
console.log(this === window);
*/

const name = "Nurlan";
console.log(name);
console.log(this.name);
console.log(this);

// Function Declaration
function func1() {
    this.name = "Qara";
    console.log(this);
    console.log(this.age); // Undefined - Expression Hoisting yoxdur
}

// Function Expression
const func2 = function () {
    this.age = 40;
    console.log(this);
    console.log(name);
}

/* 
func1();
func2(); 
*/

// Constructor Function - without THIS
/* 
function Person(name, surname, age) {
    const obj = {};
    obj.name = name;
    obj.surname = surname;
    obj.age = age;
    obj.fullName = function() {
        return obj.name + " " + obj.surname;
    }

    return obj;
}

const per1 = new Person("Tabriz", "Osmanli", 22);
console.log(per1);
 */

// Constructor Function - with THIS
/*
function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function() {
        return this.name + " " + this.surname;
    }
}

const per1 = new Person("Tabriz", "Osmanli", 22);
console.log(per1);
*/

// Class
/* 
class Person {
    constructor((name, surname, age)) {
        this.name = name;
        this.surname = surname;
        this.age = age;    
    }
    
    fullName = function() {
        return this.name + " " + this.surname;
    }
}

const per1 = new Person("Tabriz", "Osmanli", 22);
console.log(per1);
 */

// Object Literal
const car = {
    marka: "Mercedes",
    model: "E-class",
    color: "Brown",
    year: 2006,
    fullName: function () {
        return this.marka + " " + this.model;
    },

    hybrid: {
        marka: "Mercedes",
        model: "EQC",
        color: "Black",
        year: 2022,
        fullName: function () {
            return this.marka + " " + this.model;
        }
    }
}

console.log(car);