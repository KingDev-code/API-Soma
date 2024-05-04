// contas.js

document.addEventListener('DOMContentLoaded', async function () {
    const tabelaContas = document.getElementById('tabelaContas');

    try {
        const response = await fetch('http://localhost:3000/api/contas');
        const data = await response.json();

        if (!response.ok) {
            throw new Error('Erro ao buscar contas.');
        }

        let tabelaHTML = '';

        data.forEach(conta => {
            tabelaHTML += `
                <tr>
                    <td>${conta.id}</td>
                    <td>${conta.primeiro}</td>
                    <td>${conta.segundo}</td>
                    <td>${conta.resultado}</td>
                    <td>
                        <button onclick="deletarConta(${conta.id})">Deletar</button>
                    </td>
                    <td>
                        <button><a href="update.html?id=${conta.id}">Atualizar</a></button>
                    </td>
                </tr>
            `;
        });

        tabelaContas.querySelector('tbody').innerHTML = tabelaHTML;
    } catch (error) {
        console.error('Erro:', error);
        tabelaContas.textContent = 'Erro ao buscar contas.';
    }
});

async function deletarConta(id) {
    try {
        const response = await fetch(`http://localhost:3000/api/contas/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao deletar conta.');
        }

        console.log('Conta deletada com sucesso!');
        // Recarregar a página para atualizar a lista de contas
        window.location.reload();
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao deletar conta.');
    }
}