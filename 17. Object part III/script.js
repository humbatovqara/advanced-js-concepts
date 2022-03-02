// New Object Syntax

// 1 - Shorthand Properties

let name = 'Qara',
    age = 21;

/*
const myObj = {
    name: name,
    age: age
}
*/

const myObj = {
    name,
    age
}

console.log(myObj.name);
console.log(myObj.age);

// 2 - Computed Property Names

/*
let prop1 = 'name';

let myObj2 = {};

myObj2[prop1] = "Qara";

console.log(myObj2);
*/

let prop1 = 'name';

let myObj3 = {
    [prop1]: "Qara 3"
}

console.log(myObj3);

// 3 - Short Method Syntax

/*
const person = {
    name: 'Nurlan',
    surname: 'Ramazanov',
    age: 21,
    fullName: function () {
        return `${this.name} ${this.surname}`
    }
}
*/

const person = {
    name: 'Nurlan',
    surname: 'Ramazanov',
    age: 21,
    fullName() {
        return `${this.name} ${this.surname}`
    }
}

console.log(person.fullName());

// 4 - Object Destructing

const person2 = {
    name: 'Tabriz',
    surname: 'Osmanli',
    age: 22,
    fullName() {
        return `${this.name} ${this.surname}`
    }
}

/*
let myVar1 = person2.name;
console.log(myVar1);

let myVar2 = person2.age;
console.log(myVar2);
*/

/*
let { name: myVar1, age: myVar2 } = person2;
console.log(myVar1);
console.log(myVar2);
*/

let {
    surname
} = person2;
console.log(surname);

// 5 - Spread Operator in Object Literals
const address = {
    city: "Baku",
    district: "Yasamal",
    street: "H. Javid",
    fullAddress() {
        return `${this.city} ${this.district} - ${this.street}`
    }
}

let address2 = {
    ...address
};

console.log(address2);

const myObj4 = {
    name: "Mercedes",
    year: "2006"
}

const myObj5 = {
    model: "E class",
    color: "Brown"
}

const mercedes = {
    ...myObj4,
    motor: '2998',
    ...myObj5
};

console.log(mercedes);

// 6 - REST Operator in Object Literals

const car = {
    marka: "Hyundai",
    model: "Elantra",
    year: 2022,
    color: "White",
    fullName() {
        return `${this.marka} ${this.model} - ${this.color}, ${this.year}`
    }
}

// const {marka, model, year} = car;
// console.log(marka);

const {marka, ...rest} = car;
console.log(marka);
console.log(rest);

// 7 - Object Values = Object Entries
const car2 = {
    marka: "Hyundai",
    model: "Elantra",
    year: 2022,
    color: "White",
    fullName() {
        return `${this.marka} ${this.model} - ${this.color}, ${this.year}`
    }
}

// ES5
console.log((Object.keys(car2)));
console.log((Object.values(car2)));
console.log((Object.entries(car2)));