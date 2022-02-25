const numbers = [1, 4, 9];

/* forEach */
numbers.forEach((number, index) => {
    numbers[index] = number * 2;
})

/* Map */
const result = numbers.map(number => number * 2)
// const result = numbers.map(number => Math.sqrt(number))

console.log(numbers);
console.log(result);

/* Object */
const users = [
    {
        name: "Qara",
        surname: "Humbatov",
        age: 22
    },
    {
        name: "Nurlan",
        surname: "Ramazanov",
        age: 22
    }
]

const date = new Date();
const result2 = users.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`,
        yearOfBirth: date.getFullYear() - user.age
    }
})

console.log(result2);

const todos = [
    {
        id: 1,
        name: "Todo 1",
        complated: false
    },
    {
        id: 2,
        name: "Todo 2",
        complated: false
    }
]

console.log(todos.map(todo => {
    if(todo.id === 2) {
        todo.complated = true;
    }
    return todo;
}));