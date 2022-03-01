// OBJECTS

// property -- method: Function

const person = {
    name: "Qara",
    surname: "Humbatov",
    age: 21,
    language: ["Azerbaijan", "English", "Turkish"],
    fullName: function () {
        return this.name + " " + this.surname
    },
    address: {
        city: "Baku",
        district: "Yasamal"
    }
}

// Object Literal

const employee = {
    name: "Nurlan",
    surname: "Ramazanov",
    age: 21,
    fullName: function () {
        return this.name + " " + this.surname
    }
}

console.log(employee);

// Dot (.) Notation
console.log(person.name);
console.log(person.age);
console.log(person.fullName());

person.job = "Engineer";
console.log(person);
console.log(person.job);

// Bracket Notation
console.log(employee['name']);
console.log(employee['age']);
console.log(employee['fullName']());
console.log(employee['na' + 'me']);

// Add New Property - as Object
employee.address = {};
employee.address.city = "Ismayilli";

console.log(employee);

// CONSTRUCTOR - geniş izah
function Car(name, type, year) {
    const obj = {}
    obj.name = name;
    obj.type = type;
    obj.year = year;
    obj.fullProp = function () {
        return obj.name + ' ' + obj.type;
    }

    return obj;
}

const car1 = new Car("Mercedes", "E class", 2006);
const car2 = new Car("BMW", "5 series", 2022);

console.log(car2);
console.log(car1.fullProp());

// CONSTRUCTOR - qısa yazılış
function City(name, people) {
    console.log(this);

    this.name = name;
    this.people = people;
    this.fullName = function () {
        return this.name + " " + this.people;
    }

    console.log(this);
}

const city1 = new City("Baku", 5);

// Object Constructor
const person1 = new Object();
person1.name = "Ulvi";
person1.surname = "Rafizade";
person1.age = 20;
person1.fullName = function () {
    console.log(this);
    return this.name + ' ' + this.surname;
}

console.log(person1);
console.log(person1.age);
console.log(person1.fullName());

// Object.create method
const home = {
    name: "Qaya Town",
    district: "Yasamal",
    price: 4000,
    fullName: function () {
        return `${this.name},${this.district}-${this.price}`
    }
}

console.log(home);

const house = Object.create(home);
house.name = "Port Baku";
house.district = "Xatai";
house.price = 6000;

console.log((house));