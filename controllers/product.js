const express = require('express');
const productModel = require('../models/product.js');

class ProductControllers {
    getProduct(req, res) {
        productModel.find({})
        .then(data => {
            res.json(data)
        })
        .catch(data => {
            res.status(500).json('Server loi')
        })
    };

    //them moi du lieu vao DB
    addProduct(req, res) {
        var id = req.body.id
        var name = req.body.name
        var type = req.body.type
        var code = req.body.code
        var error_times = req.body.error_times
        var price = req.body.price
        var status = req.body.status
        var position = req.body.position
        var produced_by = req.body.produced_by
        var produced_time = req.body.produced_time
        var sold_time = req.body.sold_time
        var customer_id = req.body.customer_id
        productModel.create({
            id: id,
            name: name,
            type: type,
            code: code,
            error_times: error_times ,
            price: price,
            status: status,
            position: position,
            produced_by: produced_by,
            produced_time: produced_time,
            sold_time: sold_time,
            customer_id: customer_id
        })
        .then(data => {
            res.json('them du lieu thanh cong')
        })
        .catch(err => {
            res.status(500).json('Server loi')
        })
    };
    
    //update du lieu DB
    updateProduct(req, res) {
        var id = req.params.id
        var newId = req.body.newId
        var newName = req.body.newName
        var newType = req.body.newType
        var newCode = req.body.newCode
        var newError_times = req.body.newError_times
        var newPrice = req.body.newPrice
        var newStatus = req.body.newStatus
        var newPosition = req.body.newPosition
        var newProduced_by = req.body.newProduced_by
        var newProduced_time = req.body.newProduced_time
        var newSold_time = req.body.newSold_time
        var newCustomer_id = req.body.newCustomer_id
    
        productModel.findByIdAndUpdate(id, {    
            id: newId,
            name: newName,
            type: newType,
            code: newCode,
            error_times: newError_times ,
            price: newPrice,
            status: newStatus,
            position: newPosition,
            produced_by: newProduced_by,
            produced_time: newProduced_time,
            sold_time: newSold_time,
            customer_id: newCustomer_id
        })
        .then(data => {
            res.json('cap nhat thanh cong')
        })
        .catch(err => {
            res.status(500).json('Server loi')
        })
    };
    
    //xoa du lieu DB
    deleteProduct(req, res) {
        var id = req.params.id
        productModel.deleteOne({
            _id: id
        })
        .then(data => {
            res.json('xoa thanh cong ')
        })
        .catch(err => {
            res.status(500).json('Server loi')
        })
    };
}

module.exports = new ProductControllers