// alert("This is alert message ")
// const isConfirmed=confirm("Would you like to proceed?")

// const userInput = prompt("Please Enter Your unit ");
// console.log(userInput)

const message = "HeLLo World here !!!";
console.log(message.length);

// for(let char of message){
//     console.log(char)
// }

console.log(message.toUpperCase());
console.log(message.toLowerCase());

console.log(message.substring(4, 10));

let username = "    Ram Kumar Maniyari Sitamarhi ";
console.log(username);
console.log(username.length);
let user = username.trim();
console.log(user);
console.log(user.length);

console.log(username.trimStart());
console.log(username.trimEnd());

console.log(user.includes("am", 10));

let str = "This is new String in javaScript";
console.log(str);

console.log(str.indexOf("ew"));
console.log(str.indexOf("Script"));

console.log(str.indexOf("Z"));

console.log(str.replace("is", "at"));

console.log(str);

let newStr = str.concat(" this is react related tutorial")

console.log(newStr.split(" "))


console.log(newStr.charAt("react"))
console.log(newStr.charAt("new"))
 let account = 43243242;
// let accd = account.padStart(19, "*");