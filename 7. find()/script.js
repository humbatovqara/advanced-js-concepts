const numbers = [3, 15, 9, 144, 99]

const found = numbers.find(number => number > 10);

console.log(found);

// 

const users = [{
        id: 1,
        name: 'Qara'
    },
    {
        id: 2,
        name: 'Nurlan'
    },
    {
        id: 3,
        name: 'Ulvi'
    }
]

const foundUser = users.find(user => user.id == 2);
console.log(foundUser);