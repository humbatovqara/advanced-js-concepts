const numbers = [1, 2, 3, 5];

/* forEach */
let total = 0;
numbers.forEach(number => total += number);
console.log(total);

/* Reduce */
let total2 = numbers.reduce(function (acc, number) {
    return acc + number;
}, 5) // acc-nin başlanğıc dəyəridir, total = 0 kimi.

console.log(total2);

/* Example: Basket price */
const basket = [{
        name: "iPhone 11",
        price: 1800
    },
    {
        name: "Apple Macbook Pro",
        price: 4500
    },
    {
        name: "JBL",
        price: 800
    }
]

let sum = basket.reduce((acc, basketItem) => acc + basketItem.price, 0);
console.log(sum)

/* Example: Counted Names */
const names = ["Qara", "Ulvi", "Nurlan", "Tebriz", "Ulvi"];

let countedNames = names.reduce((allNames, name) => {
    if (name in allNames) {
        allNames[name]++
    } else {
        allNames[name] = 1
    }
    return allNames
}, {})

console.log(countedNames);

/* Group by */
const products = [{
        name: "Gamer Keyboard",
        brand: "Philips"
    },
    {
        name: "Gamer Mouse",
        brand: "Rampage"
    },
    {
        name: "iPhone 7",
        brand: "Apple"
    },
    {
        name: "Aspire E572-G",
        brand: "Acer"
    },
    {
        name: "PC Aspire",
        brand: "Acer"
    }
]

const groupBy = (array, property) => {
    return array.reduce((acc, product) => {
        let key = product[property]

        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(product)
        return acc
    }, {})
}

console.log(groupBy(products, 'brand'));

/* Select all tags */
const posts = [{
        title: "Post 1",
        tags: ["php", "css"]
    },
    {
        title: "Post 2",
        tags: ["javascript", "html5"]
    },
    {
        title: "Post 3",
        tags: ["html5", "json"]
    }
]

const allTags = posts.reduce((acc, post) => [...acc, ...post.tags], [])

console.log(allTags);

/*
const array2 = ['a', 'b', 'b', 'c', 'a', 'd', 'e', 'd', 'e'];
const result = allTags.reduce((acc, item) => {
    if(!acc.includes(item)) {
        acc.push(item)
    }
    return acc
}, [])
*/

console.log([...new Set(allTags)]);

/* Filter and Map ==> Reduce */
const numbers2 = [-5, 6, 2, 0];

console.log(numbers2.filter(number => number > 0).map(number => number * 2));

console.log(
numbers2.reduce((acc, number) => {
    if(number > 0) {
        acc.push(number * 2)
    }
    return acc
}, []))