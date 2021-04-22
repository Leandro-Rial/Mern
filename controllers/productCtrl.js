const Products = require('../models/productShema');

const productCtrl = {
    getProducts: async (req, res) => {
        try {
            
            const products = await Products.find();

            res.json({
                status: 'success',
                result: products.length,
                products: products
            })

        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    },
    addProducts: async (req, res) => {
        try {
            
            const { product_id, title, price, description } = req.body;

            const product = await Products.findOne({ product_id })

            if(product) {
                return res.status(400).json({ msg: 'This product already exists.' })
            }

            const newProduct = new Products({
                product_id, title: title.toLowerCase(), price, description
            });

            await newProduct.save();

            res.json({ msg: 'Created' })

        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    },
    getProduct: async (req, res) => {
        try {
            
            const id = req.params.id;

            const product = await Products.findOne({ _id: id });

            res.json({ product })

        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    },
    updateProducts: async (req, res) => {
        try {
            
            const { title, description, price } = req.body;

            await Products.findOneAndUpdate({ _id: req.params.id }, { title: title.toLowerCase(), price, description });

            res.json({ msg: 'Updated' })

        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    },
    deleteProducts: async (req, res) => {
        try {
            
            const id = req.params.id;

            await Products.findOneAndDelete({ _id: id });

            res.json({ msg: 'Deleted' })

        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    },
}

module.exports = productCtrl