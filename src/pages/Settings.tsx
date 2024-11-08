import React, { useState } from 'react';
import { Wifi, Radio, Battery, Shield, RefreshCw, Plus, X } from 'lucide-react';

const Settings = () => {
  const [showConnect, setShowConnect] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [devices, setDevices] = useState([
    { id: '1', name: 'MeshNode-A1', type: 'relay', signal: 85, battery: 90 },
    { id: '2', name: 'MeshNode-B2', type: 'endpoint', signal: 72, battery: 65 },
  ]);

  const startScan = () => {
    setScanning(true);
    // Simulate device scanning
    setTimeout(() => {
      setScanning(false);
    }, 3000);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-slate-400 mt-1">Configure your mesh network preferences</p>
        </div>
        <button
          onClick={() => setShowConnect(true)}
          className="px-4 py-2 bg-emerald-500 rounded-lg text-white hover:bg-emerald-600 transition-colors flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Connect Device</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50">
          <h2 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <Radio className="text-emerald-400" size={24} />
            <span>Connected Devices</span>
          </h2>
          
          <div className="space-y-4">
            {devices.map((device) => (
              <div key={device.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <Radio className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">{device.name}</h3>
                    <p className="text-sm text-slate-400">{device.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <StatusIndicator icon={<Wifi size={16} />} value={`${device.signal}%`} />
                  <StatusIndicator icon={<Battery size={16} />} value={`${device.battery}%`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50">
            <h2 className="text-xl font-semibold mb-6 flex items-center space-x-2">
              <Shield className="text-emerald-400" size={24} />
              <span>Network Security</span>
            </h2>
            <div className="space-y-4">
              <SettingToggle
                label="End-to-End Encryption"
                description="Enable encryption for all messages"
                enabled={true}
              />
              <SettingToggle
                label="Auto-Accept Nodes"
                description="Automatically accept new node connections"
                enabled={false}
              />
              <SettingToggle
                label="Emergency Broadcast"
                description="Allow emergency messages from all nodes"
                enabled={true}
              />
            </div>
          </div>
        </div>
      </div>

      {showConnect && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-2xl w-full max-w-md m-4 shadow-xl border border-slate-700/50">
            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Connect New Device</h2>
                <button
                  onClick={() => setShowConnect(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-6">
              <button
                onClick={startScan}
                disabled={scanning}
                className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-600 rounded-lg text-white transition-colors flex items-center justify-center space-x-2"
              >
                <RefreshCw className={`${scanning ? 'animate-spin' : ''}`} size={20} />
                <span>{scanning ? 'Scanning...' : 'Scan for Devices'}</span>
              </button>

              <div className="mt-6 space-y-3">
                <div className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/50 hover:border-emerald-500/50 cursor-pointer transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Radio className="text-emerald-400" size={20} />
                      <div>
                        <h3 className="font-medium">MeshNode-C3</h3>
                        <p className="text-sm text-slate-400">Available</p>
                      </div>
                    </div>
                    <div className="text-sm text-emerald-400">90% Signal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const StatusIndicator = ({ icon, value }) => (
  <div className="flex items-center space-x-2 text-slate-400">
    {icon}
    <span className="text-sm">{value}</span>
  </div>
);

const SettingToggle = ({ label, description, enabled }) => (
  <div className="flex items-center justify-between">
    <div>
      <h3 className="font-medium">{label}</h3>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
    <button
      className={`w-12 h-6 rounded-full transition-colors ${
        enabled ? 'bg-emerald-500' : 'bg-slate-600'
      }`}
    >
      <div
        className={`w-4 h-4 rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-7' : 'translate-x-1'
        }`}
      />
    </button>
  </div>
);

export default Settings;