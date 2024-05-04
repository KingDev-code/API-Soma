const mysql =require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testeapi'
})

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar com banco de dados: ', err);
        return;
    }
    console.log('Conexão bem sucedida com o banco de dados MySQL!')

    // Query SQL para criar a tabela
    const criarTabela = `
        CREATE TABLE IF NOT EXISTS contas (
            id INT AUTO_INCREMENT PRIMARY KEY,
            primeiro INT,
            segundo INT,
            resultado INT
        )
    `;

    // Executar a query de criação da tabela
    connection.query(criarTabela, (err, result) => {
        if (err) {
            console.error('Erro ao criar a tabela: ', err);
            return;
        }
        console.log('Tabela de contas criada com sucesso!')
    });

});

module.exports = connection;