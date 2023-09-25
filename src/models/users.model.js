import { DataTypes } from "sequelize";//== const {Sequelize, DataTypes } = require('sequelize');
import db from "../utils/database.js";//== const sequeluize = new Sequelize('sqlite::memory:');

const User = db.define('users', {
    // definir todos los atributos / columnas de la tabla
    // id, usename, email, password
    //id int [pk, increment]
    id: {
        //tipo de dato
        type: DataTypes.INTEGER,
        //llave primaria
        primaryKey: true,
        //autoincrementable
        autoIncrement: true,
    },
    // username varchar(30) [not null]
    username: {
        type: DataTypes.STRING(30),
        //[not null]
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        //[unique]
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default User;