const router = require('express').Router();

const productCtrl = require('../controllers/productCtrl');

router.get('/products', productCtrl.getProducts);
router.post('/add', productCtrl.addProducts);
router.get('/:id', productCtrl.getProduct);
router.put('/update/:id', productCtrl.updateProducts);
router.delete('/delete/:id', productCtrl.deleteProducts);

module.exports = router;