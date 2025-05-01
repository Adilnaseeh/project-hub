var express = require('express');
var router = express.Router();
var calenderController=require('../controllers/calenderController');

router.post('/',calenderController.createCalender);
router.get('/',calenderController.getOneCalender);
router.post('/',calenderController.editCalender);
router.post('/',calenderController.deleteCalender)


module.exports = router;