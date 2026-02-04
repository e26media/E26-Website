import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';

const Navbar = ({ toggleSidebar }) => {
    return (
        <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-30 transition-all duration-300">
            <div className="h-full px-4 flex items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center">
                    <button
                        onClick={toggleSidebar}
                        className="lg:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors mr-2"
                    >
                        <Menu size={20} />
                    </button>

                    <div className="hidden md:flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-300 transition-all">
                        <Search size={18} className="text-slate-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search anything..."
                            className="bg-transparent border-none outline-none text-sm w-64 text-slate-600"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-3">
                    <button className="relative p-2 rounded-xl text-slate-500 hover:bg-slate-50 transition-all">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>

                    <div className="h-8 w-px bg-slate-200 mx-2"></div>

                    <button className="flex items-center p-1.5 rounded-xl hover:bg-slate-50 transition-all">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs mr-2">
                            JD
                        </div>
                        <div className="hidden sm:block text-left">
                            <p className="text-xs font-semibold text-slate-900 leading-tight">John Doe</p>
                            <p className="text-[10px] text-slate-500">Super Admin</p>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
