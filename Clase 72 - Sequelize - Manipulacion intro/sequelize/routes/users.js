var express = require('express');
var router = express.Router();
let controller = require('../controllers/indexController')

/* GET users listing. */
router.get('/', controller.index);

module.exports = router;
