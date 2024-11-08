import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Chat from './pages/Chat';
import Teams from './pages/Teams';
import Security from './pages/Security';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <Navigation />
        <div className="pl-20">
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/security" element={<Security />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;