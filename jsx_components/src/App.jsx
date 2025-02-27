// src/App.jsx
import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar.jsx';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Table from './components/Table';
import DashboardTabs from './components/Tabs';
import OverviewChart from './components/OverviewChart';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Totala intäkter" value="50 000 SEK" />
          <Card title="Antal användare" value="1 200" />
          <Card title="Nya registreringar" value="150" />
        </div>
        <div className="p-6">
          <DashboardTabs />
          <OverviewChart />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
