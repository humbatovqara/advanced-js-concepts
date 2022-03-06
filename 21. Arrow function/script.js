/* Lesson: Arrow Function */

/*
Function Declaration - Hoisted
Function Expression - not Hoisted
Arrow Function - Expression
*/

// 1) const square = function (num) { return (num * num); }
// 2) const square = (num) => { return (num * num); }
const square = num => (num * num);
console.log(square(8));

// THIS in classic Functions
/*
window.name = "qara";

function tellName() {
    console.log(this);
    console.log(this.name);
}

tellName();

const person = {
    name: "Ulvi",
    tellName: function() {
        console.log(this);
        console.log(this.name);
    }
}

person.tellName();
*/

// THIS in Arrow Function
/*
window.name = "qara";

const tellName = () => {
    console.log(this);
    console.log(this.name);
}

tellName();

const person = {
    name: "Ulvi",
    tellName: () => {
        console.log(this);
        console.log(this.name);
    }
}

person.tellName();
*/

// ---------
/*
window.name = "Nurlan";

const person = {
    name: "Qara",
    tellName: function () {
        console.log(this);
        console.log(this.name);

        setTimeout(function () {
            console.log(this);
            console.log(this.name);
        }, 2000)
    }
}

person.tellName();
*/

window.name = "Nurlan";

const person = {
    name: "Qara",
    tellName: function () {
        console.log(this);
        console.log(this.name);

        setTimeout(() => {
            console.log(this);
            console.log(this.name);
        }, 2000)
    }
}

person.tellName();

/*
const myObj = {
    year: 2022,
    showYear1: function() {
        console.log(this.year, this);
    },
    showYear2: () => {
        console.log(this.year, this);
    }
}

myObj.showYear1();
myObj.showYear2();
*/

// CALL
const student = {
    examResult: function(){
        return this.name + " " + this.grade;
    }
}

const student1 = {
    name: "Qara",
    grade: 80
}

const student2 = {
    name: "Tabriz",
    grade: 70
}

console.log(student.examResult.call(student1));
console.log(student.examResult.call(student2));