import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full max-w-7xl px-8 flex justify-between items-center relative z-50">
      {/* Left side: Logo and Name */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <span className="text-white font-bold text-xl">R</span>
        </div>
        <span className="text-white font-bold text-xl tracking-tight">Recorder</span>
      </div>

      {/* Right side: Welcome Message */}
      <div className="flex items-center">
        <span className="text-slate-400 font-medium bg-white/5 px-4 py-2 rounded-lg border border-white/10">
          Welcome <span className="text-indigo-400">Guest</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
