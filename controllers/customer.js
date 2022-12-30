const express = require('express');
const customerModel = require('../models/customer.js');

class CustomerControllers {
    getCustomer(req, res) {
        customerModel.find({})
        .then(data => {
            res.json(data)
        })
        .catch(data => {
            res.status(500).json('Server loi')
        })
    };
    
    addCustomer (req, res) {
        var id = req.body.id
        var name = req.body.name
        var age = req.body.age
        var gender = req.body.gender
        var address = req.body.address
        var telephone = req.body.telephone
        var buy_products = req.body.buy_products
        var stores = req.body.stores
    
        customerModel.create({
            id: id,
            name: name,
            age: age,
            gender: gender,
            address: address,
            telephone: telephone,
            buy_products: buy_products,
            stores: stores
        })
        .then(data => {
            res.json('them du lieu thanh cong')
        })
        .catch(err => {
            res.status(500).json('Server loi')
        })
    };
    
    updateCustomer(req, res) {
        var id = req.params.id
        var newId = req.body.id
        var newName = req.body.newName
        var newAge = req.body.newAge
        var newGender = req.body.newGender
        var newAddress = req.body.newAddress
        var newTelephone = req.body.newTelephone
        var newBuy_products = req.body.newBuy_products
        var newStores = req.body.newStores
        customerModel.findByIdAndUpdate(id, {    
            id: newId,
            name: newName,
            age: newAge,
            gender: newGender,
            address: newAddress,
            telephone: newTelephone,
            buy_products: newBuy_products,
            stores: newStores
        })
        .then(data => {
            res.json('cap nhat thanh cong')
        })
        .catch(err => {
            res.status(500).json('Server loi')
        })
    };
    
    deleteCustomer (req, res) {
        var id = req.params.id
        customerModel.deleteOne({
            _id: id
        })
        .then(data => {
            res.json('xoa thanh cong ')
        })
        .catch(err => {
            res.status(500).json('Server loi')
        })
    }
}

module.exports = new CustomerControllers;

