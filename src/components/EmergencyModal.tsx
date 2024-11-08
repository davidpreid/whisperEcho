import React from 'react';
import { AlertTriangle, MapPin, AlertOctagon, X } from 'lucide-react';

const EmergencyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const emergencyActions = [
    {
      icon: <AlertOctagon className="text-red-400" size={24} />,
      title: 'Send SOS Signal',
      description: 'Broadcast emergency SOS to all nearby nodes',
      action: () => {
        // Implement SOS broadcast
        console.log('SOS signal sent');
      }
    },
    {
      icon: <MapPin className="text-red-400" size={24} />,
      title: 'Share Location',
      description: 'Send current GPS coordinates to all team members',
      action: () => {
        // Implement location sharing
        console.log('Location shared');
      }
    },
    {
      icon: <AlertTriangle className="text-red-400" size={24} />,
      title: 'Medical Emergency',
      description: 'Alert team members about a medical situation',
      action: () => {
        // Implement medical alert
        console.log('Medical alert sent');
      }
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-2xl w-full max-w-md m-4 shadow-xl border border-red-500/20">
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <AlertTriangle className="text-red-500" size={24} />
              </div>
              <h2 className="text-xl font-bold text-white">Emergency Actions</h2>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {emergencyActions.map((action, index) => (
            <button
              key={index}
              onClick={() => {
                action.action();
                onClose();
              }}
              className="w-full p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700 transition-colors flex items-center space-x-4 group border border-slate-600/50 hover:border-red-500/50"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 group-hover:bg-red-500/20 flex items-center justify-center transition-colors">
                {action.icon}
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-white">{action.title}</h3>
                <p className="text-sm text-slate-400">{action.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="p-6 border-t border-slate-700 bg-slate-700/20">
          <p className="text-sm text-slate-400 text-center">
            Emergency actions will be broadcasted to all connected nodes in your mesh network
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyModal;