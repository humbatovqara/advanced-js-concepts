// JS Single Thread
// JS Synchronous - Problem of Synchronous - 2
/* 
const func1 = () => {
    console.log("Func 1 Console Log 1");
    console.log("Func 1 Console Log 2");
    alert("Alert Message");
}

const func2 = () => {
    console.log("Func 2 Console Log 1");
    console.log("Func 2 Console Log 2");
}

func1();
func2();
*/





// Problem of Synchronous - 2
/*
let x = 10;
console.log("Process 1: " + x);

setTimeout(() => {
    x = x + 5;
}, 1000)
console.log("Process 2: " + x);

x = x + 5;
console.log("Process 3: " + x);
*/





// Call Stack - 1
/*
function func1() {
    console.log("Birinci");
    func2();
    console.log("Təkrar Birinci");
}

function func2() {
    console.log("İkinci");
    func3();
    console.log("Təkrar İkinci");
}

function func3() {
    console.log("Üçüncü");
}

func1();
*/





// Call Stack - 2
/*
function add(x, y) {
    return x + y;
}

function average(x, y) {
    return add(x, y) / 2;
}

let x = average(6, 8);
console.log(x);
*/





// Call Stack 3 - Callback
/*
function task(message) {
    let n = 10000000;
    while(n > 0) {
        n--
    }

    console.log(message)
}

console.log('1');
setTimeout(() => {
    console.log('2');
}, 1000);
console.log('3');
console.log('4');

task('OK')
*/





// Callback
/*
const myName = () => {
    console.log("My name is Qara");
}

setTimeout(myName, 3000);
*/

/* 
setTimeout(() => {
    console.log("My name is Qara");
}, 3000); 
*/

const books = [{
        name: "Book 1",
        author: "Author 1"
    },
    {
        name: "Book 2",
        author: "Author 2"
    },
    {
        name: "Book 3",
        author: "Author 3"
    }
]

const listBooks = () => {
    books.map((book, index) => {
        console.log(book, index)
    })
}

const addNewBook = (newBook, callback) => {
    books.push(newBook);
    callback();
}

addNewBook({
    name: "Book 4",
    author: "Author 4"
},listBooks);