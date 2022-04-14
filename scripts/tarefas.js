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
    })

}
tarefas()
