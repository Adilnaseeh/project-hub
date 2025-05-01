var express = require('express');
var router = express.Router();
var teamController=require('../controllers/teamContoller')

router.post('/',teamController.createTeam)
router.post('/',teamController.editTeam)
router.post('/',teamController.deleteTeam)
router.get('/',teamController.getOneTeam)

module.exports = router;