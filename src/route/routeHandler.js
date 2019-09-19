
const express = require('express');
const router = express.Router();
const getUserByIdName = require('../controllers/getUserByIdName');
const getPolicyByUser = require('../controllers/getPolicyByUserName');
const getUserByPolicy = require('../controllers/getUserByPolicy');

//Get user data filtered by user id or user name
router.get('/api/user/:idName', getUserByIdName);
//Get the list of policies linked to a user name
router.get('/api/policy/:clientName', getPolicyByUser);
//Get the user linked to a policy number
//router.get('/api/user/:policyId', getUserByPolicy);

module.exports = router;