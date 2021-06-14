'use strict';

function calcAge(birthYear) {
  const age = 2021 - birthYear;
  console.log(firstName); // K

  function printAge() {
    const output = `${firstName} , you are ${age}, born in ${birthYear}`;
    console.log(output);

    // Block Scope

    if (birthYear >= 1981 && birthYear <= 2010) {
      //const str = `Hello block scoped`;
      var blockScopedVar = true;
      //console.log(str);

      function add(a, b) {
        console.log(a + b);
        return a + b;
      }
    }
    // console.log(str); // ERROR : str is not defined (const is blocked scope)
    console.log(blockScopedVar); // OKAY: var is not block-scoped

    // Functions are also block-scoped
    //add(2, 3); // Error: add is not defined
  }

  printAge();
  return age;
}

// Global variable
const firstName = 'K';

// calcAge can access firstName as the function is called after firstName is declared
calcAge(2000);

// HOISTING
console.log(me); // undefined
// job and year still in temporal dead zone
// console.log(job); // Reference Error: cannot access job before initialization
// console.log(year); //error

var me = ' K';
let job = 'student';
const year = 2000;

console.log(addDeclaration(2, 3)); // Ok --> function declarations are hoisted
//console.log(addExpr(2, 3)); // Reference Error
//console.log(addArrow(2, 3)); // Type Error --> addArrow is not a function : addArrow is undefined

function addDeclaration(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// THIS keyword
console.log(this); // window object

const calcMyAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this); // undefined
};

calcMyAge(2000);

const calcMyAgeArrow = birthYear => {
  console.log(2021 - birthYear);
  console.log(this); // window
};

calcMyAgeArrow(2000);

const kim = {
  year: 2000,
  calcAge: function () {
    console.log(this); // kim object
    console.log(this.year); // 2000
  },
};

kim.calcAge();

const matilda = {
  year: 2017,
  calcAge: kim.calcAge, // Method borrowing
};

matilda.calcAge(); // 2017 --> this points to matilda

const f = kim.calcAge;
console.log(f);
//f(); // this --> undefined (Regular function call, not attached to any object)

// Arrow functions vs Regular functions
const k = {
  firstName: 'Kimberly',
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
    // function in a method
    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && this.year <= 1996);
    // };
    // Regular function call
    // isMillenial(); // Cannot read property year of undefined

    // Solution 2 - use arrow function (this refers to this of surrounding function)
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  // this refers to the window object because k is a global variable
  greet: () => {
    console.log(this); // window
    console.log(`Hey ${this.firstName}`);
  },
};

k.greet(); // Hey undefined
k.calcAge();

// arguments keyword
const addArg = function (a, b) {
  console.log(arguments);
  return a + b;
};

const addArgArrow = (a, b) => {
    console.log(arguments);
}

addArg(2, 3); // returns argument object
//addArgArrow(2, 3); // arguments is not defined
