let userDatabase = [];
let userData = {}

// collect data from form
const signupForm = document.querySelector('#signup');
let userName = signupForm.username;
let email = signupForm.email;
let password = signupForm.password;
let showPassword= signupForm.showPassword
const MAXIMUM_LENGTH=8
let left; 
signupForm.addEventListener('submit', e => {
    e.preventDefault();
    userData.username = userName.value;
    userData.email = email.value;
    userData.password = password.value;

    // save user data to our temporary database
    userDatabase.push(userData)
    
    // display on table
    const table =  document.querySelector('table');
    let row = document.createElement('tr');
    let userNameField = document.createElement('td')
    let emailField = document.createElement('td')

    userNameField.textContent = userData.username;
    emailField.textContent = userData.email;
    row.appendChild(userNameField)
    row.appendChild(emailField);
    table.appendChild(row);

    // clear the form
    signupForm.reset()
    password.disabled = false;


    
})


// userName.addEventListener('input', e => {
//     e.preventDefault();
//     console.log(e.target.value)
// });

showPassword.addEventListener('change', e => {
    e.preventDefault();
    if (showPassword.checked) {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
});

password.addEventListener('input', e => {
    e.preventDefault();
    let value= e.target.value;
    left = MAXIMUM_LENGTH - value.length;
    const span = document.querySelector('span')

    span.textContent = `${left} letters left.`
    if(left == 0) {
        password.disabled = true;
    }
})

