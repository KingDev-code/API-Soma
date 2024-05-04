const Conta = require('../models/Conta.ts')

const contaController = {
    listarContas(req, res) {
        Conta.listarContas((err, resultado) => {
            if (err) {
                console.error('Erro ao listar contas: ', err);
                return res.status(500).json({
                    error: 'Erro ao listar contas'
                });
            }
            res.json(resultado);
        });
    },
    

    adicionarConta(req, res) {
        const { primeiro, segundo } = req.body;
        const resultado = primeiro + segundo;
    
        Conta.adicionarConta(primeiro, segundo, resultado, (err, result) => {
            if (err) {
                console.error('Erro ao adicionar conta: ', err);
                return res.status(400).json({
                    error: 'Erro ao adicionar conta'
                });
            }
    
            console.log('Resultado da operação de inserção:', result);
            console.log('Conta adicionada com sucesso!', result.insertId);
            return res.status(201).json({
                message: 'Conta adicionada com sucesso',
                resultado: resultado,
                insertId: result.insertId
            });
        });
    },    

    async buscarConta(req, res) {
        const id = req.params.id;
    
        Conta.buscarConta(id, (err, conta) => {
            if (err) {
                console.error('Erro ao buscar conta:', err);
                return res.status(500).json({
                    error: 'Erro ao buscar conta'
                });
            }
    
            if (!conta || conta.length === 0) {
                return res.status(404).json({
                    error: 'Conta não encontrada'
                });
            }
    
            // Retorna o objeto da conta como JSON
            return res.status(200).json(conta);
        });
    },    

    // others functions
}

module.exports = contaController;