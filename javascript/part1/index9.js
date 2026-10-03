// const userAge1 = 19;
// const userAge2 = "19";
// const userAge3 = 20;

// logical operator

// && AND operator
// || OR operator
// ! NOT operator

// let bool = (userAge1 >= 19) && (userAge2 <= 30);

// let bool1 = (userAge1 >= 19) || (userAge2 <= 12);

// let username = prompt("Enter your name : ");
// const age = +prompt("Please Enter your age : ");
// console.log(`Username : ${username}`);
// console.log(`User age : ${age} `);

// if (age >= 22 && age <=60) {
//   console.log("User is a working professional");
//   console.log("if condition run")
// }

// console.log("program ended")

const dayNumber = 3;
// debugger
if (dayNumber === 0) {
  console.log("It is Sunday Today");
} else if (dayNumber === 1) {
  console.log("It is Monday Today");
} else if (dayNumber === 2) {
  console.log("It is Tuesday Today");
} else if (dayNumber === 3) {
  console.log("It is Wednesday Today");
} else if (dayNumber === 4) {
  console.log("It is Thirsday Today");
} else if (dayNumber === 5) {
  console.log("It is friday Today");
} else if (dayNumber === 6) {
  console.log("It is Saturday Today");
} else {
  console.log("Enter valid day number 0 to 6");
}

switch (dayNumber) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thirsday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("Saturday");
    break;

  default:
    console.log("Enter valid day nubmer");
}

console.log("Prigram ended ");
