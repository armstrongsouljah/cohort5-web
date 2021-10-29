const PORT_NUMBER = 5500
const BASE_URL_DEV = `http://localhost:${PORT_NUMBER}`
const BASE_URL_PROD = 'https://cohort5-api.herokuapp.com'

const todoList = document.querySelector('.todos');
const span = document.querySelector('span');

function displayTodo (todo) {
   // create li
   let li = document.createElement('li')
   li.setAttribute('id', todo._id)
   li.className = 'todo-item'
   li.textContent = todo.name

   // create checkbox
   let checkBox  = document.createElement('input')
   checkBox.setAttribute('type', 'checkbox')
   checkBox.checked = todo.completed
   checkBox.className = 'checkbox'

   checkBox.addEventListener('change', e => {
       e.preventDefault();
       e.target.checked = e.target.checked
       markAsComplete(e.target, todo)
   })
   
   // add checkbox to li
   li.appendChild(checkBox)
   if(li.lastChild.checked) {
       li.style.textDecoration = 'line-through';
       li.style.color = "green"
   }
   
   // add li to DOM
   todoList.appendChild(li)
}



async function fetchTodos () {
    let url = `${BASE_URL_PROD}/todos/`;
    try {
       let response = await fetch(url)
       let { data } = await response.json();

       // create todo element
       let todos = [...data];
       todos.forEach(todo => displayTodo(todo));
       span.style.display = 'none';
    }
     catch(err) {
        console.error(err)
        span.textContent = 'Error while fetching todos';
        span.style.color = 'red'
     }
}

function markAsComplete(elem, todo) {
    let todoId = todo._id;
    
    let url = `${BASE_URL_PROD}/todos/${todoId}/check`;

    return fetch(url, {
        method: 'PUT',
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            completed: elem.checked
        })
    })
    .then(response => response.json())
    .then(() => {
        location.reload()
    })
    .catch(error => console.log("error: ", error))

}


fetchTodos()

window.addEventListener('load', e=> {
    e.preventDefault();
    const token = localStorage.getItem('token')
    if(!token) window.location = './login.html'
})
