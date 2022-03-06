// PROMISE

/* 
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

const addNewBook = (newBook) => {
    books.push(newBook);
} 
*/





// Manual
/* 
addNewBook({
    name: "Book 4",
    author: "Author 4"
});

listBooks(); 
*/





// Callback
/* 
const addNewBook = (newBook, callback) => {
    books.push(newBook);
    callback();
}

addNewBook({
    name: "Book 4",
    author: "Author 4"
}, listBooks);
 */

/* const promise1 = new Promise(function(resolve, reject) {
    // resolve('DATA');
    reject('Error');
}) */

// console.log(promise1);




// THEN - Normal Function
/* promise1.then(function(value){
    console.log(value)
}) */

// promise1.then(value => console.log(value))
// promise1.catch(reason => console.log(reason))

/* const promise1 = new Promise((resolve, reject) => {
    resolve();
})

promise1
    .then(() => {
        console.log("Veriler alindi");
    })
    .catch(() => {
        console.log("Veriler alinmadi");
    })
    .finally(() => {
        console.log("Work");
    }) */


// THEN AS RESOLVE or REJECTED
/* const promise1 = new Promise((resolve, reject) => {
    // resolve();
    reject();
})

promise1
    .then(() => {
            console.log("Veriler alindi");
        },
        () => {
            console.log("Veriler alinmadi");
        }
    ) */





// Form: Callback
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

/* const addNewBook = (newBook, callback) => {
    books.push(newBook);
    callback();
} */


const addNewBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook)
        resolve(books)
        // reject('Error')
    })

    return promise1
}

// addNewBook({
//     name: "Book 4",
//     author: "Author 4"
// }, listBooks);

addNewBook({
        name: "Book 4",
        author: "Author 4"
    })
    .then(() => {
        console.log('New lists');
        listBooks();
    })
    .catch((reason) => {
        console.log(reason);
    })