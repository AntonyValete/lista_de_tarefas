let tarefas = [];

function adicionarItem() {

    let modeloItem = document.getElementById('modeloItem').content.cloneNode(true);
    let p = modeloItem.querySelector('p');
    let input = document.querySelector('div input[type="text"]');
    if (input.value) {
        tarefas.push(input.value);
        setTarefas();

        p.innerHTML = input.value;
        input.value = '';
        document.querySelector('ul').appendChild(modeloItem);
    }
}

function remover(item) {
    let index = tarefas.indexOf(item.querySelector('p').innerHTML);
    tarefas.splice(index, 1);
    setTarefas();
    item.remove();
}

function setTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function tarefasSalvas() {
    if (localStorage.getItem('tarefas')) {
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
        for (let i = 0; i < tarefas.length; i++) {
            let modeloItem = document.getElementById('modeloItem').content.cloneNode(true);
            let p = modeloItem.querySelector('p');
            p.innerHTML = tarefas[i];
            document.querySelector('ul').appendChild(modeloItem);
        }
    }
}

tarefasSalvas();