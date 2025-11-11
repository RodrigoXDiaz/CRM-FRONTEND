import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  UserGroupIcon,
  ChartBarIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

const nav = [
  { to: '/', label: 'Dashboard', icon: HomeIcon },
  { to: '/users', label: 'Usuarios', icon: UserGroupIcon },
  { to: '/reports', label: 'Reportes', icon: ChartBarIcon },
  { to: '/settings', label: 'Configuración', icon: Cog6ToothIcon },
];

export default function Sidebar({ collapsed, onToggle }){
  return (
    <aside className={`bg-white border-r border-gray-100 ${collapsed ? 'w-20' : 'w-64'} transition-all duration-200`}>
      <div className="h-16 flex items-center px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-corporate-900 flex items-center justify-center text-white font-bold">CR</div>
          {!collapsed && <div>
            <div className="text-lg font-semibold">CRM Corp</div>
            <div className="text-sm text-neutral-500">Panel</div>
          </div>}
        </div>
      </div>

      <nav className="mt-6 px-2">
        {nav.map((n) => {
          const Icon = n.icon;
          return (
            <NavLink
              key={n.to}
              to={n.to}
              end
              className={({isActive}) =>
                `flex items-center gap-3 py-2 px-3 rounded-md mb-1 transition-colors ${
                  isActive ? 'bg-corporate-900/10 text-corporate-900 font-medium' : 'text-neutral-700 hover:bg-gray-50'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              {!collapsed && <span>{n.label}</span>}
            </NavLink>
          )
        })}
      </nav>

      <div className="mt-auto p-4">
        <button
          className="w-full py-2 rounded-md bg-corporate-900 text-white hover:bg-corporate-700 transition"
          onClick={onToggle}
        >
          {collapsed ? 'Abrir' : 'Colapsar'}
        </button>
      </div>
    </aside>
  );
}
