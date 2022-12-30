const express = require('express');
const accountModel = require('../models/account.js');

class AccountControllers {
    getAccount(req, res) {
        accountModel.find({})
        .then(data => {
            res.json(data)
        })
        .catch(data => {
            res.status(500).json('Server loi')
        })
    };
    
    addAccount (req, res) {
        var username = req.body.username
        var password = req.body.password
        var type = req.body.type
        var position = req.body.position
    
        accountModel.create({
            username : username,
            password : password,
            type: type,
            position: position
        })
        .then(data => {
            res.json('them du lieu thanh cong')
        })
        .catch(err => {
            res.status(500).json('Server loi')
        })
    };
    
    updateAccount(req, res) {
        var id = req.params.id
        var newPassword = req.body.newPassword
        var newType = req.body.newType
        var newPosition = req.body.newPosition
    
        accountModel.findByIdAndUpdate(id, {    
            password : newPassword,
            type: newType,
            position: newPosition
        })
        .then(data => {
            res.json('cap nhat thanh cong')
        })
        .catch(err => {
            res.status(500).json('Server loi')
        })
    };
    
    deleteAccount (req, res) {
        var id = req.params.id
        accountModel.deleteOne({
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

module.exports = new AccountControllers;

