const { loadProducts, storeProducts } = require('../data/dbModules');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {,
    productCart: (req, res) => {
        return res.render('productCart')
    },
    archivo: (req, res) => {
        return res.render('archivo')
    },
    personalizado: (req, res) => {
        const products = loadProducts();


        return res.render('personalizado', {
            products,
            toThousand
        })

    },
    proyecto: (req, res) => {
        return res.render('proyecto')
    },
    detalle: (req, res) => {
        const products = loadProducts();
        const product = products.find(product => product.id === +req.params.id);
        return res.render('detalle', {
            product,
            toThousand
        })
    }


}

