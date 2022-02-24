/* Simple Concat() */

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
// const newArray = array1.concat(array2);
const newArray = array1.concat(array2, 'g');
// console.log(newArray);


/* Nested Concat() */
const numbers = [
    [1, 2],
    [3, 4]
];

console.log(numbers.concat([
    [5]
]));