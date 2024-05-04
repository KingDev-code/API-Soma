    document.addEventListener('DOMContentLoaded', async function () {
        const formAtualizar = document.getElementById('formAtualizar');
        const resultadoAtualizacao = document.getElementById('resultadoAtualizacao');

        formAtualizar.addEventListener('submit', async function (event) {
            event.preventDefault();

            const novoPrimeiro = parseInt(document.getElementById('novoPrimeiro').value);
            const novoSegundo = parseInt(document.getElementById('novoSegundo').value);

            try {
                const response = await fetch(`http://localhost:3000/api/contas/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ primeiro: novoPrimeiro, segundo: novoSegundo })
                });

                if (!response.ok) {
                    throw new Error('Erro ao atualizar conta.');
                }

                const data = await response.json();
                resultadoAtualizacao.textContent = 'Conta atualizada com sucesso!';
            } catch (error) {
                console.error('Erro:', error);
                resultadoAtualizacao.textContent = 'Erro ao atualizar conta.';
            }
        });

        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        // Recuperar e preencher os campos do formulário com os dados da conta
        try {
            const response = await fetch(`http://localhost:3000/api/contas/${id}`);
            const contaArray = await response.json();

            if (!response.ok) {
                throw new Error('Erro ao buscar conta.');
            }
    
            const conta = contaArray[0]; // Acesso ao primeiro elemento do array

            document.getElementById('id').value = conta.id;
            document.getElementById('novoPrimeiro').value = conta.primeiro;
            document.getElementById('novoSegundo').value = conta.segundo;
        } catch (error) {
            console.error('Erro:', error);
            resultadoAtualizacao.textContent = 'Erro ao buscar conta para atualização.';
        }
    });
