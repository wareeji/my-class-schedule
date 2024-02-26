const express = require ('express');
const router = express.Router();

const listClass = require('./controller');


router.get('/',listClass);

module.exports = router; 