// function

// console.log('a')
// alert('deded')
// confirm('dededededdeded')

// function greet (){};

function greetMe () {
    /*
     Greets user
     @Return none
    */
    console.log('Hello Armstrong!')
}

greetMe() // called the function / invoked the function
greetMe() // called the function / invoked the function

// function parameters
function greetMeDynamic(name) {
    console.log('Hello ', name,'!')
}

greetMeDynamic("Daisy")
greetMeDynamic("Victoria")
greetMeDynamic("Patience")

function calculateMyAge(yearOfBirth) {
    let currentYear = new Date().getFullYear();
    // let currentYear =  2021;
    console.log('current year', currentYear)

    if(yearOfBirth && typeof yearOfBirth == 'number') {
        myAge = currentYear - yearOfBirth;
        return myAge
    } 
    return 0;
}

function displayAge(name, yearOfBirth) {
    let age  = calculateMyAge(yearOfBirth);
    // message = "Your name is " + name + " and your age is " + age;
    if(!name) {
        name = 'Sarah'
    }
    message = `Your name is ${name} and your age is ${age}`
    console.log(message);
}


// console.log(age); // fails because age is not in global scope

// call the function
displayAge("Catheryn", 1995)
displayAge()
displayAge('Janet','asass')


// local scope vs global

// function showCountry(country) {
//      function showPresident() {
//          return "M7"
//      }

//      let message = "you live in " + country + showPresident()
// }

// showPresident()


function changeCase(capitalize, name) {
    return capitalize(name);
} 

function capitalize(name) {
    if (name) return name.toUpperCase();
    return
}

let myName = changeCase(capitalize, "Daisy");
console.log(myName)

function addNumbers (x,y) {
    if(typeof x =='number' && typeof y == 'number') return x+y;
    return
}

// const 

const helpMe = function () {
    console.log('How may i help?')
};

helpMe()


// anonymous functions
let showMe = function() {
    console.log ("hello")
}

showMe()

// arrow functions

let add = (a,b) => {
    // more functionality here
    return a+b; // explicit return
}

let add2 = (a,b) => a+b; // implicit return

let showMessage = message => console.log(message);

console.log(add(3,2))
console.log(add2(45,6))

showMessage('Greetings');
