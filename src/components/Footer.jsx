import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 py-10 border-t border-white/5 w-full flex flex-col items-center">
      <p className="text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Recorder. Made by Mahmoud Hussein.
      </p>
    </footer>
  );
};

export default Footer;
