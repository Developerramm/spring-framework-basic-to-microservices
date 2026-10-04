const fruits = ["Apple", "Banana", "Grapes", "Dates"];
console.log(fruits);
console.log(typeof fruits);

console.log(fruits.at(3));

for (let item of fruits) {
  document.write(item + "<br/>");
}

fruits.push("Mango");

// fruits = ["Cat"]
// fruits.at(4) = "ram kumar";

fruits.push("Water Melon");

fruits.push(45);
fruits.push(null);
fruits.push(undefined);
fruits.push(true);
fruits.push({ name: "ram", age: 30 });
console.log(fruits);
console.log(fruits.length);

fruits.push(["Cat", "Dog", "Ass", "Rabbit", "Ox"]);

console.log(fruits);
fruits[15] = "ram kumar singh";

console.log(fruits);
let item = fruits.pop();
console.log(item);
console.log(fruits);
console.clear();

const evenNumber = [2, 4, 0, 6, 8, 10];
console.log(evenNumber.indexOf(6));
console.log(evenNumber);
console.log(evenNumber.includes(5));
console.log(evenNumber.includes(6));

evenNumber.reverse();
console.log(evenNumber);

let temp1 = evenNumber.slice(2, 5);
console.log(temp1);

const animals = ["Dog", "Cat", "Rat", "Bat"];
let extendArray = evenNumber.concat(animals);
console.log(evenNumber);
console.log(extendArray);

const randomArray = [43, 2, 563, 22, 53, 98, 0, 22, 12, 33, 42, 56, 8];
console.log(randomArray.sort((a, b) => a - b));
console.log(randomArray.sort((a, b) => b - a));

console.log(randomArray);
// console.log(randomArray.toSorted())
randomArray.splice(4, 2, "ram");
console.log(randomArray);
// console.clear()

// fruits = ["Apple","Mango",'Orange'];
// const myFruits = fruits;
