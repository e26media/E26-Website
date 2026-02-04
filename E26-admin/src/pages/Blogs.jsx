import React, { useState } from 'react';
import { Plus, Search, Calendar, Eye, MessageSquare, Share2, Pencil, Trash2, X, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Blogs = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: 'Top 10 React Performance Tips',
            author: 'Admin',
            date: 'Jan 28, 2026',
            views: '1.2k',
            comments: 12,
            status: 'Published',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400'
        },
        {
            id: 2,
            title: 'Building Scalable APIs with Node.js',
            author: 'Jane Smith',
            date: 'Feb 1, 2026',
            views: '850',
            comments: 8,
            status: 'Draft',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400'
        },
        {
            id: 3,
            title: 'Design Systems for Modern Web',
            author: 'Admin',
            date: 'Jan 20, 2026',
            views: '3.4k',
            comments: 45,
            status: 'Published',
            image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=400'
        },
    ]);

    const [deleteModal, setDeleteModal] = useState({ show: false, blogId: null });

    const handleDeleteClick = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        setDeleteModal({ show: true, blogId: id });
    };

    const confirmDelete = () => {
        setBlogs(blogs.filter(blog => blog.id !== deleteModal.blogId));
        setDeleteModal({ show: false, blogId: null });
    };

    const handleUpdateClick = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/blogs/edit/${id}`);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Blogs Management</h1>
                    <p className="text-sm text-slate-500">Create, edit and manage your company's blog content.</p>
                </div>
                <Link
                    to="/blogs/create"
                    className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-sm"
                >
                    <Plus size={18} className="mr-2" />
                    Create Blog
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div key={blog.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-md transition-all">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3 flex items-center space-x-2">
                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${blog.status === 'Published' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                                    } border border-white/50 backdrop-blur-sm shadow-sm`}>
                                    {blog.status}
                                </span>
                            </div>

                            {/* Actions Overlay */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={(e) => handleUpdateClick(e, blog.id)}
                                    className="p-3 bg-white text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-lg"
                                    title="Edit Blog"
                                >
                                    <Pencil size={20} />
                                </button>
                                <button
                                    onClick={(e) => handleDeleteClick(e, blog.id)}
                                    className="p-3 bg-white text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all shadow-lg"
                                    title="Delete Blog"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="p-5">
                            <div className="flex items-center text-xs text-slate-400 mb-2">
                                <Calendar size={14} className="mr-1" />
                                {blog.date}
                                <span className="mx-2 text-slate-200">|</span>
                                by {blog.author}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-4 line-clamp-2 hover:text-blue-600 cursor-pointer transition-colors">
                                {blog.title}
                            </h3>

                            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                                <div className="flex items-center space-x-3">
                                    <div className="flex items-center text-xs text-slate-500">
                                        <Eye size={14} className="mr-1" />
                                        {blog.views}
                                    </div>
                                    <div className="flex items-center text-xs text-slate-500">
                                        <MessageSquare size={14} className="mr-1" />
                                        {blog.comments}
                                    </div>
                                </div>
                                <button className="text-slate-400 hover:text-blue-600 transition-colors">
                                    <Share2 size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Delete Confirmation Modal */}
            {deleteModal.show && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
                        <div className="p-8 text-center">
                            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <AlertCircle size={32} />
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 mb-2">Are you sure?</h2>
                            <p className="text-slate-500">
                                Do you really want to delete this blog? This action cannot be undone.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 flex items-center justify-center space-x-3">
                            <button
                                onClick={() => setDeleteModal({ show: false, blogId: null })}
                                className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-100 transition-all min-w-[120px]"
                            >
                                No, Keep it
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-6 py-2.5 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200 min-w-[120px]"
                            >
                                Yes, Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blogs;
