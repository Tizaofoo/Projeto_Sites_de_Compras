import { verificarListaVazia } from "./verificarListaVazia.js";
import { verificarListaComprados } from './verificarListaComprados.js'

const listaDeCompras = document.getElementById("listaDeCompras")
const comprados = document.getElementById("comprados")


const excluirItem = (element) => {
    let confirmacao = confirm("Tem certeza que deseja excluir este item?");
    if (confirmacao) {
        element.remove();
        verificarListaVazia(listaDeCompras);
        verificarListaComprados(comprados);
    }
}


export { excluirItem };