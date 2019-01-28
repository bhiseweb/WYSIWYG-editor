const express = require('express');
const controller =require('../controller/index')
const router = express.Router();

router.post('/send', controller.save_record);

router.get('/fetchAll', controller.get_all_record);

router.get('/fetch', controller.get_record)


module.exports=router