// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Kontrollpanel</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Logga ut</button>
    </header>
  );
};

export default Navbar;
