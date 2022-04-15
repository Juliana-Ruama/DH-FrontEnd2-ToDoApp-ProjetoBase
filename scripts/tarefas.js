
const tarefas = () => {
    fetch("https://ctd-todo-api.herokuapp.com/v1/tasks", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('jwt')
        }
    }).then(response => {
        return response.json()
    }).then(response => {
        console.log(response)
        for (const tarefa of response) {
            if(tarefa.completed) {
                renderizaTarefaConcluida(tarefa)
            } else {
                renderizaTarefaNaoConcluida(tarefa)
            }
        }
        
    }).catch(error => {
        console.log(error)
    })
}

if (!localStorage.getItem('jwt')) location.href = "index.html"

let novaTarefa = () => {
    fetch("https://ctd-todo-api.herokuapp.com/v1/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('jwt')
        },
        body: JSON.stringify({
            "title": "Nova tarefa",
            "description": "Nova descrição",
            "status": "PENDING"
        })
    }).then(response => {
        return response.json()
    }).then(response => {
        console.log(response)
    })
    
}

onload = tarefas();


let button = document.getElementById("novaTarefa")
button.addEventListener("click", (event) => {
    event.preventDefault()
    novaTarefa()
})





