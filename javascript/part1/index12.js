// debugger
const user = {
  firsName: "Ram",
  lastName: "Kumar",
  age: 20,
  isGraduate: false,
  address: {
    city: "sitamarhi",
    state: "Bihar",
    pincode: 843302,
    moreDetails: {
      population: 432434234,
      street: "LG Road",
      area: "4342 sq km",
    },
  },
};

console.log(user);
console.log(user.address);
// console.clear();

user.age = 30;
console.log(user.age);

user.mobile = 9875632142;
console.log(user.mobile);

// user = {}

let username = "ramkumar";
console.log(username);
username = "ram432345";
console.log(username);

// delete user.mobile;
console.log(user.mobile);

Object.seal(user);
user.gender = "male";
console.log(user.gender);

Object.freeze(user);
user.firsName = "rerwrer";
console.log(user);
delete user.firsName;
console.log(user.firsName);

console.log("gender" in user);
console.log("firsName" in user);

delete user.isGraduate;
console.log("isGraduate" in user);

// console.clear();
