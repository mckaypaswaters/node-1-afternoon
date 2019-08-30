const products = require('../products.json')

const getProduct = (req, res) => {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
        res.status(500).send('Item not in list')
    } else {
        const foundProduct = products.filter(products => products.id === id)
        res.status(200).send(foundProduct)
    }
}

module.exports = getProduct