const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/product.js')

router.get('/',productControllers.getProduct);
router.post('/',productControllers.addProduct);
router.put('/',productControllers.updateProduct);
router.delete('/',productControllers.deleteProduct);





//lay du lieu 1 phan tu
/* router.get('/:id', (req, res, next) => {
    var id = req.params.id
    productModel.findById(id)
    .then(data => {
        res.json(data)
    })
    .catch(data => {
        res.status(500).json('Server loi')
    })
}) */




module.exports = router