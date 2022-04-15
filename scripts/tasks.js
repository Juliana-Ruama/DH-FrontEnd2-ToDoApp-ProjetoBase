
for (const tarefa of tarefas) {
    if(tarefa.completed) {
        renderizaTarefaConcluida(tarefa)
    } else {
        renderizaTarefaNaoConcluida(tarefa)
    }
}