// Object part II

const person = {
    name: "Qara",
    surname: "Humbatov",
    age: 21,
    fullName: function () {
        return `${this.name} ${this.surname}`;
    }
}

console.log(person);
console.log(person.name);
console.log(person.fullName());
// console.log(person.fullName2()); ==> is not a Function
// console.log(person.job); ==> undefined
console.log(person.toString()); // [object Object]
console.log(person.hasOwnProperty("name"));

// person = OBJECT + name, surname, age, fullName()

const myObj = {}
console.log(myObj);

// myObj = OBJECT

// CONSTRUCTOR FUNCTION
function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function () {
        return `${this.name} ${this.surname}`
    }
}

const ulvi = new Person("Ulvi", "Rafizade", 20);
console.log(ulvi);

// OBJECT + name, surname, age, fullName() ---> Person ---> ulvi

console.log(ulvi.hasOwnProperty("agex"));
console.log(ulvi.__proto__);

function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}

Employee.prototype.department = "IT";
Employee.prototype.about = function () {
    return `${this.department}: ${this.name} (${this.salary} manat)`
};

const emp1 = new Employee("Nurlan", 500);
const emp2 = new Employee("Tabriz", 700);

console.log(emp1);
console.log(emp2);

// INHERITANCE
const address = {
    city: "Baku",
    district: "Yasamal",
    street: "Sh. Mehdiyev",
    fullAddress: function () {
        return `${this.city} ${this.district} ${this.street}`
    }
}

const myAddress = Object.create(address);
console.log(myAddress);
console.log(myAddress.city);

myAddress.street = "H. Javid";
console.log(myAddress);

console.log(myAddress.city);
myAddress.city = "Gandja"
console.log(myAddress.city);
console.log(myAddress);

console.log(myAddress.hasOwnProperty("city"));
console.log(myAddress.hasOwnProperty("district"));

// in operator for prototyoe
console.log("district" in myAddress);