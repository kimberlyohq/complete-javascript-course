"use strict";

// Coding Challenge 1

const calculateAvg = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const dolphinScore = [85, 54, 41];
const koalaScore = [23, 34, 27];
dolphinScore.incl;

let dolphinAvg = calculateAvg(...dolphinScore);
let koalaAvg = calculateAvg(...koalaScore);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgDolphins} vs ${avgKoalas})`);
  } else {
    console.log("draw");
  }
};

checkWinner(dolphinAvg, koalaAvg);

// Coding Challenge 2

const billValues = [125, 555, 44];

const calcTip = (billValue) => {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
};

// const tips = [];
// const total = [];

// billValues.forEach((value) => {
//   const tip = calcTip(value);
//   tips.push(tip);
//   total.push(value + tip);
// });

// console.log(tips);
// console.log(total);

// Coding Challenge 3

const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

if (John.calcBMI() > Mark.calcBMI()) {
  console.log(
    `John's BMI (${John.calc}) is higher than Mark's (${Mark.BMI})!"`
  );
} else {
  console.log(`Mark's BMI (${Mark.BMI}) is higher than John's (${John.BMI})!"`);
}

// Coding Challenge 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  let billValue = bills[i];
  let tip = calcTip(billValue);
  tips.push(tip);
  totals.push(billValue + tip);
}

console.log(tips);
console.log(totals);

const calcAverage = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
 
    sum += arr[i];
  }

  return sum / arr.length;
};

console.log(calcAverage(totals));
console.log(calcAverage(tips));