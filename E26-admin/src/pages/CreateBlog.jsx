import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus, ArrowLeft, Image as ImageIcon, Type, AlignLeft, Send, Save, Upload, X, Globe } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

// Component for fixed sections (Title, Description)
const FixedFieldSection = ({ title, icon: Icon, values, onChange, onAdd, onRemove, placeholder, type = "text" }) => {
    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                        <Icon size={20} />
                    </div>
                    <h2 className="text-lg font-bold text-slate-800 capitalize">{title}</h2>
                </div>
                <button
                    type="button"
                    onClick={onAdd}
                    className="flex items-center space-x-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                    <Plus size={16} />
                    <span>Add {title}</span>
                </button>
            </div>

            <div className="space-y-3">
                {values.map((value, index) => (
                    <div key={index} className="flex gap-2">
                        {type === "textarea" ? (
                            <textarea
                                value={value}
                                onChange={(e) => onChange(index, e.target.value)}
                                placeholder={`${placeholder} ${index + 1}`}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none min-h-[100px]"
                                required
                            />
                        ) : (
                            <input
                                type="text"
                                value={value}
                                onChange={(e) => onChange(index, e.target.value)}
                                placeholder={`${placeholder} ${index + 1}`}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                required
                            />
                        )}
                        {values.length > 1 && (
                            <button
                                type="button"
                                onClick={() => onRemove(index)}
                                className="self-start p-3 text-slate-400 hover:text-red-500 transition-colors"
                            >
                                <Minus size={20} />
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Component for individual blocks
const ContentBlock = ({ block, index, onChange, onRemove, onFileUpload }) => {
    const fileInputRef = useRef(null);

    const handleFileClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="relative group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <button
                type="button"
                onClick={() => onRemove(index)}
                className="absolute top-4 right-4 p-2 text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                title="Remove block"
            >
                <X size={20} />
            </button>

            <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${block.type === 'image' ? 'bg-purple-50 text-purple-600' : 'bg-emerald-50 text-emerald-600'}`}>
                    {block.type === 'image' ? <ImageIcon size={20} /> : <AlignLeft size={20} />}
                </div>

                <div className="flex-1 space-y-4">
                    <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                        {block.type === 'image' ? 'Image Block' : 'Content Block'}
                    </label>

                    {block.type === 'content' ? (
                        <textarea
                            value={block.titleText || ''}
                            onChange={(e) => onChange(index, e.target.value, 'titleText')}
                            placeholder="Type your content here..."
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-none min-h-[150px]"
                        />
                    ) : (
                        <div className="space-y-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={block.value || ''}
                                    onChange={(e) => onChange(index, e.target.value)}
                                    placeholder="Enter image URL or upload"
                                    className="w-full px-4 py-3 pr-12 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={handleFileClick}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-purple-600 transition-colors"
                                    title="Upload Image"
                                >
                                    <Upload size={18} />
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                onFileUpload(index, file);
                                            }
                                            e.target.value = '';
                                        }}
                                        className="hidden"
                                        accept="image/*"
                                    />
                                </button>
                            </div>
                            {block.value && (
                                <div className="relative w-full h-64 rounded-xl overflow-hidden border border-slate-100 bg-slate-50">
                                    <img 
                                        src={block.value} 
                                        alt="Preview" 
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/400x300?text=Image+Error';
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const CreateBlog = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = !!id;

    const [titles, setTitles] = useState(['']);
    const [descriptions, setDescriptions] = useState(['']);
    const [slug, setSlug] = useState('');
    const [blocks, setBlocks] = useState([
        { 
            id: Date.now(), 
            type: 'content', 
            titleText: '',
            extraImages: []
        }
    ]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Function to prepare data according to backend schema
    const prepareFormData = () => {
        // Separate blocks by type
        const imageBlocks = blocks.filter(block => block.type === 'image');
        const contentBlocks = blocks.filter(block => block.type === 'content');
        
        // Prepare arrays for backend
        const images = imageBlocks
            .map(block => block.value)
            .filter(value => value && value.trim() !== '');
        
        const extraTitles = contentBlocks
            .map(block => ({
                titleText: block.titleText || ''
            }))
            .filter(item => item.titleText.trim() !== '');
        
        // Get all extraImages from content blocks
        const extraImages = contentBlocks
            .flatMap(block => block.extraImages || [])
            .filter(image => image && image.trim() !== '');

        // Create form data
        const formData = {
            title: titles[0]?.trim() || '',
            description: descriptions[0]?.trim() || '',
            slug: slug?.trim() || '',
            images: images,
            extraTitles: extraTitles,
            extraImages: extraImages
        };

        return formData;
    };

    // Generate slug from title
    const generateSlug = (text) => {
        return text
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-')
            .trim();
    };

    // Handle title change and auto-generate slug
    const updateTitle = (index, value) => {
        const newTitles = [...titles];
        newTitles[index] = value;
        setTitles(newTitles);
        
        // Auto-generate slug from first title
        if (index === 0 && !slug && value.trim()) {
            setSlug(generateSlug(value));
        }
    };

    // Main submit handler - SIMPLIFIED VERSION
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Validation
        if (!titles[0]?.trim()) {
            setError('Title is required');
            setLoading(false);
            return;
        }

        if (!descriptions[0]?.trim()) {
            setError('Description is required');
            setLoading(false);
            return;
        }

        try {
            const formData = prepareFormData();
            
            // Create FormData for API
            const apiFormData = new FormData();
            
            // Add text fields
            apiFormData.append('title', formData.title);
            apiFormData.append('description', formData.description);
            apiFormData.append('slug', formData.slug);
            apiFormData.append('images', JSON.stringify(formData.images));
            apiFormData.append('extraTitles', JSON.stringify(formData.extraTitles));
            apiFormData.append('extraImages', JSON.stringify(formData.extraImages));
            
            // Handle image files - using 'images' as field name for Multer
            const imageBlocks = blocks.filter(block => block.type === 'image');
            imageBlocks.forEach((block, index) => {
                if (block.value && block.value.startsWith('data:image')) {
                    // Convert base64 to blob
                    const base64 = block.value;
                    const byteString = atob(base64.split(',')[1]);
                    const mimeString = base64.split(',')[0].split(':')[1].split(';')[0];
                    const ab = new ArrayBuffer(byteString.length);
                    const ia = new Uint8Array(ab);
                    
                    for (let i = 0; i < byteString.length; i++) {
                        ia[i] = byteString.charCodeAt(i);
                    }
                    
                    const blob = new Blob([ab], { type: mimeString });
                    const ext = mimeString.split('/')[1] || 'jpg';
                    const fileName = `image_${Date.now()}_${index}.${ext}`;
                    
                    // Append with field name 'images' (Multer expects this)
                    apiFormData.append('images', blob, fileName);
                }
            });

            let response;
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            if (isEditMode) {
                response = await axios.put(`http://localhost:7000/api/updateBlog/${id}`, apiFormData, config);
            } else {
                response = await axios.post('http://localhost:7000/api/createBlog', apiFormData, config);
            }

            if (response.data.success) {
                alert(isEditMode ? 'Blog updated successfully!' : 'Blog created successfully!');
                navigate('/blogs');
            } else {
                setError(response.data.message || 'Operation failed');
            }
        } catch (error) {
            console.error('API Error:', error);
            let errorMessage = 'Something went wrong!';
            if (error.response) {
                errorMessage = error.response.data?.message || `Server error: ${error.response.status}`;
            } else if (error.request) {
                errorMessage = 'No response from server. Please check your connection.';
            } else {
                errorMessage = error.message;
            }
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    // Fetch blog data for edit mode
    const fetchBlogData = async () => {
        if (isEditMode) {
            setLoading(true);
            setError('');
            try {
                const response = await axios.get(`http://localhost:7000/api/viewBlogs/${id}`);
                const blog = response.data;
                
                if (blog) {
                    // Set basic fields
                    setTitles([blog.title || '']);
                    setDescriptions([blog.description || '']);
                    setSlug(blog.slug || '');
                    
                    // Create blocks from blog data
                    const newBlocks = [];
                    
                    // Add main images as image blocks
                    if (blog.images && blog.images.length > 0) {
                        blog.images.forEach((image, index) => {
                            newBlocks.push({
                                id: Date.now() + index,
                                type: 'image',
                                value: image
                            });
                        });
                    }
                    
                    // Add extraTitles as content blocks
                    if (blog.extraTitles && blog.extraTitles.length > 0) {
                        blog.extraTitles.forEach((item, index) => {
                            newBlocks.push({
                                id: Date.now() + 1000 + index,
                                type: 'content',
                                titleText: item.titleText || ''
                            });
                        });
                    }
                    
                    // If no blocks, add default content block
                    if (newBlocks.length === 0) {
                        newBlocks.push({
                            id: Date.now(),
                            type: 'content',
                            titleText: ''
                        });
                    }
                    
                    setBlocks(newBlocks);
                } else {
                    setError('Blog not found');
                }
            } catch (error) {
                console.error('Error fetching blog:', error);
                setError('Failed to load blog data');
            } finally {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, [id, isEditMode]);

    // Handle file upload
    const handleFileUpload = async (index, file) => {
        if (file) {
            // Validate file
            if (file.size > 5 * 1024 * 1024) {
                alert('File size too large. Maximum size is 5MB.');
                return;
            }

            if (!file.type.startsWith('image/')) {
                alert('Please select an image file.');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const newBlocks = [...blocks];
                newBlocks[index].value = reader.result;
                setBlocks(newBlocks);
            };
            reader.readAsDataURL(file);
        }
    };

    // Add new block
    const addBlock = (type) => {
        const newBlock = {
            id: Date.now(),
            type: type,
            value: '',
            titleText: ''
        };
        setBlocks([...blocks, newBlock]);
    };

    // Update block
    const updateBlock = (index, value, field = 'value') => {
        const newBlocks = [...blocks];
        if (field === 'titleText') {
            newBlocks[index].titleText = value;
        } else {
            newBlocks[index].value = value;
        }
        setBlocks(newBlocks);
    };

    // Remove block
    const removeBlock = (index) => {
        setBlocks(blocks.filter((_, i) => i !== index));
    };

    // Add description
    const addDescription = () => setDescriptions([...descriptions, '']);
    const removeDescription = (index) => {
        if (descriptions.length > 1) {
            setDescriptions(descriptions.filter((_, i) => i !== index));
        }
    };

    const updateDescription = (index, value) => {
        const newDesc = [...descriptions];
        newDesc[index] = value;
        setDescriptions(newDesc);
    };

    // Remove title
    const removeTitle = (index) => {
        if (titles.length > 1) {
            setTitles(titles.filter((_, i) => i !== index));
        }
    };

    // Save draft
    const handleSaveDraft = () => {
        try {
            const formData = prepareFormData();
            localStorage.setItem('blogDraft', JSON.stringify({
                ...formData,
                savedAt: new Date().toISOString(),
                blocks
            }));
            alert('Draft saved locally!');
        } catch (error) {
            console.error('Error saving draft:', error);
            alert('Failed to save draft');
        }
    };

    if (loading && isEditMode) {
        return (
            <div className="max-w-4xl mx-auto py-20 flex justify-center items-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-slate-600">Loading blog data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-32">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => navigate('/blogs')}
                        className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-600"
                        disabled={loading}
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">{isEditMode ? 'Edit Blog' : 'Create New Blog'}</h1>
                        <p className="text-sm text-slate-500">{isEditMode ? 'Make changes to your story' : 'Draft your next amazing story'}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <button 
                        type="button"
                        onClick={handleSaveDraft}
                        className="px-4 py-2 text-slate-600 font-medium hover:bg-slate-100 rounded-xl transition-all"
                        disabled={loading}
                    >
                        Save Draft
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-md shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                {isEditMode ? 'Updating...' : 'Publishing...'}
                            </>
                        ) : (
                            <>
                                <Send size={18} className="mr-2" />
                                {isEditMode ? 'Update Blog' : 'Publish Blog'}
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <X size={20} />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm">{error}</p>
                        </div>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Fixed Sections */}
                <FixedFieldSection
                    title="title"
                    icon={Type}
                    values={titles}
                    onChange={updateTitle}
                    onAdd={() => setTitles([...titles, ''])}
                    onRemove={removeTitle}
                    placeholder="Enter blog title"
                />

                {/* Slug Field */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                    <div className="flex items-center space-x-2">
                        <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                            <Globe size={20} />
                        </div>
                        <h2 className="text-lg font-bold text-slate-800">Slug (URL)</h2>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            placeholder="blog-post-url"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                            /blogs/{slug || 'your-slug'}
                        </div>
                    </div>
                    <p className="text-sm text-slate-500">
                        This will be used in the URL. Leave empty to auto-generate from title.
                    </p>
                </div>

                <FixedFieldSection
                    title="description"
                    icon={AlignLeft}
                    values={descriptions}
                    onChange={updateDescription}
                    onAdd={addDescription}
                    onRemove={removeDescription}
                    placeholder="Enter blog description"
                    type="textarea"
                />

                <div className="border-t border-slate-200 my-8"></div>

                {/* Dynamic Blocks */}
                <div className="space-y-6">
                    {blocks.map((block, index) => (
                        <ContentBlock
                            key={block.id}
                            index={index}
                            block={block}
                            onChange={updateBlock}
                            onRemove={removeBlock}
                            onFileUpload={handleFileUpload}
                        />
                    ))}
                </div>

                {/* Bottom Actions */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                    <button
                        type="button"
                        onClick={() => addBlock('image')}
                        className="flex items-center justify-center p-4 rounded-xl border-2 border-dashed border-slate-300 text-slate-500 hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 transition-all font-medium"
                        disabled={loading}
                    >
                        <Plus size={20} className="mr-2" />
                        Add Image Block
                    </button>
                    <button
                        type="button"
                        onClick={() => addBlock('content')}
                        className="flex items-center justify-center p-4 rounded-xl border-2 border-dashed border-slate-300 text-slate-500 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all font-medium"
                        disabled={loading}
                    >
                        <Plus size={20} className="mr-2" />
                        Add Content Block
                    </button>
                </div>

                <div className="flex justify-end pt-8">
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                {isEditMode ? 'Saving Changes...' : 'Saving...'}
                            </>
                        ) : (
                            <>
                                <Save size={20} className="mr-2" />
                                {isEditMode ? 'Save Changes' : 'Save Blog Post'}
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateBlog;