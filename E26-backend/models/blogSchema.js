const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        sparse: true // This allows multiple null values
    },
    description: {
        type: String
    },
    extraTitles: [
        {
            titleText: {
                type: String,
                default: ""
            }
        }
    ],
    
    extraImages: [{
        type: String,
        default: []
    }],
    images: [{
        type: String,
        default: []
    }]
}, { timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);