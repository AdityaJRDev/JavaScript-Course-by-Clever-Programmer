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

console.log(calcualteFoodTotal(300, 30));

//ES6
//Arrow functions =>
// Arrow function with explicit return
const sumArrow = (a, b) => {
  return a + b
}

//arrow function with implicit return
// IMPORTANT : For implicit return, remove curly braces and return keyword
const sumArrow2 = (a, b) => a + b

console.log(sumArrow2(10, 50));