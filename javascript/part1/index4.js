console.log("javascript practice");

let score = new Array();
console.log(typeof score);
console.log(score.length);

score = new Array(10);
console.log(score);
console.log(score.length);
for (let i = 0; i < score.length; i++) {
  console.log(score[i]);
}
console.log("printing array ");

score = new Array(10, 20, 30, 40, 50, 60);
console.log(score);

let arr = ["ram", 20, "mohan", false, true, { name: "mohan", age: 20 }];
console.log(arr);

console.log(arr.length);

console.log(arr[arr.length - 1]);
console.log(arr[arr.length - 1].age);
console.log(arr[arr.length - 1].name);

let mountains = ["Everest", "Fuji", "Nanga Parbat"];

console.log(mountains);
mountains.pop();
console.log(mountains);

// while(mountains.length > 0){
//     // mountains.pop();
// }

console.log(mountains);

mountains.push("ram", "mohan", "Sohan", "Geeta");
console.log(mountains);

mountains.unshift("Red see");
console.log(mountains);

mountains.shift();
mountains.shift();
mountains.shift();
mountains.shift();
console.log(mountains);

function add(x, y) {
  return x + y;
}

console.log(Array.isArray(mountains));

console.log(Array.isArray(add));

console.log(typeof add);

let person = {
  name: "Ram kumar",
  valueOf() {
    return 100;
  },
};
console.log(person);
console.log(person.valueOf());

let remainder = 5 % 2;
console.log(remainder);

console.log(-5 % 3);
console.log(-5 % -2);

console.log(10 % 0);

console.log(Infinity % Infinity);

console.log(10 % Infinity);

console.log(0 % 10);

console.log("10" % 3);

let num = 10;

if (num % 2 == 0) {
  console.log("Even number");
} else {
  console.log("Odd number ");
}

let rows = 4;
let cols = 4;

for (let i = 0; i < rows; i++) {
  let pattern = "";
  for (let j = 0; j < cols; j++) {
    pattern += "* ";
  }
  document.write(pattern + "<br>");
}

console.log(false);
console.log(true + 1);

console.log(false + 1);
console.log(false - 1);

person = {
  name: "ram",
  toString: function () {
    return "25";
  },
};

console.log(person);
console.log(person.toString());

console.log(typeof person.toString());

console.log(+person);
console.log(+person.toString());

console.log(typeof +person.toString());

console.log(+person.toString());

let apple = {
  valueOf: function () {
    return 10;
  },
};

let orange = {
  toString: function () {
    return "20";
  },
};

console.log(apple > 10);
console.log(orange == 20);

console.log(null == undefined);
console.log(NaN == NaN);

console.log(typeof NaN);

let counter = 10;
console.log(counter);
console.log(!counter);
console.log(!!counter);

if ("Ram") {
  console.log("ram");
} else {
  console.log("Shyam is here");
}
