const Blog = require('../models/blogSchema');

const postBlog = async (req, res) => {
    try {
        console.log("Request Body:", req.body);
        console.log("Request Files:", req.files);

        const { title, description } = req.body;

        // VALIDATION
        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Title and Description required"
            });
        }

       let images = [];
let extraImages = [];

console.log("FILES:", req.files);

if (req.files) {

    if (req.files.images) {
        images = req.files.images.map(
            file => `/uploads/blog/${file.filename}`
        );
    }

    if (req.files.extraImages) {
        extraImages = req.files.extraImages.map(
            file => `/uploads/blog/${file.filename}`
        );
    }
}


        // ===== EXTRA TITLES HANDLING =====
        let formattedExtraTitles = [];
        
        try {
            if (req.body.extraTitles) {

                let titlesArray = req.body.extraTitles;

                // If coming as string from form-data
                if (typeof titlesArray === "string") {
                    titlesArray = JSON.parse(titlesArray);
                }

                if (Array.isArray(titlesArray)) {
                    formattedExtraTitles = titlesArray.map(item => ({
                        titleText: item.titleText || ""
                    }));
                }
            }
        } catch (error) {
            console.log("extraTitles parse error:", error);
        }

        // SLUG GENERATE
        const slugBase = title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-');

        let finalSlug = slugBase;
        let counter = 1;

        while (await Blog.findOne({ slug: finalSlug })) {
            finalSlug = `${slugBase}-${counter}`;
            counter++;
        }

        // CREATE BLOG
        const blog = new Blog({
            title: title.trim(),
            slug: finalSlug,
            description: description.trim(),
            images,
            extraImages,
            extraTitles: formattedExtraTitles
        });

        await blog.save();

        res.status(201).json({
            success: true,
            message: "Blog Created Successfully",
            blog
        });

    } catch (error) {
        console.error("Error creating blog:", error);

        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
};




const allBlogs=async(req,res)=>{
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            blogs
        });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
};



const blogView=async(req,res)=>{
    try {
        const blogId = req.params.id;
        const blog = await Blog.findById(blogId);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        } 
        res.status(200).json({
            success: true,
            blog
        });
    } catch (error) {
        console.error("Error fetching blog:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
};



const deleteBlog=async(req,res)=>{
    try {
        const blogId = req.params.id;
        const blog = await Blog.findByIdAndDelete(blogId);      
        if (!blog) {
            return res.status(404).json({
                success: false, 
                message: "Blog not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Blog deleted successfully"
        });

    } catch (error) {
        console.error("Error deleting blog:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
};


const updateBlog = async (req, res) => {
    try {
        console.log("Update Request Body:", req.body);
        console.log("Update Request Files:", req.files);

        //  ID MUST COME FROM PARAMS
        const { id } = req.params;
        const { title, description } = req.body;

        // ===== VALIDATION =====
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Blog ID is required"
            });
        }

        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Title and Description required"
            });
        }

        // ===== FIND BLOG =====
        const existingBlog = await Blog.findById(id);

        if (!existingBlog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        let images = existingBlog.images || [];
        let extraImages = existingBlog.extraImages || [];

        // ===== FILE HANDLING =====
        if (req.files) {
            if (req.files.images) {
                images = req.files.images.map(
                    file => `/uploads/blog/${file.filename}`
                );
            }

            if (req.files.extraImages) {
                extraImages = req.files.extraImages.map(
                    file => `/uploads/blog/${file.filename}`
                );
            }
        }

        // ===== EXTRA TITLES =====
        let formattedExtraTitles = existingBlog.extraTitles || [];

        try {
            if (req.body.extraTitles) {
                let titlesArray = req.body.extraTitles;

                if (typeof titlesArray === "string") {
                    titlesArray = JSON.parse(titlesArray);
                }

                if (Array.isArray(titlesArray)) {
                    formattedExtraTitles = titlesArray.map(item => ({
                        titleText: item.titleText || ""
                    }));
                }
            }
        } catch (err) {
            console.log("extraTitles parse error:", err);
        }

        // ===== SLUG UPDATE =====
        let finalSlug = existingBlog.slug;

        if (existingBlog.title !== title) {
            const slugBase = title
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/--+/g, '-');

            finalSlug = slugBase;
            let counter = 1;

            while (await Blog.findOne({ slug: finalSlug, _id: { $ne: id } })) {
                finalSlug = `${slugBase}-${counter}`;
                counter++;
            }
        }

        // ===== UPDATE DATA =====
        existingBlog.title = title.trim();
        existingBlog.slug = finalSlug;
        existingBlog.description = description.trim();
        existingBlog.images = images;
        existingBlog.extraImages = extraImages;
        existingBlog.extraTitles = formattedExtraTitles;

        await existingBlog.save();

        return res.status(200).json({
            success: true,
            message: "Blog Updated Successfully",
            blog: existingBlog
        });

    } catch (error) {
        console.error("Error updating blog:", error);
        return res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message
        });
    }
};



module.exports = { postBlog,blogView,allBlogs,deleteBlog,updateBlog };