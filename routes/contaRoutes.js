const express = require('express');
const router = express.Router();
const contaController = require('../controllers/contaController');

router.get('/contas', contaController.listarContas);
router.post('/contas', contaController.adicionarConta);
router.get('/contas/:id', contaController.buscarConta)

module.exports = router;