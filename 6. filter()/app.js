const numbers = [12, 5, 8, 99, 57];

const result = numbers.filter(number => number > 10)

console.log(result);

// 

const names = ['Qara', 'Nurlan', 'Ulvi', 'Tebriz'];

console.log(names.filter(name => name.length <= 4));

// 

const users = [
    {
        name: "Qara",
        age: 21
    },
    {
        name: "Nurlan",
        age: 21
    },
    {
        name: "Ulvi",
        age: 20
    },
    {
        name: "Tebriz",
        age: 22
    }
]

console.log(users.filter(user => user.age == 21));

// 

const search = (keyword, array) => array.filter(item => item.toLowerCase().includes(keyword.toLowerCase()));
console.log(search('u', names))

// console.log(names.filter(name => name.includes('U')));