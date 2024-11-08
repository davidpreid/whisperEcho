import React from 'react';
import { Search, Plus } from 'lucide-react';

const ChatSidebar = () => {
  const teams = [
    { id: 1, name: 'Team Alpha', lastMessage: 'Latest deployment status?', time: '2m', unread: 3 },
    { id: 2, name: 'Support Team', lastMessage: 'Node 3 is offline', time: '5m' },
    { id: 3, name: 'Project Beta', lastMessage: 'Great work everyone!', time: '1h' },
  ];

  return (
    <div className="w-80 border-r border-slate-700/50 backdrop-blur-md bg-slate-800/30">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Chats</h2>
          <button className="p-2 hover:bg-slate-700/50 rounded-lg text-slate-400 hover:text-white transition-colors">
            <Plus size={20} />
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search teams..."
            className="w-full px-4 py-2 pl-10 bg-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-white placeholder-slate-400"
          />
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      <div className="space-y-1 px-2">
        {teams.map((team) => (
          <button
            key={team.id}
            className="w-full p-3 flex items-center space-x-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center font-bold text-white">
              {team.name.charAt(0)}
            </div>
            <div className="flex-1 text-left">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold group-hover:text-white">{team.name}</h3>
                <span className="text-xs text-slate-400">{team.time}</span>
              </div>
              <p className="text-sm text-slate-400 truncate">{team.lastMessage}</p>
            </div>
            {team.unread && (
              <span className="w-5 h-5 rounded-full bg-emerald-500 text-xs flex items-center justify-center text-white">
                {team.unread}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;