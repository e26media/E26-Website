import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus, ArrowLeft, Image as ImageIcon, Type, AlignLeft, Send, Save, Upload, X } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

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

// Component for individual blocks (Image/Content)
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

                <div className="flex-1 space-y-2">
                    <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                        {block.type === 'image' ? 'Image Block' : 'Content Block'}
                    </label>

                    {block.type === 'content' ? (
                        <textarea
                            value={block.value}
                            onChange={(e) => onChange(index, e.target.value)}
                            placeholder="Type your content here..."
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all resize-none min-h-[150px]"
                        />
                    ) : (
                        <div className="space-y-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={block.value}
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
                                        onChange={(e) => onFileUpload(index, e.target.files[0])}
                                        className="hidden"
                                        accept="image/*"
                                    />
                                </button>
                            </div>
                            {block.value && (
                                <div className="relative w-full h-64 rounded-xl overflow-hidden border border-slate-100 bg-slate-50">
                                    <img src={block.value} alt="Preview" className="w-full h-full object-cover" />
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
    const [blocks, setBlocks] = useState([
        { id: Date.now(), type: 'content', value: '' }
    ]);

    useEffect(() => {
        if (isEditMode) {
            // Mock fetching
            const mockBlogs = [
                {
                    id: 1,
                    titles: ['Top 10 React Performance Tips'],
                    descriptions: ['Learn how to optimize your React applications.'],
                    // Mapping old structure to new blocks
                    blocks: [
                        { id: 1, type: 'image', value: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400' },
                        { id: 2, type: 'content', value: 'Content line 1' },
                        { id: 3, type: 'content', value: 'Content line 2' }
                    ]
                }
            ];
            const blog = mockBlogs.find(b => b.id === parseInt(id));
            if (blog) {
                setTitles(blog.titles || ['']);
                setDescriptions(blog.descriptions || ['']);
                // If existing blog has old structure (images/contents arrays), we'd need to map them.
                // For this mock, we assume we upgraded the mock data or map it here.
                if (blog.blocks) {
                    setBlocks(blog.blocks);
                } else if (blog.images || blog.contents) {
                    // Fallback migration for old mock data if needed
                    const newBlocks = [];
                    if (blog.images) blog.images.forEach(img => newBlocks.push({ id: Math.random(), type: 'image', value: img }));
                    if (blog.contents) blog.contents.forEach(cnt => newBlocks.push({ id: Math.random(), type: 'content', value: cnt }));
                    setBlocks(newBlocks);
                }
            }
        }
    }, [id, isEditMode]);

    // Handlers for Fixed Sections
    const updateTitle = (index, value) => {
        const newTitles = [...titles];
        newTitles[index] = value;
        setTitles(newTitles);
    };
    const addTitle = () => setTitles([...titles, '']);
    const removeTitle = (index) => {
        if (titles.length > 1) {
            setTitles(titles.filter((_, i) => i !== index));
        }
    };

    const updateDescription = (index, value) => {
        const newDesc = [...descriptions];
        newDesc[index] = value;
        setDescriptions(newDesc);
    };
    const addDescription = () => setDescriptions([...descriptions, '']);
    const removeDescription = (index) => {
        if (descriptions.length > 1) {
            setDescriptions(descriptions.filter((_, i) => i !== index));
        }
    };

    // Handlers for Blocks
    const addBlock = (type) => {
        setBlocks([...blocks, { id: Date.now(), type, value: '' }]);
    };

    const updateBlock = (index, value) => {
        const newBlocks = [...blocks];
        newBlocks[index].value = value;
        setBlocks(newBlocks);
    };

    const removeBlock = (index) => {
        setBlocks(blocks.filter((_, i) => i !== index));
    };

    const handleFileUpload = (index, file) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                updateBlock(index, reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { titles, descriptions, blocks };
        console.log('Final Form Data:', formData);
        alert(isEditMode ? 'Blog post updated successfully!' : 'Blog post created successfully!');
        navigate('/blogs');
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-32">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => navigate('/blogs')}
                        className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-600"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">{isEditMode ? 'Edit Blog' : 'Create New Blog'}</h1>
                        <p className="text-sm text-slate-500">{isEditMode ? 'Make changes to your story' : 'Draft your next amazing story'}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="px-4 py-2 text-slate-600 font-medium hover:bg-slate-100 rounded-xl transition-all">
                        Save Draft
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
                    >
                        <Send size={18} className="mr-2" />
                        {isEditMode ? 'Update Blog' : 'Publish Blog'}
                    </button>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Fixed Sections */}
                <FixedFieldSection
                    title="title"
                    icon={Type}
                    values={titles}
                    onChange={updateTitle}
                    onAdd={addTitle}
                    onRemove={removeTitle}
                    placeholder="Enter blog title"
                />

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
                    >
                        <Plus size={20} className="mr-2" />
                        Add Image
                    </button>
                    <button
                        type="button"
                        onClick={() => addBlock('content')}
                        className="flex items-center justify-center p-4 rounded-xl border-2 border-dashed border-slate-300 text-slate-500 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all font-medium"
                    >
                        <Plus size={20} className="mr-2" />
                        Add Content
                    </button>
                </div>

                <div className="flex justify-end pt-8">
                    <button
                        type="submit"
                        className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                    >
                        <Save size={20} className="mr-2" />
                        {isEditMode ? 'Save Changes' : 'Save Blog Post'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateBlog;
