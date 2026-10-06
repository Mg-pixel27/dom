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
    let texto = inputTarefa.value.trim();

    if (texto === ""){
        alert("Digite uma tarefa!");
        return;
    }
    const novaTarefa = {
        id: Date.now(),
        texto: texto,
        concluida: false
    };
    console.log(novaTarefa);
    tarefas.push(novaTarefa);

    inputTarefa.value = "";
    inputTarefa.focus();
}

function salvarTarefas() {
    
}