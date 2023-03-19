const mysql = require('mysql2');

// Cria a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'shalom2008',
  database: 'robot_docs'
});

// Verifica se a conexão foi estabelecida com sucesso
connection.connect((error) => {
  if (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
    return;
  }
  console.log('Conexão estabelecida com sucesso!');
});

module.exports = connection;