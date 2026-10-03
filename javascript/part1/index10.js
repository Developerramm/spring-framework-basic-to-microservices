console.log("javascript tutorial");

const grade = "D";
// debugger;
switch (grade) {
  case "A":
    console.log("score 90 % to 100%");
    break;
  case "B":
    console.log("score 80 % to 89%");
    break;
  case "C":
    console.log("score 70 % to 79%");
    break;
  case "D":
    console.log("score 60 % to 69%");
    break;
  case "E":
    console.log("score 40 % to 59%");
    break;
  default:
    console.log("You failed");
}

console.log("program ended here ");

console.log("Ternary operator");

let username = 5 > 2 ? "Ram kumar" : 100;
console.log(username);

let age = 30;

let isVote = age > 18 ? "Vote" : "Not Vote";

console.log(`Your can ${isVote} `);

const gender = "M";
// debugger
const userMessage = `${gender === "F" ? "She" : "He"} is a college student.`;

console.log(userMessage);

const result = 0 ? "Ram" : "Kumar Singh";
console.log(result);
console.clear();
console.log("visulalize variable address");

const firstName = "Ram sam";
const Age1 = 23;
const isGradute = false;
const lastName = "Kumar Singh";

let person1 = {
  name: "Ram",
  age: 20,
};

console.log(person1.name);
console.log(person1.age);

console.log(typeof person1);

console.log(typeof {});
console.log(typeof []);
// console.log(typeof 0)

const user1 = {
  firstName: "Ram",
  lastName: "Kumar",
  age: 30,
  isProgrammer: true,
  city: "Noida",
  education: 12,
  getName() {
    return this.firstName + " " + this.lastName;
  },
};

const user2 = {
  firstName: "Ram",
  lastName: "Kumar",
  age: 30,
  isProgrammer: true,
  city: "Noida",
  education: 12,
  getName() {
    return this.firstName + " " + this.lastName;
  },
};

const myName = "Mani";
const username1 = "";
const username2 = "";

console.log(user1 == user2);
console.log(user1 === user2);
console.log(username1 === username2);
console.log(username1 == username2);
