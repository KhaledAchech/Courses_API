const router = require('express').Router();
const Course = require('../models/course');

router.get('', async (req,res)=>{
    res.send(await Course.find());
});

module.exports = router