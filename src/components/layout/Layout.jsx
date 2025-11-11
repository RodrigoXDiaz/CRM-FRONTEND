import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import FloatingChat from '../support/FloatingChat';

export default function Layout(){
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex app-container">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div className="flex-1 min-h-screen flex flex-col">
        <Topbar onToggleSidebar={() => setCollapsed(!collapsed)} />
        <main className="p-6">
          <Outlet />
        </main>
      </div>

      {/* Floating support chat (visual) */}
      <FloatingChat />
    </div>
  );
}
