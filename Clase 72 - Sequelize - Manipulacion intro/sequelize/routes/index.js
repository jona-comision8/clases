var express = require('express');
var router = express.Router();
let controller = require('../controllers/indexController')

/* GET home page. */
router.get('/', controller.index);
router.get('/cancion/:id', controller.detail)
router.get('/search', controller.search)
router.get('/song/add', controller.add)
router.post('/song/create', controller.create)
router.get('/song/edit/:id', controller.edit)
router.put('/song/edit/:id', controller.update)
router.delete('/song/delete/:id', controller.destroy)

module.exports = router;
