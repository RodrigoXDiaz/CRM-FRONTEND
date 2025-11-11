import React from 'react';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Topbar({ onToggleSidebar }){
  return (
    <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={onToggleSidebar} className="p-2 rounded-md hover:bg-gray-50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="relative">
          <input
            className="pl-10 pr-4 py-2 rounded-md border border-gray-100 focus:outline-none focus:ring-1 focus:ring-corporate-900"
            placeholder="Buscar usuarios, reportes..."
            aria-label="Buscar"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2">
            <MagnifyingGlassIcon className="w-5 h-5 text-neutral-400" />
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md hover:bg-gray-50">
          <BellIcon className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-sm font-medium">Rodrigo D.</div>
            <div className="text-xs text-neutral-500">Admin</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-corporate-900 to-corporate-700 text-white flex items-center justify-center font-semibold">RD</div>
        </div>
      </div>
    </header>
  );
}
