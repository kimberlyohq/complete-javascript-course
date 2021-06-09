// Coding Challenge 1
const markMass = 78;
const johnMass = 92;

const markHeight = 1.69;
const johnHeight = 1.95;

const calculateBMI = (mass, height) => {
  return mass / height ** 2;
};

const markBMI = calculateBMI(markMass, markHeight);
const johnBMI = calculateBMI(johnMass, johnHeight);

const markHigherBMI = markBMI > johnBMI;

// Coding Challenge 2

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}

// Coding Challenge 3
const calculateAvg = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

let dolphinAvg = calculateAvg(96, 108, 89);
let koalaAvg = calculateAvg(88, 91, 110);

const minScore = 100;

const dolphinHasMinScore = [96, 108, 89].filter((x) => x >= 100).length > 0;
const koalaHasMinScore = [88, 91, 110].filter((x) => x >= 100).length > 0;

if (dolphinAvg > koalaAvg && dolphinAvg) {
  console.log("DOLPHIN WINS");
} else if (dolphinAvg < koalaAvg && koalaHasMinScore) {
  console.log("KOALA WINS");
} else if (dolphinAvg == koalaAvg && dolphinHasMinScore && koalaHasMinScore) {
  console.log("TIES");
}

// Coding Challenge 4
let tip;
const billValues = [275, 40, 430];

billValues.forEach((value) => {
  tip = value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;
  console.log(`The bill was ${value}, the tip was ${tip}, and the total value
${value + tip}`);
});
