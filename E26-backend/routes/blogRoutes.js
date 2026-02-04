const express = require('express');
const router = express.Router();
const {postBlog, blogView, allBlogs, deleteBlog, updateBlog} = require('../controller/blogController');
const { arrayUpload, extraImagesUpload, fieldsUpload } = require('../Middlewares/multer');



// Router to add a blog
router.post('/createBlog', fieldsUpload,postBlog);
router.get('/viewBlogs',allBlogs)
router.get('/viewBlogs/:id',blogView);
router.delete('/deleteBlog/:id',deleteBlog);
router.put('/updateBlog/:id',fieldsUpload,updateBlog);

module.exports = router