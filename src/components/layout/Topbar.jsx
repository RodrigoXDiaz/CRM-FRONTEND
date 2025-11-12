import React from "react";
import { Bell, Menu, Search, UserCircle } from "lucide-react";
import logo from "../../assets/speed-logo.jpg";

export default function Topbar({ onToggleSidebar }) {
  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-white/10 bg-white/70 px-6 backdrop-blur-2xl shadow-[0_20px_45px_-30px_rgba(15,23,42,0.65)]">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-200/40 bg-indigo-500/10 text-indigo-600 transition hover:border-indigo-300/70 hover:bg-indigo-500/20"
        >
          <Menu size={20} />
        </button>
        <div className="flex items-center gap-3">
          <div className="hidden h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/90 p-1.5 shadow-[0_16px_38px_-22px_rgba(15,23,42,0.65)] sm:flex">
            <img src={logo} alt="Speed CRM" className="h-full w-full rounded-full object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Panel principal</p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-900">Bienvenido de vuelta</h2>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-2.5 text-sm text-slate-500 shadow-sm transition focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100 md:flex">
          <Search size={18} className="text-slate-400" />
          <input
            type="search"
            placeholder="Buscar en Speed CRM"
            className="w-56 bg-transparent text-sm text-slate-600 outline-none placeholder:text-slate-400"
          />
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/40 bg-white/70 text-slate-500 transition hover:border-indigo-200 hover:bg-indigo-500/15 hover:text-indigo-600"
        >
          <Bell size={20} />
        </button>

        <button
          type="button"
          className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 px-3 py-2 text-slate-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-500/10 hover:text-indigo-600"
        >
          <UserCircle size={26} />
          <span className="hidden text-sm font-medium sm:inline">Mi cuenta</span>
        </button>
      </div>
    </header>
  );
}
