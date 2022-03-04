// JS CLASSES

// constructor function
function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

/*
function fullName() {
    return `${this.name} ${this.surname}`
}
*/

Person.prototype.fullName = function () {
    return `${this.name} ${this.surname}`
}

const person1 = new Person("Qara", "Humbatov", 21);
const person2 = new Person("Nurlan", "Ramazanov", 21);

console.log(person1);
console.log(person2);
console.log(person1.fullName());
console.log(person2.fullName());

// Class
/*
function Employee(name, surname, department, salary) {
    this.name = name;
    this.surname = surname;
    this.department = department;
    this.salary = salary;
}
*/

// Class Declaration
class Employee {
    constructor(name, surname, department, salary) {
        this.name = name;
        this.surname = surname;
        this.department = department;
        this.salary = salary;
        this.colleague = ["Qara", "Nurlan"];
    }

    fullName() {
        return `${this.surname} ${this.name} - ${this.department} - ${this.salary}`
    }
}

// Class Expression
const Cars = class {
    constructor(name, surname, department, salary) {
        this.name = name;
        this.surname = surname;
        this.department = department;
        this.salary = salary;
        this.colleague = ["Qara", "Nurlan"];
    }

    fullName() {
        return `${this.surname} ${this.name} - ${this.department} - ${this.salary}`
    }
}

const emp1 = new Employee("Ulvi", "Rafizade", "Lab", 250);
const emp2 = new Employee("Tabriz", "Osmanli", "Lab", 500);

console.log(emp1);
console.log(emp2);
console.log(emp1.fullName());
console.log(emp2.fullName());

console.log(emp1.colleague);
console.log(emp2.colleague);

emp1.colleague.push("Ramazan");

console.log(emp1.colleague);
console.log(emp2.colleague);