const ProductsModel = require('../models/Productos');
module.exports = (sequelize) => {
    const Products = ProductsModel(sequelize)
    const ProductsController = {
        listProduct: (req, res) => {

            let whereObject = {
            }

            if(req.query.nombre){
                console.log(req.query.nombre)
                whereObject.nombre = req.query.nombre;
            }
            if(req.query.precio){
                console.log(req.query.precio)
                whereObject.precio = req.query.precio;
            }
            if(req.query.categoria){
                console.log(req.query.categoria)
                whereObject.categoria = req.query.categoria;
            }
            console.log(whereObject);
            Products.findAll({
                where: whereObject
            }).then((resp)=> {
                res.send(resp)
            });
        },
        findProduct: (req, res) => {
            Products.findOne({
                where: {
                    id: req.params.id
                }
            }).then((resp) => {
                console.log('Encontrado: ')
                res.send(resp);
            });
        },
        updateProduct: (req, res) => {
            Products.update(req.body, {
                where: {
                    id: req.params.id
                }
            }).then(resp => {
                console.log('Actualizado');
                res.send(null);
            });
        },
        addProduct: (req, res) => {
            // if (!(req.body.nombre && req.body.precio && req.body.categoria && req.body.existencia && req.body.cantidad)) {
            //     res.status(400).send({ message: "Necesitas enviar datos completos" });
            // } else {
            //     const nombre = req.body.nombre;
            //     const precio = req.body.precio;
            //     const categoria = req.body.categoria;
            //     const existencia = req.body.existencia;
            //     const cantidad = req.body.cantidad;
            //     const descripcion = req.body.descripcion;
            //     Products
            //         .create({
            //             nombre,
            //             precio,
            //             categoria,
            //             existencia,
            //             cantidad,
            //             descripcion
            //         })
            Products.create(req.body)
                .then(data => {
                    console.log('auto-generated ID: ', data.id);
                    res.send(data);
                    // res.status(200).send({ data: data }).end();
                });
            // .catch(err => {
            //     res.status(500).send({ error: "Falló agregar nuevo producto" });
            // })
        },
        deleteProduct: (req, res) => {
            Products.destroy({
                where: {
                    id: req.params.id
                }
            }).then(resp => {
                console.log('Eliminado');
                res.send(null);
            });
        }
    }
    return ProductsController;
}


