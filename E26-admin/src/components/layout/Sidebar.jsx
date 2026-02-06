import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    UserCircle,
    FileText,
    BookOpen,
    Settings,
    ChevronLeft,
    ChevronRight,
    LogOut
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
        { icon: Users, label: 'Students', path: '/students' },
        { icon: UserCircle, label: 'Clients', path: '/clients' },
        {
            icon: FileText,
            label: 'Blogs',
            path: '/blogs',
            subItems: [
                { label: 'Blog Management', path: '/blogs' },
                { label: 'Create Blog', path: '/blogs/create' }
            ]
        },
        { icon: BookOpen, label: 'Courses', path: '/courses' },
        { icon: Settings, label: 'Settings', path: '/settings' },
    ];

    return (
        <aside
            className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'
                } bg-white border-r border-slate-200 shadow-sm`}
        >
            <div className="flex flex-col h-full">
                {/* Logo Section */}
                <div className="flex items-center justify-between h-16 px-4 border-b border-slate-100">
                    {isOpen && (
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            E26 Admin
                        </span>
                    )}
                    <button
                        onClick={toggleSidebar}
                        className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
                    >
                        {isOpen ? <ChevronLeft size={20} /> : <ChevronLeft size={20} className="rotate-180" />}
                    </button>
                </div>

                {/* Navigation Section */}
                <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                    {navItems.map((item) => (
                        <div key={item.path} className="space-y-1">
                            <NavLink
                                to={item.path}
                                end={item.subItems ? true : false}
                                className={({ isActive }) => `
                                    flex items-center p-3 rounded-xl transition-all duration-200 group
                                    ${isActive
                                        ? 'bg-blue-50 text-blue-600 shadow-sm'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                                `}
                            >
                                <item.icon size={22} className={`${isOpen ? 'mr-3' : 'mx-auto'} transition-all`} />
                                {isOpen && <span className="font-medium">{item.label}</span>}
                            </NavLink>

                            {/* Sub items */}
                            {isOpen && item.subItems && (
                                <div className="ml-10 space-y-1 mt-1 border-l-2 border-slate-50 pl-2">
                                    {item.subItems.map((sub) => (
                                        <NavLink
                                            key={sub.path}
                                            to={sub.path}
                                            className={({ isActive }) => `
                                                block p-2 text-sm rounded-lg transition-all
                                                ${isActive
                                                    ? 'text-blue-600 font-bold bg-blue-50/50'
                                                    : 'text-slate-500 hover:text-blue-600 hover:bg-slate-50'}
                                            `}
                                        >
                                            {sub.label}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* User Section / Bottom */}
                <div className="p-4 border-t border-slate-100">
                    <button className="flex items-center w-full p-3 rounded-xl text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all group">
                        <LogOut size={22} className={`${isOpen ? 'mr-3' : 'mx-auto'}`} />
                        {isOpen && <span className="font-medium">Logout</span>}
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
