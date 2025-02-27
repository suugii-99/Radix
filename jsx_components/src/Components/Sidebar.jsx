// src/components/Sidebar.jsx
import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold">Min Dashboard</h2>
      <nav className="mt-4">
        <ul>
          <li className="py-2">
            <Popover>
              <PopoverTrigger asChild>
                <div className="cursor-pointer bg-gray-700 hover:bg-gray-600 transition-colors p-2 rounded flex items-center">
                  <span>Öppna Popover</span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="bg-white text-black p-2 rounded shadow-md max-w-xs" sideOffset={5}>
                <p className="text-sm">Detta är en komprimerad popover!</p>
                <div className="flex justify-end mt-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors">
                    OK
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
