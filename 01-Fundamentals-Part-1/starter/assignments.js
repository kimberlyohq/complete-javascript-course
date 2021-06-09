let country = "Singapore";
let continent = "Asia";
let population = 5.704;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language;

console.log(typeof country); // string
console.log(typeof isIsland); // boolean
console.log(typeof population); // number
console.log(typeof language); // undefined

language = "English";

// Basic operators

let newPopulation = population / 2;
console.log("New Population " + newPopulation);
console.log("Add 1 to population: " + (population + 1));

const isFinlandPopulationLarger = 6 > population;
console.log("Question 3 " + isFinlandPopulationLarger);

const lessThanAverage = population < 33;
console.log("Question 4 " + lessThanAverage);

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);
