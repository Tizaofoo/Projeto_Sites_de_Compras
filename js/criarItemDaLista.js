import { gerarDiaDaSemana } from "./gerarDiaDaSemana.js";
import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";
import { excluirItem } from "./excluirItem.js";
import { editarItem } from "./editarItem.js";

export function criarItemDaLista(item) {

    let listItem = document.createElement("li");
    let spanItem = document.createElement("span");


    let checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("checkboxContainer");

    let checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkboxInput");
    checkboxInput.id = 'checkbox' + Date.now(); 

    let labelCheckbox = document.createElement('label');
    labelCheckbox.setAttribute('for', checkboxInput.id); 

    let customCheckbox = document.createElement("div");
    customCheckbox.classList.add("customCheckbox");

    labelCheckbox.appendChild(checkboxInput);
    labelCheckbox.appendChild(customCheckbox);

    
    checkboxContainer.appendChild(labelCheckbox);

    
    let itemText = document.createElement('p');
    itemText.classList.add('item-title')
    itemText.innerText = item;

    
    let itemDate = document.createElement('p');
    itemDate.innerText = gerarDiaDaSemana();
    itemDate.setAttribute("class", "data")


    spanItem.appendChild(checkboxContainer);
    spanItem.appendChild(itemText);
    spanItem.appendChild(itemDate);

    
    spanItem.classList.add('itemTextContainer');

    labelCheckbox.addEventListener('click', function (event) {
        const currentCheckbox = event.currentTarget.querySelector('.checkboxInput');
        const currentCustomCheckbox = event.currentTarget.querySelector('.customCheckbox');
        const currentItemText = event.currentTarget.closest('li').querySelector('.item-title');

        if (currentCheckbox.checked) {
            currentCustomCheckbox.classList.add('checked');
            currentItemText.style.textDecoration = 'line-through';
            
            document.getElementById("comprados").appendChild(listItem);
        } else {
            currentCustomCheckbox.classList.remove('checked');
            currentItemText.style.textDecoration = 'none';
            
            document.getElementById("listaDeCompras").appendChild(listItem);
        }

        verificarListaComprados(document.getElementById("comprados"));
        verificarListaVazia(document.getElementById("listaDeCompras"));
    });
    
    listItem.appendChild(spanItem);

    
    let botaoExcluir = document.createElement("button");
    let imgExcluir = document.createElement("img");
    imgExcluir.src = "img/delete.svg"; 
    imgExcluir.alt = "Remover"; 
    botaoExcluir.appendChild(imgExcluir); 
    botaoExcluir.addEventListener("click", function () {
        excluirItem(listItem);
    });

    //Editar
    let botaoEditar = document.createElement("button");
    let imgEditar = document.createElement("img");
    imgEditar.src = "img/edit.svg"; 
    imgEditar.alt = "Editar"; 
    botaoEditar.appendChild(imgEditar); 
    botaoEditar.addEventListener("click", function () {
        editarItem(listItem);
    });

    
    listItem.appendChild(botaoExcluir);
    listItem.appendChild(botaoEditar);

    return listItem;
}