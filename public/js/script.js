document.getElementById('formConta').addEventListener('submit', async function(event) {
    event.preventDefault();

    const primeiro = parseInt(document.getElementById('primeiro').value);
    const segundo = parseInt(document.getElementById('segundo').value);    

    try {
        const response = await fetch('http://localhost:3000/api/contas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ primeiro, segundo })
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar dados.');
        }
        
        const data = await response.json();
        // Acessa diretamente o resultado da soma da resposta JSON
        const resultadoSoma = data.resultado;
        // Exibe o resultado da soma na página
        document.getElementById('resultado').textContent = `Resultado da soma: ${resultadoSoma}`;

        // Aqui você pode adicionar lógica para mostrar outros dados, se necessário
        console.log('Resposta da API:', JSON.stringify(data));
        console.log('Outros dados:', data); // Supondo que há outros dados na resposta

    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('resultado').textContent = 'Erro ao enviar dados.';
    }
});

document.getElementById('formBusca').addEventListener('submit', async function(event) {
    event.preventDefault();

    const idBusca = parseInt(document.getElementById('busca').value);

    try {
        const response = await fetch(`http://localhost:3000/api/contas/${idBusca}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar conta.');
        }

        
        const data = await response.json();
        mostrarResultado(data); // Chama a função para exibir os resultados
    } catch (error) {
        console.error('Erro:', error);
        mostrarErro(); // Chama a função para exibir mensagem de erro
    }
});

const resultadoBusca = document.getElementById('resultadoBusca');

function mostrarResultado(data) {
        const objetoConta = data[0];
        const id = objetoConta.id;
        const primeiro = objetoConta.primeiro;
        const segundo = objetoConta.segundo;
        const resultado = objetoConta.resultado;
        // Agora você pode usar essas variáveis como desejar

        console.log(id)

    const tabela = `
        <table>
            <thead>
                <tr>
                    <th>ID da Conta</th>
                    <th>Primeiro Valor</th>
                    <th>Segundo Valor</th>
                    <th>Resultado da Soma</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${id}</td>
                    <td>${primeiro}</td>
                    <td>${segundo}</td>
                    <td>${resultado}</td>
                </tr>
            </tbody>
        </table>
    `;
    resultadoBusca.innerHTML = tabela;
    resultadoBusca.style.display = 'block'; // Mostra o resultado
}

function mostrarErro() {
    resultadoBusca.textContent = 'Erro ao buscar conta.';
    resultadoBusca.style.display = 'block'; // Mostra o erro
}