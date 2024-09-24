const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");

export function verificarListaVazia(lista) {
    console.log(lista);
    if (lista.querySelectorAli("li").lengt === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}