/*
    - Spread
    - Rest
    - 3 dots syntax (...)
*/

const user = ["Qara", "Ulvi", "Nurlan", "Tabriz", "Ahmad"];

/* -- Rest -- */
function getName(name1, name2, ...otherNames) {
    console.log(name1);
    console.log(name2);
    console.log(otherNames);
}

/* -- Spread -- */
// getName(user[0], user[1], user[2]);
getName(...user)

/* -- Spread (Object) -- */
const employee = {
    name: 'Gara',
    surname: 'Humbatov'
}

// const newEmployee = employee;

const newEmployee = {
    ...employee,
    surname: 'Humbat'
};

console.log(employee);
console.log(newEmployee);

/* -- Spread (Object) - Real examples -- */
function request(opts = {}) {
    const options = {
        error: true,
        success: true,
        ...opts
    }
    console.log(options)
}

request({
    error: false
})

request({
    success: false
})

/* -- Spread (Object) - Real examples 2 -- */
const numbers = [1, 2, 3, 4];

console.log([0, ...numbers, 5]);

/* -- Spread (Object) - Real examples 3 -- */
const titles = document.querySelectorAll('h3');

// titles.map(title => console.log(title));
[...titles].map(title => console.log(title));