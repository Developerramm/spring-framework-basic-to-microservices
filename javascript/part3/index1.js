const fruits = ["Mango", "Apple", "Orange"];

const myFruits = fruits;

myFruits.push("Dates");
myFruits.push("Grapes");
console.log(fruits);
console.log(myFruits);

const user1 = {
  firstName: "Ram",
  lastName: "Kumar",
};

let user2 = user1;
console.log(user1);
user1.lastName = "singh";
// console.log(user);
console.log(user1);

let username1 = "ram kumar singh";
let username2 = username1;

const user = {};
Object.assign(user, user1);
console.log(user);
user.gender = "male";
console.log(user);
console.log(user1);

const user3 = { ...user1, gender: "Female", age: 20 };
console.log(user3);
console.log(user1);
console.clear();

const newArr = Object.assign(fruits);

console.log(newArr);
const newArr1 = [].concat(myFruits);
console.log(newArr1);

let arr = fruits.slice();
console.log(arr);
arr.push("ram");
console.log(fruits);
console.log(arr);
