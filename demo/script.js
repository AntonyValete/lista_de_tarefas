function add() {
    var texto = document.getElementById("campoDeTexto");
    var itemDaLista = document.createElement("li")
    itemDaLista.innerHTML = texto.value
    document.getElementById("lista").append(itemDaLista)
    texto.value = ""
}