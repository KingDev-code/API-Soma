const express = require('express')
const app = express();
const contaRoutes = require('./routes/contaRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');

// Permite todas as origens durante o desenvolvimento
app.use(cors());

app.use(bodyParser.json());
app.use('/api', contaRoutes);

module.exports = app;