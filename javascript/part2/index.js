console.log("ram kumar");
let name = "Ram kumar maniyari";
console.log(name);
console.log(3 + 5);
console.log("hello world!!!!");

console.log(5 + 4);

console.log(5 + 6 - (4 / 2) * 4);

console.log("primitive data type in js");
console.log(typeof 7);
console.log(typeof "Ram kumar");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol());
console.log(typeof 4532n);

console.log("Non primitive data type in js");

let person = {};
console.log(typeof person);

let arr = ["apple", "mango", 43, 23, true, null, undefined];
console.log(typeof arr);

console.log("----------------------");

function getSum(...args) {
  let sum = 0;

  for (item of args) {
    sum += item;
  }
  console.log(sum);
}
getSum(2, 3, 4, 5, 2, 3, 98);

let str = `this is bactick for creating string`;
console.log(str);

console.log(10000 + "");
let temp = 10000 + "";
console.log(typeof temp);

console.log(+false);
console.log(-true);
console.log(true - 1);
console.log(true - true);
console.log(typeof true - true);
console.log(typeof false - false);
console.log(typeof false + false);
console.log(typeof true + true);

console.log(typeof +null)
console.log(typeof -null)
console.log(typeof -undefined)
console.log(typeof +undefined)
console.log(++undefined)
console.log(--undefined)
const value = null;

if (value === null) {
  console.log("It's null!");
}


if (typeof value === "object" && value !== null) {
  console.log("It's a genuine object");
}



