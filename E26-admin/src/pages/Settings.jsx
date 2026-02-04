import React from 'react';
import { User, Bell, Shield, Smartphone, Globe, Save } from 'lucide-react';

const Settings = () => {
    return (
        <div className="max-w-4xl space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Account Settings</h1>
                <p className="text-sm text-slate-500">Manage your profile, security, and notification preferences.</p>
            </div>

            <div className="space-y-6">
                {/* Profile Section */}
                <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                        <User className="mr-2 text-blue-600" size={20} />
                        Profile Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Full Name</label>
                            <input type="text" defaultValue="John Doe" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-300 outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Email Address</label>
                            <input type="email" defaultValue="john@e26.com" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-300 outline-none transition-all" />
                        </div>
                    </div>
                </section>

                {/* Security Section */}
                <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                        <Shield className="mr-2 text-blue-600" size={20} />
                        Security & Authentication
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <div>
                                <p className="text-sm font-semibold text-slate-900">Two-factor authentication</p>
                                <p className="text-xs text-slate-500">Add an extra layer of security to your account.</p>
                            </div>
                            <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer shadow-inner">
                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-all"></div>
                            </div>
                        </div>
                        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                            Change Password
                        </button>
                    </div>
                </section>

                {/* Buttons */}
                <div className="flex justify-end space-x-3">
                    <button className="px-6 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                        Cancel
                    </button>
                    <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center shadow-md">
                        <Save size={18} className="mr-2" />
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
