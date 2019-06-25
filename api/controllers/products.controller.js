const ProductsModel = require('../models/Productos');
module.exports = (sequelize) => {
    const Products = ProductsModel(sequelize)
    const ProductsController = {
        addProduct: (req, res) => {
            if (!(req.body.nombre && req.body.precio && req.body.categoria && req.body.existencia && req.body.cantidad)) {
                res.status(400).send({ message: "Necesitas enviar datos completos" });
            } else {
                const nombre = req.body.nombre;
                const precio = req.body.precio;
                const categoria = req.body.categoria;
                const existencia = req.body.existencia;
                const cantidad = req.body.cantidad;
                const descripcion = req.body.descripcion;
                Products
                    .create({
                        nombre,
                        precio,
                        categoria,
                        existencia,
                        cantidad,
                        descripcion
                    })
                    .then(data => {
                        // codigo para cuando se crea el libro
                        res.status(200).send({ data: data }).end();

                    })
                    .catch(err => {
                        // codigo para cuando falla la creacion del libro o la peticion a la base de datos
                        res.status(500).send({ error: "Falló agregar nuevo producto" });
                    })
            }
        }
    }
    return ProductsController;
}
