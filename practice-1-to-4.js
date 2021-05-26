
///////////////////////////////////////////////////////////////////////////////////////
//
//                                  Practice section
//
///////////////////////////////////////////////////////////////////////////////////////

console.log("*****************Practice Section************************");


// Variables
console.log("******************Practicing Variables******************");
// logging something on the console
// defining a variable profession
let name = 'Mujeeb';        //String literal
let profession = 'Full-stack javascript developer'
console.log("My name is " + name + " and I am a " + profession + "");

// constants

const gender = 'male';
console.log("gender: " + gender);

// Primitive type or value type
console.log("******************Practicing Primitive data type******************");
let customer = 'Mujeeb';    //String literal
let age = 23;               //Number literal
let isWorking = true;       //Boolean literal
let firstName = undefined;  //Undefined
let lastName = null;        //Null

console.log("Customer: " + customer);
console.log("Age: " + age);
console.log("Working: " + isWorking);
console.log("firstName: " + firstName);
console.log("lastName: " + lastName);

// Reference type objects
console.log("******************Practicing objects reference type******************");

let house = {
    location: 'DHA, Lahore',
    rent: 30000,
    isAvailable: true
};

console.log("Location: " + house.location);
console.log("Rent: " + house['rent']);
console.log("Availability: " + house['isAvailable']);

// Reference type arrays
console.log("******************Practicing arrays reference type******************");

let shape = ['circle', 'square', 'tirangle'];

console.log("array: " + shape);
console.log("length: " + shape.length);

// Reference type functions
console.log("******************Practicing functions reference type******************");

function calculateSquareArea(sideLength) {
    return sideLength * sideLength;
}

console.log("Area of a square with 2m of side length: " + calculateSquareArea(2));

// Arithmatic Operators
console.log("******************Practicing Arithmatic Operators******************");

let number1 = 3;
let number2 = 5;

console.log("Addition: " + (number1 + number2));
console.log("Subtraction: " + (number1 - number2));
console.log("Multiplication: " + (number1 * number2));
console.log("Division: " + (number1 / number2));
console.log("Exponential: " + (number1 ** number2));
console.log("Pre Incremant: " + (++number2));
console.log("Post Incremant: " + (number1++));
console.log("Pre Decrement: " + (--number2));
console.log("Post Decrement: " + (number2--));

// Assignment Operators
console.log("******************Practicing Assignment Operators******************");

number1 = 3;
number1 += 4;

console.log(number1);

// Comparison Operators
console.log("******************Practicing Comparison Operators******************");

let number3 = 4;

console.log("Number3 is: " + number3);
console.log("is 3 > 5: " + (number3 > 5));
console.log("is 3 >= 3: " + (number3 >= 3));
console.log("is 3 < 5: " + (number3 < 5));
console.log("is 3 <= 5: " + (number3 <= 3));

// Equality Operator
console.log("******************Practicing Equality Operator******************");

let x = 3;
let y = '3';

// Strict equality
console.log("x is equal to y: " + (x === y));

// lose equality
console.log("x is equal to y: " + (x==y));


// Ternary Operator
console.log("******************Practicing Ternary Operator******************");

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log('Customer type: ' + type)

// Logical Operator
console.log("******************Practicing Logical Operator******************");

let userColor = 'blue';
let defaultColor = 'white';
let selectedColor = userColor || defaultColor;
console.log("Selected color: ", selectedColor);

// Exercise Swap numbers
console.log("******************Exercise Swap variables******************");

let a = 'rehman';
let b = 'mujeeb';

let temp = a;
a = b;
b = temp;

console.log("first name: ", a);
console.log("last name: ", b);

// If-else condition
console.log("******************Practicing if-else condition******************");

let time = 13;

if (time > 6 && time < 12) {
    console.log("Good morning");
} else if (time >= 12 && time < 20) {
    console.log("Good afternoon");
} else {
    console.log("Good evening")
}

// infinite loops :)
console.log("******************Practicing loops******************");

let i = 0;
while (i < 5) {
    console.log(i+1);
    i++;
}

// for-in loop
console.log("******************Practicing for-in loop******************");

let person = {
    name: 'mujeeb',
    age: 23,
    experties: 'javascript'
}

for (let a in person) {
    console.log(a, person[a]);
}

let colors = ['red', 'blue', 'green'];

for (let index in colors) {
    console.log(index, colors[index]);
}

// for-of loop
console.log("******************Practicing for-of loop******************");

for (let value of colors) {
    console.log(value);
}



