console.log("Ram kumar maniyari");

let counter = 120;
console.log(counter);
console.log(typeof counter);

counter = false;
console.log(counter, typeof counter);
counter = "ram kumar";
console.log(counter, typeof counter);

counter;
console.log(counter);

let name;
console.log(name);
console.log(typeof name);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log('ram'/2)
console.log(NaN == NaN)
console.log(typeof NaN)

let str = "ram";
console.log(str);
str = str + " kumar";
console.log(str);


let person = {
    firstName : "ram",
    lastName : "kumar"
};

console.log(person)

console.log(person.firstName)
console.log(person.lastName)



let contact = {
    firstName: 'ram',
    lastName: 'kumar',
    email: 'ram@gmail.com',
    phone: '99999999',
    address: {
        building: '33',
        street: 'Riga road',
        city: 'Sitamarhi',
        state: 'bihar',
        country: 'India'
    }
}


console.log(contact)

console.log(contact.firstName)
console.log(contact.address.building)


// numeric separator 
let amount = 120_201_123.05; 
let expense = 123_450; 
let fee = 12345_00;

console.log(amount,expense,fee);

let running = true;
let completed = false;

console.log(running)
console.log(completed)