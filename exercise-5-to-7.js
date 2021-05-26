///////////////////////////////////////////////////////////////////////////////////////
//
//                                  Exercises section
//
///////////////////////////////////////////////////////////////////////////////////////

console.log("*****************Exercises************************");

// Creating Address Object

console.log('Creating a simple object*******************');

const address = {
    street: 'xyz',
    city: 'Lahore',
    zipCode: 123
}

function showAddress(obj) {
    for (let key in obj)
        console.log(`${key}:   ${obj[key]}`);
}

showAddress(address);


// Creating Address object usin factory method

console.log('Factory method*************')
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

let factoryAddressObj = createAddress('xyz', 'lahore', 123);
console.log(Object.keys(factoryAddressObj));
showAddress(factoryAddressObj);


// Creating Address object usin constructor method

console.log('Conscturcor method*************')

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let constructorAddressObj = new Address('xyz', 'Lahore', 123);
console.log(typeof constructorAddressObj);
showAddress(constructorAddressObj);


// Object equality

console.log('Object Equality*************')

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

function areEqual(obj1, obj2) {
    return obj1.street === obj2.street &&
        obj1.city === obj2.city && obj1.zipCode === obj2.zipCode;
}

function areSame(obj1, obj2) {
    return (obj1 === obj2);
}

console.log('Are address same: ', areSame(address1, address2));
console.log('Are address equal: ', areEqual(address1, address2));


// blog post object

console.log('Blog post object*************')

const blogPost = {
    title: 'title',
    body: 'body',
    author: 'author',
    views: 400,
    comments: [
        { author: 'comment author', body: 'comment body' },
        { author: 'comment author', body: 'comment body' },
        { author: 'comment author', body: 'comment body' }

    ],
    isLive: true
};

let blogPostMessage = `
    title:      ${blogPost.title}
    body:       ${blogPost.body}
    author:     ${blogPost.author}
    views:      ${blogPost.views}
    comments:
        author: ${blogPost.comments[0].author}
        body:   ${blogPost.comments[0].body}
    isLive:     ${blogPost.isLive}

`;

console.log(blogPostMessage);

// blog post constructor functions

console.log('Constructor Function*************')


function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let firstPost = new Post('a', 'b', 'c');
console.log(firstPost);

console.log('Arrays********************');

console.log('array generator: arrayFromRange(min, max)********************');

// Array generator
function arrayFromRange(min, max) {
    let numbers = [];
    for (let value = min; value <= max; ++value)
        numbers.push(value);
    
    return numbers;
}

const numbersGenerated = arrayFromRange(-1, 3);
console.log('numbers generated', numbersGenerated);


// find element from an array
console.log('find element from array: includes(array, searchElement)********************');


function includes(array, searchElement) {

    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}

let numbers = [1, 2, 3, 4];

console.log('does array have element 3: ', includes(numbers, 3));



// removing elements from an array
console.log('remove elements from array: except(array, exclude)********************');


function except(array, exclude) {
    const output = [];
    for (let element of array)
        if (!exclude.includes(element))
            output.push(element);
    return output;
}

console.log('excluded array: ', except(numbers, [2,3]));

// moving element of an array
console.log('moving elements of an array: move(array, index, offset)********************');


function move(array, index, offset) {
    if ((index + offset > array.length) || (index + offset < 0)) {
        console.error('Invalid offset');
        return;
    }

    const output = [...array];

    let element = output.splice(index, 1);
    output.splice(index + offset, 0, element[0]);

    return output;
}

numbers = [1, 2, 3, 4];

const NewNumbers = move(numbers, 2, 1);

console.log(numbers);
console.log(NewNumbers);


// count occurences of an element
console.log('count occurences of an element: countOccurences(array, searchElement)********************');

function countOccurences(array, searchElement) {
    let count = 0;
    for (let element of array) 
        if (element === searchElement)
            count++;
    return count;
}

numbers = [1, 2, 3, 4, 2, 5, 1, 2];
console.log('count occurences: ', countOccurences(numbers, 2));

// count occurences using reduce method

const numberOccurence = numbers.reduce((accumulator, currentValue) => {
    if (currentValue === 3)
        accumulator++;
    return accumulator;
}, 0);

console.log('count occurences: ', numberOccurence);



// find maximum number from an array
console.log('find max number from an array : getMax(array)********************');


numbers = [2, 3, 4, 6, 3, 4];
// simple solution
function getMax(array) {
    let max = array[0];
    for (let element of array)
        if (element > max)
            max = element;
    return max;
}

// using reduce method

const max = numbers.reduce((a, c) => {
    return (a > c) ? a : c;
});

console.log('maximum of array: ', getMax(numbers));
console.log('maximum of array: ', max);


// filter array of objects
console.log('filter array of objects********************');

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
];


const titles = movies
    .filter(obj => (obj.year === 2018) && (obj.rating > 4))
    .sort((obj1, obj2) => obj1 - obj2)
    .reverse()
    .map(obj => obj.title);

console.log(titles);

// sum of arguments
console.log('Sum of arguments********************');


function sum(...args) {
    let array = args;
    if (Array.isArray(args[0]))
        array = args[0];
    return array.reduce((a, c) => a + c);
}

console.log(sum([1, 2, 3, 4]));

// area of circle
console.log('Area of circle********************');

const circle = {
    radius: 2,
    get area() {
        return Math.PI * (this.radius ** 2);
    }
};

console.log('area of circle: ', circle.area);


// error handling
console.log('Error handling********************');


numbers = [2, 3, 4, 6, 3, 4];

function occurenceOfNumber(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array');
    return array.reduce((accumulator, currentValue) => {
        return accumulator += (currentValue === searchElement) ? 1 : 0;
    }, 0);  
}

try {
    console.log('count occurences: ', occurenceOfNumber(null, 2));
} catch (error) {
    console.log(error.message);
}



