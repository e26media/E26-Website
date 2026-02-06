import React, { useState } from 'react';
import { Plus, Search, Filter, Mail, Phone, ExternalLink } from 'lucide-react';

const Clients = () => {
    const [clients, setClients] = useState([
        { id: 1, name: 'Google Cloud Labs', contact: 'Mark Spencer', email: 'mark@google.com', phone: '+1 234 567 890', projects: 3, status: 'Active' },
        { id: 2, name: 'Tech Mahindra', contact: 'Sarah J.', email: 'sarah@techm.com', phone: '+91 98765 43210', projects: 1, status: 'Onboarding' },
        { id: 3, name: 'Vertex Solutions', contact: 'John Doe', email: 'john@vertex.io', phone: '+44 123 456 789', projects: 5, status: 'Active' },
    ]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Client Management</h1>
                    <p className="text-sm text-slate-500">Track company partnerships and B2B clients.</p>
                </div>
                <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-sm">
                    <Plus size={18} className="mr-2" />
                    New Client
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clients.map((client) => (
                    <div key={client.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 font-bold group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-all">
                                {client.name[0]}
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${client.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'
                                }`}>
                                {client.status}
                            </span>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mb-1">{client.name}</h3>
                        <p className="text-sm text-slate-500 mb-4 flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2"></span>
                            {client.contact}
                        </p>

                        <div className="space-y-2 border-t border-slate-50 pt-4">
                            <div className="flex items-center text-xs text-slate-500">
                                <Mail size={14} className="mr-2" />
                                {client.email}
                            </div>
                            <div className="flex items-center text-xs text-slate-500">
                                <Phone size={14} className="mr-2" />
                                {client.phone}
                            </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <span className="text-xs font-medium text-slate-400">{client.projects} Active Projects</span>
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                <ExternalLink size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clients;
