console.log("Hello there welcome to javascript!")


// variables
var name;
name =  "Armstrong"
myName = name;
// age = 29
let age = 29;

nameAndAge = myName + " " + age

console.log(nameAndAge)

let counrty;
country = "Uganda"
// let 29
console.log(country)

const gender = "Male"
// gender = "Female";

country = "Kenya";
console.log(country)

let firstName, soccerTeam
firstName = "Muhwezi"
soccerTeam = "Chelsea"

var age2=13, name2="Armstrong";  // leads to sloppy coding
console.log(name2, age2)

// let age2 = 25 already defined in the

function sayHello() {
    let myName = "Muhwezi Armstrong";
    let age2      = 34;
    age = 56
    var name = "Some name"
    console.log(age2, myName, age, name)
}
sayHello()

console.log(age2, myName, name);

let temperature = 29.9
console.log(temperature)



// invalid variable declarations
// let let 
// let if 
// let 9
// let my name

// valid
let myName
const ACCESS_TOKEN = "DBHBEHBJE(***(DEDEDED";
let _9Name = "ednejded"
console.log(_9Name)

// let yearOfRegistration // camelCasing
// my_name // snake case


// data type
// string

let name = "Armstrong"

// data types
// boolean (true/false)
// undefined
// string
// number

// operators
// asignment =
let someVAr = "some Value"
//equality 
let num1=2, num2 =2

console.log(num1 == num2)

console.log(num2 === num1)  // strict comparison

// conditional operators

if(name === "Armstrong") {
    console.log("You are welcome")
} else {
    console.log("you don't belong here")
}

let yearOfBirth = 2004

if(yearOfBirth < 1999) {
     console.log("You're a millenial")} 
else if (yearOfBirth >1999 && yearOfBirth <2003) {
    console.log("You are also a millenial")
} 
else if ( yearOfBirth == 2004) {
    console.log("You are 2004")
} 
else {
    console.log("goverment weyayu");
}

// switch case
switch (yearOfBirth) {
    case 2003:
        console.log("hello")
        break
    case 2004:
        console.log("hi")
        break
    default:
        console.log("i don't know")
}

// ternary comparison operator
yearOfBirth < 2021 ? console.log("hello") : console.log("hi")
