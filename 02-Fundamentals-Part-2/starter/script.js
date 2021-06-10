"use strict";

// let hasDriverLicense = false;
// let passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriverLicense) console.log("PASSED");

// const interface = "audio";

// Functions

// Function expressions
const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

console.log(calcAge(2000));

// Objects

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  // function expression
  calcAge: function () {
    return 2021 - this.birthYear;
  },
  get age() {
      return 2021 - this.birthYear;
  }
};

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

console.log(jonas.age);
console.log(jonas["calcAge"]());
