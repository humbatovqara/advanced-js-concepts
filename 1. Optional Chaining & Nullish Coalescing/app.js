// ? -> Optional Chaining
// ?? -> Nullish Coalescing

const user = {
    name: "Gara",
    cat: {
        name: "Toppush"
    },
    dog: {
        name: "Hush"
    }
}

/*
function sayHello(msg, callback) {
    console.log("Msg", msg);
    callback?.();
}
*/

/*
console.log(user.name);
*/

// Xəta verəcək
/*
console.log(user.name.getName());
*/

// Undefined verəcək
/*
console.log(user?.name?.getName?.());

console.log(user.dog?.name);

sayHello("Hello");

console.log("Code");
*/


/* ======================= */


console.log("Dog name:", user?.dog?.name ?? "None")
console.log(0 ?? 42);