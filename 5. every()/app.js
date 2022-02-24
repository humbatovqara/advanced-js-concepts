const array1 = [2, 4, 6, 8, 10, 13];

const check1 = number => number >= 2
const check2 = number => number % 2 == 0;

const result1 = array1.every(check1)
const result2 = array1.every(check2)

const result3 = array1.every((number, index, arr) => {
    // console.log(index, arr);
    return number % 2 == 0;
})

// console.log(result1);
// console.log(result2);
// console.log(result3);

const users = [{
        name: 'Qara',
        age: 21
    },
    {
        name: 'Tebriz',
        age: 22
    },
    {
        name: 'Ulvi',
        age: 20
    }
]

console.log(users.every(user => {
    user.age === 22
}))