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
app.get('/product', products.listProduct);//lista
app.put('/product/:id', products.updateProduct);//actualizar
app.post('/product', products.addProduct);//crear
app.delete('/product/:id', products.deleteProduct);//borrar
app.get('/product/:id', products.findProduct);//encontrar

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database: ', err);
});