const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Questoes = require('../models/Questoes');
const Usuario = require('../models/Usuario')
const Alternativas = require('../models/Alternativa')
const connection = new Sequelize(dbConfig);
connection.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

Questoes.init(connection);
Alternativas.init(connection);
Usuario.init(connection);

Questoes.associate(connection.models);
Alternativas.associate(connection.models);

module.exports=connection;