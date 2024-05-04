// contas.js

document.addEventListener('DOMContentLoaded', async function () {
    const tabelaContas = document.getElementById('tabelaContas');

    try {
        const response = await fetch('http://localhost:3000/api/contas');
        const data = await response.json();

        if (!response.ok) {
            throw new Error('Erro ao buscar contas.');
        }

        let tabelaHTML = '<table>';
        tabelaHTML += '<thead><tr><th>ID</th><th>Primeiro</th><th>Segundo</th><th>Resultado</th></tr></thead>';
        tabelaHTML += '<tbody>';

        data.forEach(conta => {
            tabelaHTML += `<tr><td>${conta.id}</td><td>${conta.primeiro}</td><td>${conta.segundo}</td><td>${conta.resultado}</td></tr>`;
        });

        tabelaHTML += '</tbody></table>';

        tabelaContas.innerHTML = tabelaHTML;
    } catch (error) {
        console.error('Erro:', error);
        tabelaContas.textContent = 'Erro ao buscar contas.';
    }
});
