import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white shadow-lg">
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 h-17 w-full">
       
        <div className="logo font-bold text-white text-xl sm:text-2xl">
          <span className="text-blue-100">🔐</span>
          Secure
          <span className="text-blue-100">Vault</span>
        </div>

        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search passwords..." 
            className="bg-blue-500/50 text-white placeholder-blue-100 rounded-lg px-4 py-2 pr-10 w-64 border border-blue-300 focus:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-200/50 transition-all duration-300"
          />
          <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l6-6m-2-5a7 7 0 0114 0 7 7 0 01-14 0z" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
