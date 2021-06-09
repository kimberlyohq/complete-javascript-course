console.log("1" + 2); // 12
console.log(+"1" + 2); // 3

// Operator precedence
let x = 0;
console.log(x++); // 0
console.log(x); // 1

console.log(++x); // 2
console.log(x); // 2

// Template literals

// creating multiline strings
console.log(`String 
is 
multiline`);

// Type Conversion (Explicit) and Coercion (By JS)

const inputYear = "1999";

// convert string to number
let numInputYear = +inputYear;
console.log(numInputYear);
numInputYear = Number(inputYear);
console.log(numInputYear);

console.log(typeof inputYear);

console.log("Convert string to number " + String(123));
console.log(typeof String(123));

// Type coercion 
console.log("23" - "10" - 3);