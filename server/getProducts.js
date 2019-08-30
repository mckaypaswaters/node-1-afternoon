const products = require('../products.json')

const getProducts = (req, res) => {
    console.log('Test test')
    res.status(200).send(products)
}

module.exports = getProducts