const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const productsController = require('./api/controllers/products.controller');

//const db = require('./');
app.use(bodyParser.json());
app.listen(port, () => console.log(`App listening on port ${port}!`))


const sequelize = new Sequelize('tienda', 'root', 'MySQLPass', {
    host: 'localhost',
    dialect: 'mysql'
});
const products = productsController(sequelize)
app.post('/product', products.addProduct);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database: ', err);
});