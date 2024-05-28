// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('apollo_server', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('connected');
}).catch((error) => {
    console.log(error);
    return false;
});

sequelize.sync().then(() => {
    console.log('re-sync');
});

module.exports = sequelize; // Export sequelize directly
