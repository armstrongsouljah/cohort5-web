// console.log("welcome");


// selecting elements

/*
 - id selector
 - class selector
 - element selector
 - pseudo selector

 */

 let uniqueCard =  document.getElementById('unique');
//  console.log(uniqueCard)


 let cards = document.getElementsByClassName('card2')
 let secondCard = document.getElementsByClassName('card')

//  console.log(cards, secondCard)

const allH1s = document.getElementsByTagName('h1');
// console.log(allH1s)

// selecting items using es6

newCards = document.querySelectorAll('.card');  // returns all items of class card
console.log(newCards)
// newCards.forEach(card => console.log(card))

// select the first of many items
let firstCard = document.querySelector('.card2') // returns the first item with class card
console.log(firstCard);


let uniqueSelect = document.querySelector('#unique')

//  adding items to the dom

let container = document.querySelector('div.container')

// console.log(container.children);
// console.log(container.lastElementChild);

// creating an element
let newCard = document.createElement('div')
newCard.className = 'card';

let heading = document.createElement('h5');
heading.textContent = "My Dynamic Heading"

let cardText = document.createElement('p');
cardText.textContent = `
        we are creating cards with code!
        Neque velit laborum distinctio pariatur, 
        numquam illo quae earum ad! Autem exercitationem dolor minus hic.
        Neque velit laborum distinctio pariatur, 
        numquam illo quae earum ad! Autem exercitationem dolor minus hic.
        Neque velit laborum distinctio pariatur, 
        numquam illo quae earum ad! Autem exercitationem dolor minus hic. `

let cardBtn = document.createElement('button');
cardBtn.classList = 'btn btn-block'
cardBtn.textContent = 'Maybe Hide Me!'
// newCard.style = {
//     backgroundColor:'red',
//     color
// }
// newCard.style.color = 'red'
// newCard.style.backgroundColor = 'red'


// adding elements to the parent element
newCard.appendChild(heading);
newCard.appendChild(cardText);
newCard.appendChild(cardBtn)

// add to the DOM
container.appendChild(newCard);
// container.appendChild(newCard);
// container.appendChild(newCard);
// container.appendChild(newCard);
// container.appendChild(newCard);
// container.appendChild(newCard);
// container.appendChild(newCard);

// working with events



let paragraph = document.createElement('p')
paragraph.textContent = 'random text';
console.log(paragraph);
paragraph.setAttribute('id', 'some-id')
paragraph.setAttribute('class', 'kampala')

console.log(paragraph);




