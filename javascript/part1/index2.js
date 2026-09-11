let error = "An error occurred";
console.log(error, typeof error)

console.log(Boolean(error))

console.log(Boolean(""))
console.log(Boolean("Ram"))
console.log(Boolean(343))
console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean({}))
console.log(Boolean(null))
console.log(Boolean(undefined))


if(error){
    console.log("An error occurred")
}



let name = "Ram kumar";

let intro = `Hello mr. ${name}`;
console.log(intro)


let str = `Template literal in ES6`;
console.log(str);
console.log(str.length)
console.log(typeof str)


name = 'John';

console.log(`Hi, I'm ${name}`);



let className = 'btn'
className += ' btn-primary';
className += ' none';

console.log(className)

let status = false;

 str = status.toString()
 console.log(str, typeof str)

 
