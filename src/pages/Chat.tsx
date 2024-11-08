import React, { useState } from 'react';
import { Send, PlusCircle, Smile, Paperclip } from 'lucide-react';
import ChatSidebar from '../components/chat/ChatSidebar';
import MessageList from '../components/chat/MessageList';

const Chat = () => {
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message sending
      setMessage('');
    }
  };

  return (
    <div className="h-screen flex">
      <ChatSidebar />
      <main className="flex-1 flex flex-col">
        <div className="p-4 border-b border-slate-700/50 backdrop-blur-md bg-slate-800/30">
          <h2 className="text-lg font-semibold">Team Alpha</h2>
          <p className="text-sm text-slate-400">6 members • 2 online</p>
        </div>

        <MessageList />

        <form onSubmit={handleSend} className="p-4 border-t border-slate-700/50 backdrop-blur-md bg-slate-800/30">
          <div className="flex items-center space-x-4">
            <button type="button" className="text-slate-400 hover:text-slate-200">
              <PlusCircle size={20} />
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="w-full px-4 py-2 bg-slate-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-white placeholder-slate-400"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                <button type="button" className="text-slate-400 hover:text-slate-200">
                  <Smile size={20} />
                </button>
                <button type="button" className="text-slate-400 hover:text-slate-200">
                  <Paperclip size={20} />
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="p-2 bg-emerald-500 rounded-lg text-white hover:bg-emerald-600 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Chat;