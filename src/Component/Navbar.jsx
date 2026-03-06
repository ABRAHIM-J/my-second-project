import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-base-100 shadow-sm px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
       
        <a className="btn btn-ghost text-xl">CS — Ticket System</a>
               
       
        <div className="hidden md:flex items-center gap-4">
          <a href="" className="hover:text-indigo-500">Home</a>
          <a href="" className="hover:text-indigo-500">FAQ</a>
          <a href="" className="hover:text-indigo-500">Changelog</a>
          <a href="" className="hover:text-indigo-500">Blog</a>
          <a href="" className="hover:text-indigo-500">Download</a>
          <a href="" className="hover:text-indigo-500">Contact</a>
          <button className="bg-gradient-to-r from-[#422AD5] to-indigo-200 text-white px-4 py-2 rounded-lg">
            + New Ticket
          </button>
        </div>

        
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-2">
          <a href="" className="block py-2 px-2 rounded hover:bg-gray-200">Home</a>
          <a href="" className="block py-2 px-2 rounded hover:bg-gray-200">FAQ</a>
          <a href="" className="block py-2 px-2 rounded hover:bg-gray-200">Changelog</a>
          <a href="" className="block py-2 px-2 rounded hover:bg-gray-200">Blog</a>
          <a href="" className="block py-2 px-2 rounded hover:bg-gray-200">Download</a>
          <a href="" className="block py-2 px-2 rounded hover:bg-gray-200">Contact</a>
          <button className="w-full bg-gradient-to-r from-[#422AD5] to-indigo-200 text-white px-4 py-2 rounded-lg">
            + New Ticket
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;