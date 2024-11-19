const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_database', 'postgres', '12345', {
  host: 'db_dev', // Nombre del servicio en docker-compose
  port: 5432,
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => console.log('Conexión exitosa a PostgreSQL.'))
  .catch(err => console.error('Error al conectar con PostgreSQL:', err));

module.exports = sequelize;
