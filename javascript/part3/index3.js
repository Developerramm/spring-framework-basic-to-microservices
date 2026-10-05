// debugger
const username = "Ram";
const userAge = 30;

console.log(username);
console.log(userAge);

function aaa() {
  // console.log(this.chrome.app)
  let a = 20;
  let b = 30;
  addTwoNumber(a, b);
}

aaa();

function substract(number1, number2) {
  console.log(number1 - number2);
}

function addTwoNumber(number1, number2) {
  let sum = number1 + number2;
  substract(number1, number2);
  return sum;
}

console.log(addTwoNumber(30, 20));

console.log("Program ended here ");
