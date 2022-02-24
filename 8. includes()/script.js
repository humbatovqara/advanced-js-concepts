const numbers = [1, 3, 5, 7];

const addNumber = number => {
    if(!numbers.includes(number)) {
        numbers.push(number)
    }
}

addNumber(5)
addNumber(5)
addNumber(6)
addNumber(8)

console.log(numbers);

console.log(numbers.includes(5));
console.log(numbers.includes(8));

// 

const names = ['Ali', 'Vali', 'Qara', 'Nurlan', 'Qara']

console.log(names.includes('vali'));
console.log(names[2].includes('ra'));

console.log(names.includes('Qara', 3))