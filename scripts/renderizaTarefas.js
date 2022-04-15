
let tarefasPendentesUL = document.querySelector('.tarefas-pendentes');
let tarefasConcluidasUL = document.querySelector('.tarefas-terminadas');



const renderizaTarefaNaoConcluida = (tarefa) => {
    let tarefaPendenteLI = document.createElement('li')
    tarefaPendenteLI.classList.add('tarefa')

    tarefaPendenteLI.innerHTML = 
    `
    <div class="not-done" id="${tarefa.id}"></div>
    <div class="descricao">
        <p class="nome">${tarefa.description}</p>
        <p class="timestamp"><i class="far fa-calendar-alt"></i> ${tarefa.createdAt}</p>
    </div>
    `

    tarefasPendentesUL.appendChild(tarefaPendenteLI)
}

const renderizaTarefaConcluida = (tarefa) => {
    let tarefaConcluidaLI = document.createElement('li');
    tarefaConcluidaLI.classList.add('tarefa');

    tarefaConcluidaLI.innerHTML =
    `
    <div class="done"></div>
    <div class="descricao">
    <p class="nome">${tarefa.description}</p>
    <div>
        <button><i id="${tarefa.id}" class="fas fa-undo-alt change"></i></button>
        <button><i id="${tarefa.id}" class="far fa-trash-alt"></i></button>
    </div>
    </div>
    `

    tarefasConcluidasUL.appendChild(tarefaConcluidaLI);
}

