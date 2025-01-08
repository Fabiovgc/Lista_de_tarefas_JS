const meuBotao = document.getElementById('addButton');
const input = document.getElementById('taskInput');
const ul = document.getElementById('taskList');

function addTask(){
    if(input.value != ""){

        // Criamos uma constante "li" que armazena o elemento lista
        // Definimos que o valor da lista será o mesmo que for digitado no input.
        const li = document.createElement('li');
        li.textContent = input.value;

        // Criamos uma constante "removeButton" que tem o 'PODER' de criar um elemento Botão.
        // Definimos que o conteúdo de texto dentro do botão, se for criado, será "Remover".
        // Definimos um evento de clique ligado ao botão que chamará uma função que tem a capacidade de remover a lista criada
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remover";
        removeButton.onclick = function(){
            ul.removeChild(li);
        };

        // Adicionamos o botão à lista, se essa for criada
        // Adicionamos uma lista ao elemento ul, quando isso for ordenado pela lógica do programa
        // Chamamos uma mensagem "Insira uma tarefa" se uma tarefa sem texto tentar ser adicionada
        li.appendChild(removeButton);
        ul.appendChild(li);

        input.value = ""
    } else{
        alert('Insira uma tarefa!')
    }
}

meuBotao.addEventListener("click", addTask);