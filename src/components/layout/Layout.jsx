import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed((prev) => !prev);

  return (
    <div className="relative flex min-h-screen bg-slate-950/5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(45,212,191,0.12),transparent_60%)]" />

      <Sidebar collapsed={collapsed} onToggle={toggleSidebar} />

      <div className="relative z-10 flex flex-1 flex-col">
        <Topbar onToggleSidebar={toggleSidebar} />
        <main className="relative flex-1 overflow-y-auto px-8 pb-10 pt-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
