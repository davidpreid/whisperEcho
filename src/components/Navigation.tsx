import React, { useState } from 'react';
import { Radio, Users, MessageSquare, Shield, Settings, AlertTriangle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import EmergencyModal from './EmergencyModal';

const Navigation = () => {
  const location = useLocation();
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  
  return (
    <>
      <nav className="fixed top-0 left-0 h-screen w-20 bg-slate-800/50 backdrop-blur-lg border-r border-slate-700/50 flex flex-col items-center py-8 space-y-8">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400">
          <Radio size={24} />
        </div>
        
        <div className="flex flex-col space-y-6 flex-1">
          <NavButton to="/" icon={<MessageSquare size={20} />} active={location.pathname === '/'} />
          <NavButton to="/teams" icon={<Users size={20} />} active={location.pathname === '/teams'} />
          <NavButton to="/security" icon={<Shield size={20} />} active={location.pathname === '/security'} />
          <NavButton to="/settings" icon={<Settings size={20} />} active={location.pathname === '/settings'} />
        </div>

        <button
          onClick={() => setShowEmergencyModal(true)}
          className="w-12 h-12 rounded-xl flex items-center justify-center bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20 transition-all hover:scale-105 animate-pulse"
          title="Emergency Alert"
        >
          <AlertTriangle size={20} />
        </button>
      </nav>

      <EmergencyModal isOpen={showEmergencyModal} onClose={() => setShowEmergencyModal(false)} />
    </>
  );
};

const NavButton = ({ icon, active = false, to }) => (
  <Link 
    to={to}
    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all
      ${active 
        ? 'bg-slate-700/50 text-emerald-400 shadow-lg shadow-emerald-500/10' 
        : 'text-slate-400 hover:bg-slate-700/30 hover:text-slate-200'}`}
  >
    {icon}
  </Link>
);

export default Navigation;