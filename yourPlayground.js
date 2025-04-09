// fruit = prompt("What is your favourite fruit?")

// console.log(fruit);

// food = Number(prompt('How much was the food?'));
// tip_percent = Number(prompt('How much tip do you like to give?'));
// tipPercentage = tip_percent / 100;
// tipAmount = food * tipPercentage;
// total = food + tipAmount;

// console.log('total', total);
// console.log('tip amount', tipAmount);

//Baby weather app
// let weather = prompt('How is the weather?');

// if (weather == 'rainy') {
//   console.log('Grab your umbrella')
// } else {
//   console.log('Wear your sunglasses')
// }

//Functions
function sayMyName() {
  console.log('Aditya')
}

//sayMyName();

function sayMyName2(name) {
  console.log(name)
}

//sayMyName2('Gokul');

// function greeting(name) {
//greet = 'Hi ' + name + ', nice to meet you! ';

// template literals
//   greet = `Hi ${name}, Nice to meet you!`
//   console.log(greet);
// }

// greeting('Aditya');

function sum(a, b) {
  // return 
  return a + b;
}

// num1 = sum(1, 2);
// console.log(num1);

function calcualteFoodTotal(food, tip_percent) {
  const tipPercentage = tip_percent / 100;
  const tipAmount = food * tipPercentage;
  const total = sum(food, tipAmount);
  return total;
}

//console.log(calcualteFoodTotal(300, 30));

//ES6
//Arrow functions =>
// Arrow function with explicit return
const sumArrow = (a, b) => {
  return a + b
}

//arrow function with implicit return
// IMPORTANT : For implicit return, remove curly braces and return keyword
const sumArrow2 = (a, b) => a + b

//console.log(sumArrow2(10, 50));

//Arrays
//const groceries = ['banana', 'apple', 'orange', 'mango']
// console.log(groceries);

//grab the 2nd index
//console.log(groceries[2]);

//groceries.push('pomogrenate');
//console.log(groceries);

//groceries.push('blueberry');
//console.log(groceries);

// Array slices
// start from 0 INCLUSIVE and up to 6 [0, 1, 2, 3, 4, 5]
// console.log(groceries.slice(0, 6));

// console.log(groceries.slice(3, 6));
// array methods (slice, push, indexOf, length);
// console.log(groceries.indexOf('orange'));
// console.log(groceries.length);

// OBJECTS ()
// key: value pairs
// const person = {
//   name : 'Leonardo',
//   shirt: 'white'
// }

// access object : dot notation vs. bracket notation
// dot notation
// console.log(person.name);
// console.log(person.shirt);

// bracket notation
// console.log(person['name']);
// console.log(person['shirt']);

// assign object
// person.phone = '9087968060'
// person['phone'] = '9087968060'
// console.log(person.phone);
// console.log(person);

// person2
// const person2 = {
//   name: 'Gokul Kanna',
//   shirt: 'Black shirt'
// }
// console.log(person2);
// console.log(person2.name);
// console.log(person2.shirt);

// es6 arrow function (2 arguments)
// object
// template literals
// methods Math.floor()
const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    liability: 50000,
    netWorth: function() {
      return this.assets - this.liability
    }
  }
  
  const intro = `Hi, My name is ${person.name} and the color of my shirt is ${person.shirt} and the color of my shirt is ${person.shirt} and my net worth is $${person.netWorth()}`;

  return intro
}

// console.log(introducer('Dhinakar', 'Grey'));
// console.log(introducer('Leonardo', 'White'));

// const fruits = ['banana', 'apple', 'orange', 'mango']

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

// for(const fruit of fruits) {
//   console.log(fruit);
// }

const numbers = [1, 2, 3, 4, 5, 6]
// for(i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

const double = (numbers) => {
  let result = [];

  for (const number of numbers) {
    result.push(number ** 2);
  }

  return result;
}

// console.log(double([1, 2, 3, 4, 5, 6]))

// for (const number of numbers) {
//   result.push(number * 2);
// }

// console.log(result);

const howManyLetters = (phrase) => {
  let result = 0;

  for (const index in phrase) {
    console.log(Number(index) +1)
    result = Number(index) + 1
  }

  return { result };
}

// const phrase = prompt('Write your phrase')

// console.log(howManyLetters(phrase));

const sumArray = (numbers) => {
  let result = 0;

  for(const number in numbers) {
    console.log(number);
    result += number;
  } 

  return result;
}

// num = [1, 2, 3, 4];
// console.log(sumArray(num));

const max = (numbers) => {
  let result = numbers[0];

  // for loop
  for(const number of numbers) {
    if(number > result) {
      result = number;
    }
  }

  return { result };
}
// console.log(max([1, 2, 3, 4, 5]))

const letterFrequency = (phrase) => {
  console.log(phrase);

  let frequency = {}
  for(const character of phrase) {
    if(character in frequency) {
      frequency[character] += 1;
    } else {
      frequency[character] = 1;
    }
  }

  return frequency;
}

// console.log(letterFrequency('haha'));

//wordFrequency
const wordFrequency = (phrase) => {
  const words = phrase.split(' ');
  return letterFrequency(words);
}

// const userInput = prompt('Write your sentence')
// console.log(wordFrequency(userInput))

const doubleMap = (numbers) => {
  return numbers.map(number => number * 2)
}

// console.log(doubleMap([1, 2, 3]));

// filter
const filter = (numbers, greaterThan) => {
  let result = [];

  for (const number of numbers) {
    if(number > greaterThan) {
      result.push(number)
    }  
  }

  return result;
}

// console.log(filter([1, 2, 3, 4, 5, 6], 3))
// const nums = [1, 2, 3, 4, 5, 6];
// let filteredNumbers = nums.filter((num) => num > 3);
// console.log(filteredNumbers);

const actors = [
  {name: 'johny', netWorth: 2000000},
  {name: 'amber', netWorth: 10},
  {name: 'matt', netWorth: 170000000},
  {name: 'brad', netWorth: 300000000},
  {name: 'leonardo', netWorth: 10000000},
]

// let result = actors.filter(actor => actor.netWorth > 10)
// let names = result.map(actor => actor.name).join(', ');
console.log(actors.reduce((prev, curr) => prev + curr.netWorth, 0))

// playground.innerHTML = `<h1>${names}</h1>`;

//reduce
// sum all of the net worths
// SUM: Think reduce
// reduce takes in a function as an argument
// reduce loops and gives you back the accumulator

// const nums = [1, 2, 3]
// const result = nums.reduce((prev, curr) => prev + curr)

// console.log(result);