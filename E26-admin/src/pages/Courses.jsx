import React from 'react';
import { Plus, PlayCircle, Star, Users, Clock } from 'lucide-react';

const Courses = () => {
    const courses = [
        {
            id: 1,
            name: 'Full Stack React & Node',
            price: '$99',
            students: 450,
            rating: 4.8,
            duration: '24h',
            status: 'Active',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400'
        },
        {
            id: 2,
            name: 'Modern UI/UX Design',
            price: '$79',
            students: 320,
            rating: 4.9,
            duration: '18h',
            status: 'Active',
            image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=400'
        },
        {
            id: 3,
            name: 'Python for Data Science',
            price: '$129',
            students: 210,
            rating: 4.7,
            duration: '32h',
            status: 'Paused',
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400'
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Course Management</h1>
                    <p className="text-sm text-slate-500">Manage your course library, content, and student reviews.</p>
                </div>
                <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-sm">
                    <Plus size={18} className="mr-2" />
                    New Course
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div key={course.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all">
                        <div className="relative h-40">
                            <img src={course.image} alt={course.name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-blue-600 hover:scale-110 transition-transform">
                                    <PlayCircle size={24} />
                                </button>
                            </div>
                        </div>

                        <div className="p-5 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-slate-900 line-clamp-1">{course.name}</h3>
                                <span className="text-lg font-bold text-blue-600">{course.price}</span>
                            </div>

                            <div className="grid grid-cols-3 gap-2 py-4 border-y border-slate-50 my-4 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center text-slate-600 mb-1">
                                        <Users size={14} className="mr-1 text-slate-400" />
                                        {course.students}
                                    </div>
                                    Students
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center text-slate-600 mb-1">
                                        <Star size={14} className="mr-1 text-amber-400 fill-amber-400" />
                                        {course.rating}
                                    </div>
                                    Rating
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center text-slate-600 mb-1">
                                        <Clock size={14} className="mr-1 text-slate-400" />
                                        {course.duration}
                                    </div>
                                    Duration
                                </div>
                            </div>

                            <div className="mt-auto flex items-center justify-between">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${course.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'
                                    }`}>
                                    {course.status}
                                </span>
                                <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                                    Edit Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
