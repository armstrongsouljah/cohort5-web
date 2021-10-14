/*

- Arrays
- String
- Objects
- Class
- Set 
- Map

*/


// city = "Kampala"
// let cityName = new String(" My name is Armstrong ")
// console.log(cityName)
// console.log(cityName.anchor('name'))

let cityName = " My name is Armstrong "
cityName = cityName.trim()
// console.log(cityName);

function searchByCity(city) {
    return city ? city.startsWith('Kam') : false;
}


let check = searchByCity('Jinja')
console.log(check);


let sampleStr = "a quick brown dog"

let dog = sampleStr.match('dog')
console.log(dog)

// console.log(sampleStr[14])

/*

str =  " Armstrong Muhwezi "
' Armstrong Muhwezi '
> str.length
19
> srt.trim()
Uncaught ReferenceError: srt is not defined
> str.trim()
'Armstrong Muhwezi'
> str.trim()
'Armstrong Muhwezi'
myName = str
' Armstrong Muhwezi '
myName = myName.trim()
'Armstrong Muhwezi'
myName = myName.split(' ')

let firstName = myName[0]

let lastName = myName[1]


*/

let favoriteFoods = [];
favoriteFoods = new Array()

// checking items
console.log(favoriteFoods.length)

favoriteFoods.push("Honey glazed Chicken")
console.log(favoriteFoods.length)
console.log(favoriteFoods)

cities = ['Kampala', 'Gulu', 'Jinja']

for(let i=0; i<cities.length; i++) {
    console.log(cities[i])
}

cities.forEach(city => console.log(city))

for (let city of cities) {
    console.log(city)
}

cities.filter(city => city == 'Kampala') //returns an arry with just kampala => ['Kampala']
cities.filter(city => city !== 'Kampala') // return everything else but kampala =>  ['Gulu', 'Jinja']]