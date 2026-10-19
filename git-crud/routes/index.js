// //endpoint
// const express=require("express");
// const router=express.Router();
// const userController=require("../controllers/userController"); //*

// //endpointmame
// router.get("/users",userController.getAllUsers); //function name
// //router.get("/hello",userController.getHello); 
// router.get("/users/:id",userController.getUserById);
// //router.get("/users/ip/:ip_address",userController.getUserByIp);
// router.get("/users/ip/:ip_email",userController.getUserByIpOrEmail);
// router.post("/users", userController.createUser);

// module.exports=router;

//endpoints
const express = require('express');
const router= express.Router();
const userController = require('../controllers/userController');

//endpoint to handle employees data retrieval
router.get('/users', userController.getAllUsers);
router.get('/hello', userController.getHelloWorld);
router.get('/users/:search', userController.getUserByIpOrEmail);
router.post('/users',userController.createUser);

module.exports = router;
