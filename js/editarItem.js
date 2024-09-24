import { gerarDiaDaSemana } from "./gerarDiaDaSemana.js";


export const editarItem = (element) => {
    let novoItem = prompt("Digite o novo nome do item:");

    if (novoItem !== null && novoItem.trim() !== "") {
        
        let itemTextElement = element.querySelector('.item-title');
        itemTextElement.textContent = novoItem;

        
        const estavaComprado = element.querySelector('.checkboxInput').checked;

    
        if (estavaComprado) {
            element.querySelector('.checkboxInput').checked = true;
            element.querySelector('.customCheckbox').classList.add('checked');
            itemTextElement.style.textDecoration = 'line-through';
        }

        
        const dataDeCriacao = element.querySelector(".data")

        dataDeCriacao.textContent = gerarDiaDaSemana();
    }
}