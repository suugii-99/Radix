// src/components/Table.jsx
import React from 'react';

const Table = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Senaste transaktioner</h3>
      <table className="table">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Namn</th>
            <th className="p-2 text-left">Belopp</th>
            <th className="p-2 text-left">Datum</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-2">Anna Svensson</td>
            <td className="p-2">5 000 SEK</td>
            <td className="p-2">2025-02-27</td>
          </tr>
          <tr className="border-t">
            <td className="p-2">Erik Karlsson</td>
            <td className="p-2">3 200 SEK</td>
            <td className="p-2">2025-02-26</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
