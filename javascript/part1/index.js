console.log("Ram kumar maniyari");

let a = 20, b = 30;

function devide(a,b){
    if(b == 0){
        throw "Division by zero";
    }

    return a / b;
}


let result = devide(10,20);
console.log(result)
console.log(devide(100,4));
// console.log(devide(10,0));


let items = [1,2,3,4,5];
console.log(items)
console.log(items.length)

console.log("printing array in js : ")
for(let i = 0; i<items.length; i++){
    console.log(items[i])
}

console.log("printing array : ");

for(let item of items){
    console.log(item)
}

let formatted = true;

if(formatted){
    console.log("The code is easy to read and write")
}


console.log(window.localStorage)

// let name;

var name;
console.log(name)
console.log(name);
