//endpoints
const express = require('express');
const router= express.Router();
const userController = require('../controllers/userController');

//endpoint to handle employees data retrieval
router.get('/users', userController.getAllUsers); //function name
//router.get('/hello', userController.getHello);
//router.get("/users/:id",userController.getUserById);
//router.get("/users/ip/:ip_address",userController.getUserByIp);
router.get('/users/:ip_email', userController.getUserByIpOrEmail);
router.post('/users',userController.createUser);
router.put("/users", userController.updateUser);
router.delete('/users',userController.deleteUser);

module.exports = router;
