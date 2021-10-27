const PORT_NUMBER = 5000
const BASE_URL = `http://localhost:${PORT_NUMBER}`

const todoList = document.querySelector('.todos');



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
       console.log(e)
       e.target.checked = e.target.checked
       markAsComplete(e.target, todo)
   })
   
   // add checkbox to li
   li.appendChild(checkBox)
   
   // add li to DOM
   todoList.appendChild(li)
}



async function fetchTodos () {
    let url = `${BASE_URL}/todos/`;
    try {
       let response = await fetch(url)
       let { data } = await response.json();

       // create todo element
       let todos = [...data];
       todos.forEach(todo => displayTodo(todo))
    }
     catch(err) {
        console.error(err)
     }

    // return fetch(url)
    //    .then(data => data.json())
    //    .then(todos => {
    //        // more code here
    //        console.log(todos)
    //    })
    //    .catch(error => console.error(error))
}

function markAsComplete(elem, todo) {
    console.log('>>', elem, todo);
    let todoId = todo._id;
    
    let url = `${BASE_URL}/todos/${todoId}/check`;

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
