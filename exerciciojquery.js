    $(document).ready(function () {
        // Mostrar o formulário ao clicar no botão dentro do header
        $("header button").click(function () {
        $("form").slideDown();
        });
    
        // Submissão do formulário
        $("form").on("submit", function (e) {
        e.preventDefault();
        // Obter o valor do input de tarefa
        const novaTarefa = $("#tarefa").val();
        // Criar um novo item de lista (li) e adicionar o valor
        const novoItem = $(`<li style="display: none">${novaTarefa}</li>`);
        // Adicionar o novo item à lista de tarefas e exibir com efeito slide
        $("ul").append(novoItem);
        novoItem.slideDown();
    
        // Limpar o input após a tarefa ser adicionada
        $("#tarefa").val("");
        });
    });
