const express = require('express');
const router = express();
const authController = require('../controllers/authController');
const asyncMiddleware = require('../middlewares/catchAync');
const multer = require('multer');
const path = require('path');
const validateToken = require('../middlewares/accessCheck'); 


// ! Module 1:  Auth
router.post('/signin', asyncMiddleware(authController.signIn));

// ! Module 2: Agent Dashboard
// 1.  Get 
//router.get('/agentDashboard', validateToken, checkPermission,  asyncMiddleware(adminController.getAllCustomers)) 

module.exports = router;