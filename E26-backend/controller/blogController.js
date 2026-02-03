
const express = require("express");
const Blog = require("../models/blogSchema");

// CREATE BLOG
const createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();

    res.status(201).json({
      message: "Blog Created Successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {createBlog}

