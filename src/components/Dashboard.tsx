import React from 'react';
import { Signal, Battery, Wifi } from 'lucide-react';

const Dashboard = () => {
  return (
    <main className="pl-20 p-8">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            WhisperEcho
          </h1>
          <p className="text-slate-400 mt-2">Mesh Communication System</p>
        </div>
        <div className="flex items-center space-x-6">
          <StatusIndicator icon={<Signal size={18} />} label="Network" value="Active" positive />
          <StatusIndicator icon={<Battery size={18} />} label="Battery" value="85%" positive />
          <StatusIndicator icon={<Wifi size={18} />} label="Nodes" value="6 Connected" positive />
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50">
          <h2 className="text-xl font-semibold mb-4">Network Activity</h2>
          <div className="h-[400px] flex items-center justify-center text-slate-400">
            Network visualization will be implemented here
          </div>
        </div>

        <div className="col-span-4 space-y-6">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50">
            <h2 className="text-xl font-semibold mb-4">Active Nodes</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((node) => (
                <div key={node} className="flex items-center space-x-4 p-3 rounded-lg bg-slate-700/30">
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <div>
                    <p className="font-medium">Node {node}</p>
                    <p className="text-sm text-slate-400">Last active: 2m ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50">
            <h2 className="text-xl font-semibold mb-4">System Status</h2>
            <div className="space-y-3">
              <StatusBar label="Signal Strength" value={85} />
              <StatusBar label="Battery Level" value={75} />
              <StatusBar label="Storage" value={45} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const StatusIndicator = ({ icon, label, value, positive = true }) => (
  <div className="flex items-center space-x-3">
    <div className={`p-2 rounded-lg ${positive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
      {icon}
    </div>
    <div>
      <p className="text-sm text-slate-400">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

const StatusBar = ({ label, value }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-slate-400">{label}</span>
      <span className="font-medium">{value}%</span>
    </div>
    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

export default Dashboard;