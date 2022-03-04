// CLASS DECLARATİON
class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    fullName() {
        return `${this.surname} ${this.name}`
    }

    static showName = "Person";
    static staMethod() {
        console.log("Static Method");
    }
}

// Inheritance
// OBJECT (prototype) + (name, surname ...) => Person
// Person => Employee

// extends & super
class Employee extends Person {
    constructor(name, surname, age, department) {
        super(name, surname, age);
        this.department = department;
    }

    getSalary() {
        console.log("No salary");
    }
};

const emp1 = new Employee("Tabriz", "Osmanli", 22);
console.log(emp1);
console.log(emp1 instanceof Employee);
console.log(emp1 instanceof Person);

// Instance
const per1 = new Person("Qara", "Humbatov", 21);
const per2 = new Person("Nurlan", "Ramazanov", 21);

// console.log(per1);
// console.log(per2);

console.log(per1 instanceof Person);
console.log(per2 instanceof Person);

// Static property/meyhod
console.log(Person.showName);
console.log(Person.staMethod());