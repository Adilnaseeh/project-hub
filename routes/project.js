var express = require('express');
var router = express.Router();
var projectController=require('../controllers/projectController');


router.post('/', projectController.createProject);
router.get('/', projectController.getAllProject);
router.get('/:id', projectController.getOneProject);
router.put('/:id', projectController.editProject);
router.delete('/:id', projectController.deleteProject);



module.exports = router;