usersData = [];

/* define an object
 - 1 -> let user = new Object() ;
 - 2 -> let user = {};
 */


 let userInfo = {
     firstName: 'Armstrong',
     lastName: 'Muhwezi',
     profession: 'Software Engineer',
     hobbies: ['Movies', 'EDM', 'Travel'],
     nationality: {
         city: 'Kampala',
         country: 'Uganda'
     }

 }

 // accessing data from an object
 // dot notation .
 console.log(userInfo.firstName)
 console.log(userInfo.hobbies[1])
 console.log(userInfo.nationality.city)

 console.log('========================================================')

 // subscripting []
 console.log(userInfo['lastName'])
 console.log(userInfo['profession'])
 console.log(userInfo['nationality']['country'])
 console.log(userInfo['hobbies'][2])

 console.log('========================================================')

// adding data and changing to an object
userInfo.languagesSpoken = ['runyakole', 'english', ]
userInfo['gender'] = 'Male'
// console.log(userInfo)

let userInfo2 = Object.assign({}, userInfo)

userInfo2.firstName = 'Daisy'
userInfo2.lastName = 'Kusiima'
userInfo2.gender = 'Female'

console.log(userInfo.firstName, userInfo2.firstName)
console.log(userInfo.gender, userInfo2.gender)


// how to safely access data in an object
let empty = {}
console.log(empty.name)
// if (Object.keys(empty).length()) {

// }
console.log('========================================================')
console.log(Object.keys(empty))
console.log(Object.keys(userInfo))

let objKeys = Object.keys(userInfo)

if(objKeys.includes('firstName')) {
     console.log(userInfo.firstName)
} else {
    console.log('Nothing to see here')
}

let objVals = Object.values(userInfo)
console.log('values>>', objVals)


console.log(userInfo['firstNames'],) // safely returns a value or undefined

// looping over objects
for(let item in userInfo) {
    console.log(userInfo[`${item}`])
}


let myInfo = Object.assign({}, userInfo)

myInfo['addHobby'] = function (hobby) {
    if(!myInfo.hobbies.includes(hobby)) {  // add hobby only if it does not exist
        return myInfo.hobbies.push(hobby);
    }
    return;
}

myInfo.addHobby('Food')
myInfo.addHobby('Biking')

console.log(myInfo.hobbies)


//  assigning variables to object entries .
// - desctructuring
let { firstName } = userInfo

// similar to 
let firstName2 = userInfo.firstName;
// or 
let firstName3 = userInfo['firstName']

console.log('new name', firstName, ' ', firstName2, ' ', firstName3)

// advanced way of changing object values

let sample = {
    firstName: 'Victoria',
    profession: 'Code Queen'
}


let Victoria = {...userInfo} // spread operator
Victoria = {...Victoria, ...sample}

// similar to
let Vicky = Object.assign({}, userInfo)


// console.log('****', Victoria)


users = []
user = {}

// users.push(user)


let numbers = [1,2,3,]
let nums = [4,5,6,7,8,9,10]

let random = []
completeNumbers = [...numbers,...nums]


// similar to 
numbers.forEach(number => random.push(number))
nums.forEach(number => random.push(number))


console.log('<>><><>', completeNumbers)
console.log('<<<', random)


let multiType = [1,2,3,'yes', true, false, function(){ return 2}, new Date()]

mulitiCopy = [...multiType]
// let mulitiCopy = []
// for(let item of multiType) {
//     mulitiCopy.push(item)
// }

console.log('this>>>> Vs', mulitiCopy, 'that <<<', multiType)

