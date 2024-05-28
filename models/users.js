// models/users.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Correct import path

const Book = sequelize.define('Book', { // Ensure sequelize is properly imported and defined
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    copiesAvailable: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
});

module.exports = Book;
