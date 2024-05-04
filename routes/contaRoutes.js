const express = require('express');
const router = express.Router();
const contaController = require('../controllers/contaController');

router.get('/contas', contaController.listarContas);
router.post('/contas', contaController.adicionarConta);
router.get('/contas/:id', contaController.buscarConta)
router.delete('/contas/:id', contaController.deletarConta)
router.put('/contas/:id', contaController.atualizarConta)

module.exports = router;