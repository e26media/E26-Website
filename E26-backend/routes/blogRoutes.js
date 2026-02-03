const express = require('express');
const router=  express.Router();
const {createBlog} = require('../controller/blogController');


router.post('/createBlog',createBlog);

module.exports=router;
