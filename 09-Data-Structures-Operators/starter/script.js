'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights.split('+'));

const parseFlight = info => {
  const [type, sourceFlight, destinationFlight, dur] = info.split(';');

  const source = sourceFlight.slice(0, 3).toUpperCase();
  const dest = destinationFlight.slice(0, 3).toUpperCase();
  const [hour, min] = dur.split(':');

  const status = type.replace(/_/g, ' ').trim();

  return `${status} from ${source} to ${dest} (${hour}h${min})`;
};

for(const planeInfo of flights.split('+')) {
  console.log(parseFlight(planeInfo));
}


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a); // 1
// console.log(b); // 2

// only take the first and third elements
// let [first, , third] = restaurant.categories;
// console.log(first, third); // Italian

// [first, , third] = [third, , first];
// console.log(first, third); // Vegetarian

// console.log(restaurant.order(1, 1));
// const [starter, main] = restaurant.order(1, 1);
// console.log(starter, main);

// Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [one, two, [three, four]] = nested;
// console.log(one, two, three, four);

// Default values
// const defaultValues = [2, 4];
// const [x, y, z = 6] = defaultValues;
// console.log(x, y, z); // 2 4 6

// Objects
// const { name: restaurantName, categories } = restaurant;
// console.log(restaurantName);

// Mutating variables
// let a1 = 111;
// let b1 = 999;
// const obj = { a1: 23, b1: 7, c1: 14 };

// ({ a1, b1 } = obj);
// console.log(a1, b1);

// Nested objects
// const {
//   openingHours: { sat: Saturday },
// } = restaurant;
// console.log(Saturday);

// Spread operators
const arr = [1, 2, 3];
const newArr = [0, 0, ...arr];
console.log(...newArr); // log the individual elements

// Rest Pattern and parameters
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others); // [3, 4, 5]

console.log(null || 'hello');

// Looping over objects
const properties = Object.entries(restaurant.openingHours);
console.log(properties);

// Sets

const orderSet = new Set();
console.log(orderSet);
orderSet.add(1);
console.log(orderSet.has(1));
console.log(orderSet.add(1));

for (const order of orderSet) {
  console.log(order);
}
// Maps

const restaurantMap = new Map();
console.log(restaurantMap.set(1, 'hello'));
console.log(restaurantMap.set(1, 'hello'));
console.log(restaurantMap.has(1));
console.log(restaurantMap.get(1));

// Strings
const airline = 'TAP Air Portugal';
const plane = 'A320';

// slice methods
console.log(airline.slice(0, airline.indexOf(' '))); // First word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Last word

// negative index --> extract from the end
console.log(airline.slice(-2)); // last two letters
console.log(airline.slice(1, -1)); // cut off first and last character

const checkMiddleSeat = function (seat) {
  // B and E are middle seats

  const s = seat.slice(-1);
  //const s = seat[seat.length - 1];

  return s === 'B' || s === 'E';
};

console.log(checkMiddleSeat('11B'));
console.log(checkMiddleSeat('11C'));

const correctEmail = 'hello@jonas.io';

const email = '   Hello@Jonas.Io  \n';
console.log(email.trim().toLowerCase() === correctEmail);

// replace
const priceGb = '288,97E';
console.log(priceGb.replace('E', '$').replace(',', '.'));

const announcement =
  'All passengers come to boarding door 23. Boarding door 23';
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

const planeNeo = 'A320neo';
console.log(planeNeo.endsWith('A320neo'));

planeNeo.sp;
