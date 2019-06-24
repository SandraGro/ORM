const Sequelize = require('sequelize');
module.exports = (sequelize) => {
    const Productos = sequelize.define('productos', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        precio: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        categoria: {
            type: Sequelize.ENUM('xs', 's', 'm', 'lg', 'xl'),
            allowNull: false
        },
        existencia: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
        cantidad: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        descripcion: {
            type: Sequelize.STRING,
            allowNull: true
        },
    }, { timestamps: false });
    return Users;
}
