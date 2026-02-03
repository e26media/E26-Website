const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    //   required: true,
      trim: true,
    },
    description: {
      type: String,
    //   required: true,
    },
    author: {
      type: String,
    //   required: true,
    },
   
    image: {
      type: String,
    },
       views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
    //   default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
