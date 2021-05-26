///////////////////////////////////////////////////////////////////////////////////////
//
//                                  Exercises section
//
///////////////////////////////////////////////////////////////////////////////////////

console.log("*****************Exercises************************");

// Finding Maximum of two numbers

function findMax(number1, number2) {
    return (number1 > number2) ? number1 : number2;
}

let hights = [6, 5];

console.log("Maximum height: ", findMax(hights[0], hights[1]));

// Either a picture is landscape or not

function isLandscape(width, height) {
    return (width > height);
}

let image = {
    width: 23,
    height: 16
};

console.log("Image is Landscape: ", isLandscape(image.width, image.height));


// FizzBuzz :)

function fizzBuzz(number) {
    if (typeof number !== 'number')
        return NaN;
    else if ((number % 3 == 0) && (number % 5 == 0))
        return 'FizzBuzz';
    else if (number % 3 == 0)
        return 'Fizz';
    else if (number % 5 == 0)
        return 'Buzz';
    else
        return number;
}


console.log('Fizz Buzz: ', fizzBuzz(7));


// Speed checker

function checkSpeed(speed) {
    if (speed <= 70)
        return 'Ok';
    
    let points = 0;

    for (let s = 70; s <= speed; s += 5){
        ++points;
    }

    return (points <= 12) ? points : 'License Suspended !';
    
}

console.log('Speed Checker: ', checkSpeed(180));


// Even or Odd numbers

function evenOrOdd(limit) {
    let message = '';
    for (let i = 0; i <= limit; ++i){
        message = (i % 2 == 0) ? 'Even' : 'Odd';
        console.log(i, message);
    }
}
evenOrOdd(6);

// Count truthy

function countTruthy(array) {
    let count = 0;
    for (let value of array){
        if (array[value])
            count++;
    }

    return count;
}

const ary = [1, 2, 3, 4, '', null, undefined, NaN, 0, false];

console.log('count truthy: ', countTruthy(ary));


// String properties

function objectProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string')
            console.log(key, obj[key])
    }
        
}

const person = {
    name: 'Mujeeb',
    age: 23,
    gender: 'male',
}

objectProperties(person);


// find grade

function calculateAverate(marks) {
    let sum = 0;
    for (let mark of marks) 
        sum += mark;
    
    return sum / marks.length;
}

function calculateGrade(marks) {
    let average = calculateAverate(marks);

    if (average < 60)
        return 'F';
    if (average < 70)
        return 'D';
    if (average < 80)
        return 'C';
    if (average < 90)
        return 'B'
    
    return 'A';
}

const marks = [70, 74, 80, 92];

console.log('your grade is', calculateGrade(marks));

// printing stars

function showStars(rows) {
    for (let i = 0; i < rows; ++i){
        let portions = '';
        for (let j = 0; j <= i; ++j){
            portions += '*';
        }
        console.log(portions);
    }
}

showStars(4);


// Prime numbers

function showPrime(limit) {
    let flag = false;

    for (let i = 0; i < limit; ++i){
        flag = false;
        for (let j = 2; j <= i / 2; ++j){
            if (i % j == 0) {
                flag = true;
                break;
            }
        }

        if(!flag)
            console.log(i);
    }
}

showPrime(20);


// Writing function which calculated the factorial of a number

function calculateFactorial(number) {
    if (number < 1)
        return null;
    
    let factorial = number;
    
    for (let i = number-1; i > 0; --i)
        factorial *= i;
    
    return factorial;
}

let number = 5;

console.log("Find Factorial of " + number + ": ", calculateFactorial(number));












