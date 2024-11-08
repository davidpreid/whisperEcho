import React from 'react';
import { Plus, Users } from 'lucide-react';

const Teams = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Teams</h1>
          <p className="text-slate-400 mt-1">Manage your mesh communication groups</p>
        </div>
        <button className="px-4 py-2 bg-emerald-500 rounded-lg text-white hover:bg-emerald-600 transition-colors flex items-center space-x-2">
          <Plus size={20} />
          <span>Create Team</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'Team Alpha', members: 6, active: true },
          { name: 'Support Team', members: 4, active: true },
          { name: 'Project Beta', members: 5, active: true },
          { name: 'Emergency Response', members: 8, active: false },
        ].map((team) => (
          <div key={team.name} className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center font-bold text-white text-xl">
                {team.name.charAt(0)}
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                team.active ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-600/20 text-slate-400'
              }`}>
                {team.active ? 'Active' : 'Inactive'}
              </span>
            </div>
            <h3 className="text-xl font-semibold mt-4">{team.name}</h3>
            <div className="flex items-center space-x-2 mt-2 text-slate-400">
              <Users size={16} />
              <span className="text-sm">{team.members} members</span>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700/50">
              <button className="w-full py-2 text-center text-emerald-400 hover:text-emerald-300 transition-colors">
                Manage Team
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;