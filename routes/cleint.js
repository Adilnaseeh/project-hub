var express = require('express');
var router = express.Router();
var clientController=require('../controllers/clientController');

router.post('/',clientController.createClient)
router.post('/id',clientController.editClient)
router.get('./id',clientController.getOneClient)
router.post('/id',clientController.deleteClient)

module.exports = router;