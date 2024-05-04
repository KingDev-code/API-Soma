const db = require('./db');

const Conta = {
    listarContas(callback) {
        return db.query('SELECT * FROM contas', (err, resultado) => {
            if (err) {
                console.error('Erro ao listar contas: ', err);
                callback(err, null);
                return;
            }
            callback(null, resultado);
        });
    },    
    adicionarConta(primeiro, segundo, resultado, callback) {
        const query = 'INSERT INTO contas (primeiro, segundo, resultado) VALUES (?, ?, ?)';
        db.query(query, [primeiro, segundo, resultado], callback);
    },
    buscarConta(id, callback) {
        return db.query('SELECT * FROM contas WHERE id = ?', [id], callback);
    },
    deletarConta(id, callback) {
        return db.query('DELETE FROM contas WHERE id = ?', [id], callback);
    }
}

module.exports = Conta;