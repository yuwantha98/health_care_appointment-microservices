import React from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import DashboardOverview from '../components/Admin/DashboardOverview';
import UsersManager from '../components/Admin/UsersManager';
import DoctorVerification from '../components/Admin/DoctorVerification';

export default function AdminPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    const navItems = [
        { name: 'Dashboard', path: '/admin', exact: true },
        { name: 'Users', path: '/admin/users' },
        { name: 'Verifications', path: '/admin/verifications' }
    ];

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <div className="w-64 bg-gray-900 text-white flex flex-col shadow-2xl">
                <div className="h-20 flex items-center justify-center border-b border-gray-800">
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                        Admin Portal
                    </h1>
                </div>
                
                <nav className="flex-1 mt-6 px-4 space-y-2">
                    {navItems.map(item => {
                        const active = item.exact 
                            ? location.pathname === item.path 
                            : location.pathname.startsWith(item.path);

                        return (
                            <Link 
                                key={item.name} 
                                to={item.path}
                                className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                                    active 
                                    ? 'bg-blue-600 text-white shadow-lg' 
                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                }`}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>

                <div className="p-4 border-t border-gray-800">
                    <button 
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-600/10 text-red-500 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        <span>Logout</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="h-20 bg-white shadow-sm flex items-center justify-between px-8">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {navItems.find(i => (i.exact ? location.pathname === i.path : location.pathname.startsWith(i.path)))?.name || 'Admin'}
                    </h2>
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border border-blue-200">
                            A
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
                    <Routes>
                        <Route path="/" element={<DashboardOverview />} />
                        <Route path="/users" element={<UsersManager />} />
                        <Route path="/verifications" element={<DoctorVerification />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}