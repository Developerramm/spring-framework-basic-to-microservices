
console.log("object in javascript ")


// creating object using string literal
let person = {
    firstName : "ram",
    lastName : "kumar",
}

console.log(person)
console.log(person.lastName)
console.log(person.firstName)

let address = {
    'building no' : 3960,
    street : "riga road sitamarhi",
    state : "Bihar",
    country : "India"
}

console.log(address)
console.log(address.district)

address.district = "sitamarhi";
console.log(address)
console.log(address.district)

console.log(person)
person.age = 30;

console.log(person)
console.log(person.age)

console.log("age" in person)