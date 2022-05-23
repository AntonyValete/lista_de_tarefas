
function adicionarElementos(){
    var modelo = document.getElementById("modelo");
    var novo = modelo.content.cloneNode(true);

    var li = novo.querySelector("li");
    var item = document.getElementById("textoDoUsuario")
    var p = novo.querySelector("p");
    p.innerHTML = item.value;
    


    document.getElementById("lista").append(li);
}
function remover(){
    lista.innerHTML = '';
}

