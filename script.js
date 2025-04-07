document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const nomeInput = document.getElementById('nome');
    const mensagemDiv = document.getElementById('mensagem');
    const listaUl = document.getElementById('lista');
    const idInput = document.getElementById('id'); // Campo hidden para edição

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        const nome = nomeInput.value.trim();
        const id = idInput.value; // Pega o ID, pode estar vazio para novo cadastro

        if (nome) {
            // Simulação de envio de dados (você substituiria isso por uma chamada AJAX)
            console.log('Dados a serem enviados:', { id: id, nome: nome });
            mensagemDiv.textContent = 'Usuário cadastrado/atualizado com sucesso!';
            mensagemDiv.className = 'text-center text-success';

            // Simulação de adicionar à lista (você buscaria os dados reais do servidor)
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.textContent = nome;

            const botoesAcao = document.createElement('div');
            const botaoEditar = document.createElement('button');
            botaoEditar.className = 'btn btn-sm btn-outline-warning me-2';
            botaoEditar.innerHTML = '<i class="fa-solid fa-pen"></i>';
            botaoEditar.addEventListener('click', () => editarUsuario(id, nome)); // Exemplo de função editar

            const botaoExcluir = document.createElement('button');
            botaoExcluir.className = 'btn btn-sm btn-outline-danger';
            botaoExcluir.innerHTML = '<i class="fa-solid fa-trash"></i>';
            botaoExcluir.addEventListener('click', () => excluirUsuario(id)); // Exemplo de função excluir

            botoesAcao.appendChild(botaoEditar);
            botoesAcao.appendChild(botaoExcluir);
            listItem.appendChild(botoesAcao);

            listaUl.appendChild(listItem);

            nomeInput.value = '';
            idInput.value = ''; // Limpa o ID após o cadastro/edição
        } else {
            mensagemDiv.textContent = 'Por favor, preencha o nome.';
            mensagemDiv.className = 'text-center text-danger';
        }
    });

    function editarUsuario(id, nome) {
        console.log('Editar usuário:', id, nome);
        idInput.value = id;
        nomeInput.value = nome;
        mensagemDiv.textContent = 'Editando usuário. Salve para atualizar.';
        mensagemDiv.className = 'text-center text-info';
    }

    function excluirUsuario(id) {
        console.log('Excluir usuário:', id);
        // Aqui você implementaria a lógica para remover o usuário da lista e do servidor
        const itemParaRemover = Array.from(listaUl.children).find(li => li.textContent.startsWith(nomeInput.value) || (li.querySelector('.btn-outline-warning') && li.querySelector('.btn-outline-warning').onclick.toString().includes(`editarUsuario(${id}`)) );
        if (itemParaRemover) {
            listaUl.removeChild(itemParaRemover);
            mensagemDiv.textContent = 'Usuário excluído com sucesso!';
            mensagemDiv.className = 'text-center text-success';
        }
    }
});