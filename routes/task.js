var express = require('express');
var router = express.Router();
var taskcontrollers=require('../controllers/taskController');

router.post('/',taskcontrollers.createTask);
router.get('/',taskcontrollers.getOneTask);
router.post('/',taskcontrollers.editTask);
router.post('/',taskcontrollers.deleteTask);


module.exports = router;