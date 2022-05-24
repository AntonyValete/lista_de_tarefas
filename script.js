var tarefas = ["Augusto"];

function listarTodasTarefas(){
    var lista = document.getElementById("lista")
    lista.innerHTML = "";
    var modelo = document.querySelector("#modelo");


    for (var i = 0; i< tarefas.length; i++){

        var novo = modelo.content.cloneNode(true);
        var li = novo.querySelector("li");
        li.append(tarefas[i]);

        lista.append(novo);
    }
}


function adicionarElementos(){
    
    var item = document.getElementById("textoDoUsuario").value
    tarefas.push(item);
    var p = document.querySelector("p")
    p.innerHTML = item;

    listarTodasTarefas();


}

function remover(){
    area.innerHTML = '';
}

