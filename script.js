// =========
// Elemento Dom
// =========

const form = document.querySelector("form-tarefa");
const inputTarefa = document.querySelector("#tarefa");
const contador = document.querySelector("#contador");
const listaTarefas = document.querySelector("#lista-tarefas");

// Resgate de tarefas do localStorage
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// Ouvir o evento clique
form.addEventListener("submit", adcionarTarefa);

// Funções
function adcionarTarefa() {

}

function salvarTarefas() {

}

function renderizarTarefas() {
    listaTarefas.innerHTML = "";

    tarefas.forEach(function (tarefa, indice){
        const linha = document.createElement("tr");

        const colunaNumero = document.createElement("td");
        colunaNumero.textContent = indice + 1;

        const colunaTexto = document.createElement("td");
        colunaTexto.textContent = tarefa.texto;
        if (tarefa.concluido) {
            colunaTexto.classList.add(
                "text-decoration-line-through",
                "text-muted"

            )
        }

    const colunaStatus = document.createElement("td");
    if (tarefa.concluido) {
        colunaStatus.innerHTML = `<span class="badge bg-success">Concluído</span>`;
    } else {
        colunaStatus.innerHTML = `<span class="badge bg-warning">Pendente</span>`;
    }

    linha.appendChild(colunaNumero);
    linha.appendChild(colunaTexto);
    linha.appendChild(colunaStatus);

    listaTarefas.appendChild(linha);
})
}