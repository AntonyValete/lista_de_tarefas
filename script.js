
function adicionarElementos(){
    var lista = document.getElementById("lista")
    var campo = document.getElementById("textoDoUsuario");
    var novoElemento = document.createElement("li");
    novoElemento.innerHTML = campo.value;
    lista.append(novoElemento);

    var novoBotao = document.createElement("input");
    novoBotao.type = "button";
    novoBotao.value = "Remover"
    lista.append(novoBotao);


}
function remover(){
    lista.innerHTML = '';
}
