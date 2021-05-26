// Objects

let circle = {
    radius: 2,
    location: {
        x: 0,
        y: 2
    },
    isVisible: true,
    area: function () {
        return (3.14 * (this.radius ** 2));
    },
    draw: function () {
        console.log('drawing the circle......');
    }
};

console.log('Circle radius: ',circle.radius);
console.log('Circle Location: ',circle.location.x, circle.location.y);
console.log('Circle area: ', circle.area());
circle.draw();


// Factory functions

function createPerson(name, age) {
    return {
        name,
        age,
        print() {
            console.log('Name: ', this.name);
            console.log('Age: ', this.age);
        }
    }
}

const person1 = createPerson('Mujeeb', 23);
person1.print();

const person2 = createPerson('Waseem', 23);
person2.print();


// constructor functions

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('drawing....');
    }
}

const c1 = new Circle(2);
c1.draw();

// Functions are Objects

function square(number) {
    return number**2;
}

console.log('Function name is: ', square.name);

// Value vs Reference/Object type

let value1 = 10;
let value2 = value1;
value1 = 20;

console.log('value1: ', value1);
console.log('value2: ', value2);


let object1 = { value: 2 };
let object2 = object1;
object2.value++;
console.log('object1: ', object1.value);
console.log('object2: ', object2.value);


// Enumerating objects

let person = {
    name: 'mujeeb',
    age: 23,
    print() {
        console.log('printing person details....');
    }
};

// using for-in loop
for (let key in person)
    console.log(key, person[key]);


// using for-of loop

for (let key of Object.keys(person))
    console.log(key);

for (let entry of Object.entries(person))
    console.log(entry);

// checking property if exist

if ('name' in person)
    console.log('Yes');


// Cloning object

// using for-of loop
const anotherPerson = {};

for (let key of Object.keys(person))
    anotherPerson[key] = person[key];

console.log(anotherPerson);

// using Object.assign() method

const tempPerson = {
    gender: 'male',
    draw() {
        console.log('nothing to draw');
} };

const person3 = Object.assign(tempPerson, person);

console.log(person3);

// using simple approach

const person4 = { ...person };
console.log(person4);

// Math built-in object
console.log('******************Math built-in object*****************');
console.log('cube root of 65', Math.cbrt(40));

console.log('Pseudo random: ', Math.round(Math.random()));

// Template literals

const name = 'Mujeeb';

// with simple strings
let str = 'Hi ' + name;
console.log(str);

let str1 =
    'Hi my name is \n' +
    'Mujeeb';
console.log(str1);

// with template literals
let str3 = `Hi my 'name' //is

${name}`;
console.log(str3);

// Date object

let now = new Date();
now.setFullYear('2017');
now.setMonth(1);
let utcDate = now.toISOString();
console.log('today: ', now);
console.log('utc: ', utcDate);

// Arrays

// adding elements to an array
console.log('******************Adding elements to an array*****************');


let numbers = [3, 4];

// at end
numbers.push(5, 6, 7);

// at beginning
numbers.unshift(1, 2, 3);

// at desired place
numbers.splice(3, 0, 'a', 'b', 2, 3);
console.log(numbers);


// finding elements from array

console.log('Finding elements from array*************')

console.log(numbers.indexOf(4));
console.log(numbers.lastIndexOf(3));
console.log(numbers.includes('c'));

// finding element from reference typed objects

let courses = [
    { code: 1, name: 'OOP' },
    { code: 2, name: 'DSA' },
    { code: 3, name: 'Database' },
];

let course = courses.find(function (course) {
    return course.code === 2 && course.name === 'DSA';
});

console.log(course);

// arrow function

let anotherCourse = courses.find((course) => {
    return course.name === 'OOP';
});

console.log(anotherCourse);

// removing elements from an array

console.log('Removing elements from an array*************')

numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers);

// at end
numbers.pop();
console.log(numbers);

// at beginning
numbers.shift();
console.log(numbers);

// at desired place
numbers.splice(2, 2);
console.log(numbers);

// emptying an array

numbers = [1, 2, 3, 4, 5, 6];

// first solution

// numbers = [];

// second solution
numbers.length = 0;

// third solution

// numbers.splice(0, numbers.length);

// fourth solution
// while (numbers.length > 0)
//     numbers.pop();

console.log(numbers);

// combining and slicing elements from an array

console.log('Combining & Slicing elements from an array*************')

const first = [1, 2, 3];
const second = [4, 5, 6];

// const combine = first.concat(second);

// spread operator to concatenate
const combine = [...first, 'a', ...second];


const slice = combine.slice(1, 4);

// spread operator to copy
const copy = [...combine];
console.log(combine);
console.log(slice);
console.log(copy);

// Iterating an array

console.log('Iterating an array*************')

// we can use for-in and for-of loop

// we can also use forEach method of arrays

numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach((number, index) => {
    console.log(index, number);
});


// Joining an array

console.log('Joining arrays elements*************')

const joined = numbers.join('-');
console.log(joined);

// slicing

const numbersArray = joined.split('-');
console.log(numbersArray);


// Sorting an array

console.log('Sorting arrays elements*************')

numbers = [2, 3, 1, 4];

numbers.sort();
console.log(numbers);

// for reference type

let employee = [
    { id: 1, name: 'mujeeb' },
    { id: 2, name: 'waseem' },
    { id: 3, name: 'danish' }
];

employee.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;
    if (nameA === nameB) return 0;
});

console.log(employee);

// Testing the elements of an array

console.log('Testing the elements of an arrays*************')

numbers = [1, -2, -3, 4];

// every() method

const allPositive = numbers.every((value) => {
    return value >= 0;
});

console.log(allPositive);

// some() method

const atLeastOnePositive = numbers.some((value) => {
    return value >= 0;
});

console.log(atLeastOnePositive);

// Filtering the elements of an array

console.log('Filtering the elements of an arrays*************')

numbers = [1, 2, 3, 4, 5, 6];

const allEven = numbers.filter((value) => {
    return value % 2 === 0;
});

console.log(allEven);

// Mapping the elements of an array
console.log('Mapping the elements of an arrays*************')

numbers = [1, 2, 3];

const list = numbers.map((value) => {
    return '<li>' + value + '</li>';
});

console.log(list);

const items = list.join('');
console.log(items);

// Reducing the elements of an array
console.log('Reducin the elements of an arrays*************')

numbers = [1, 2, 3];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);


// Functions
console.log('Functions***********************')

// Function declaration Vs. Expression
console.log('Function Declaration Vs. Expression***********************')


// Function declaration
function draw() {
    console.log('drawing....');
}

draw();

// Anonymous Function expression
let run = function () {
    console.log('running....')
};

let move = run;
run = 'a';
move();
console.log(run);

// Named function expression

let math = function sqrt(a) {
    return a ** 2;
};

console.log(math(3));


// Function arguments
console.log('Function Arguments***********************')

function adding() {
    let total = 0;
    for (let n of arguments)
        total += n;
    return total;
}

console.log(adding(1, 2, 3, 4));

// Rest Operator
console.log('Rest operator/prameter***********************')

function salary(basic, ...bonus) {
    let total = basic;
    for (let amount of bonus)
        total += amount;
    return total;
}

console.log('total salaray: ', salary(30000, 1000, 2000));


// Dafault parameters
console.log('Default parameters***********************')

function interest(principle, rate = 3.5, year = 3) {
    return principle * rate / 100 * year;
}

console.log('total interest: ', interest(30000, 3));


// setters and getters
console.log('Setters & Getters***********************')

person = {
    firstName: 'mujeeb',
    lastName: 'rehman',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(name) {
        if (typeof name !== 'string')
            throw new Error('Name is not string');
        
        const parts = name.split(' ');
        person.firstName = parts[0];
        person.lastName = parts[1];
    }
};

person.fullName = 'Muzammal Hussain';

console.log(person.fullName);

// error handling try & catch
console.log('Error handling try & catch***********************')

// we can simply apply this logic on the person object
try {
    person.fullName = null;
} catch (error) {
    console.log(error);
}


// Local Vs. Global schope
console.log('Local Vs. Global Scope***********************')


// This keyword
console.log('This keyword***********************')

let video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach((tag) => {
            console.log(tag);
        });
    }
}

video.showTags();










