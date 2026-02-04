import React from 'react';

const Dashboard = () => {
    const stats = [
        { label: 'Total Students', value: '1,234', change: '+12%', color: 'blue' },
        { label: 'Active Clients', value: '456', change: '+5%', color: 'indigo' },
        { label: 'Total Courses', value: '24', change: '0%', color: 'emerald' },
        { label: 'Active Blogs', value: '18', change: '+2', color: 'amber' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
                <div className="text-sm font-medium text-slate-500">
                    Last updated: Feb 2, 2026
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
                        <div className="flex items-baseline justify-between">
                            <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-600'
                                }`}>
                                {stat.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 mr-3 text-xs">
                                        JD
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800">New student enrollment</p>
                                        <p className="text-xs text-slate-500">John Doe registered for React Mastery</p>
                                    </div>
                                </div>
                                <span className="text-xs text-slate-400">2h ago</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-1 gap-3">
                        <button className="w-full py-2 px-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                            Add New Student
                        </button>
                        <button className="w-full py-2 px-4 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                            Create Blog Post
                        </button>
                        <button className="w-full py-2 px-4 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                            Upload Course Media
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
