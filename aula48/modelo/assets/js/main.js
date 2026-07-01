const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        if (!inputTarefa.value) return;

        criaTarefa(inputTarefa.value);
    }
});

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;

    criaTarefa(inputTarefa.value);
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';

    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.classList.add('apagar');

    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();

    li.innerText = textoInput;

    criaBotaoApagar(li);

    tarefas.appendChild(li);

    limpaInput();

    salvarTarefas();
}

document.addEventListener('click', function(evento) {
    const elemento = evento.target;

    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;

        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();

        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);

    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefasSalvas = localStorage.getItem('tarefas');

    if (!tarefasSalvas) return;

    const listaDeTarefas = JSON.parse(tarefasSalvas);

    for (let tarefa of listaDeTarefas) {
        const li = criaLi();

        li.innerText = tarefa;

        criaBotaoApagar(li);

        tarefas.appendChild(li);
    }
}

adicionaTarefasSalvas();