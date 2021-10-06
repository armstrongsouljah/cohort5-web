let ageLimit = 18;  // user defined variable

// for loop
for(let num=1; num < ageLimit; num++) {  // until the condition
    console.log("you are still a minor. ", num)
}

// while
let myAge = 1;
while (myAge < ageLimit) {
    console.log("Am young and can't drink or drive! ", myAge)
    myAge +=1
}


let age = 1;
while (age<myAge) {   // as long as the condition is true or holds!
    console.log("New year new me!")
    age+=1 //increment the loop

    if (age == 6) break; // exit the loop
}

// age=1 

// do {
//     console.log("hi");   
// }
   
// while (age ==1)  // will cause an infinite loop

age=1 

do {
    console.log("hi");   
    age+=1
}
   
while (age ==1)  // will not cause an infinite loop


while (age<10) {
    console.log('not new ', age)
    age+=1

    if (age==6) {
        // age=1;
        continue;
    }
}

