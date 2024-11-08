import React from 'react';

const MessageList = () => {
  const messages = [
    { 
      id: 1, 
      user: 'Alice', 
      message: "Hey team, how's the network stability?", 
      time: '10:30 AM', 
      self: false 
    },
    { 
      id: 2, 
      user: 'Bob', 
      message: 'All nodes are running smoothly. No issues reported.', 
      time: '10:32 AM', 
      self: false 
    },
    { 
      id: 3, 
      user: 'You', 
      message: "Great! I've just deployed the latest firmware update.", 
      time: '10:35 AM', 
      self: true 
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.self ? 'justify-end' : 'justify-start'}`}
        >
          <div className={`max-w-[70%] ${msg.self ? 'order-2' : 'order-1'}`}>
            {!msg.self && (
              <span className="text-sm text-slate-400 ml-12">{msg.user}</span>
            )}
            <div className="flex items-end space-x-2">
              {!msg.self && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center font-bold text-white text-sm">
                  {msg.user.charAt(0)}
                </div>
              )}
              <div
                className={`rounded-2xl p-3 ${
                  msg.self
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-700/50 backdrop-blur-sm'
                }`}
              >
                <p>{msg.message}</p>
                <span className={`text-xs ${msg.self ? 'text-emerald-100' : 'text-slate-400'} mt-1 block`}>
                  {msg.time}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;