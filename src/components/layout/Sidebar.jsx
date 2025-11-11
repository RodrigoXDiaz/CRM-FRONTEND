import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Usuarios", icon: Users, path: "/users" },
  { name: "Reportes", icon: BarChart3, path: "/reports" },
  { name: "Configuración", icon: Settings, path: "/settings" },
];

export default function Sidebar({ collapsed, onToggle }) {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 92 : 292 }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      className="relative z-20 hidden shrink-0 overflow-hidden border-r border-white/10 bg-[#0b1120]/90 shadow-[0_22px_55px_-25px_rgba(15,23,42,0.65)] backdrop-blur-xl md:flex"
    >
      <div className="flex h-full w-full flex-col">
        <div className="relative flex items-center justify-between px-5 pb-8 pt-7">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-500 to-sky-400 text-base font-semibold text-white shadow-[0_16px_30px_-15px_rgba(59,130,246,0.75)]">
              SC
            </div>
            <AnimatePresence initial={false}>
              {!collapsed && (
                <motion.div
                  key="branding"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  className="tracking-tight"
                >
                  <p className="flex items-center gap-2 text-xs uppercase text-slate-400">
                    <Sparkles size={14} className="text-sky-300" />
                    Speed CRM
                  </p>
                  <h1 className="mt-1 text-xl font-semibold text-white">Speed CRM</h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={onToggle}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-indigo-300/50 hover:text-white"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3">
          {menuItems.map(({ name, icon: Icon, path }) => (
            <NavLink
              key={name}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `group relative flex items-center gap-3 rounded-2xl border border-transparent px-3 py-3 text-sm font-medium transition ${
                  isActive
                    ? "active bg-indigo-500/15 text-white hover:bg-indigo-500/20"
                    : "text-slate-400 hover:border-white/10 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <Icon size={20} className="shrink-0" />
              <AnimatePresence initial={false}>
                {!collapsed && (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    className="truncate"
                  >
                    {name}
                  </motion.span>
                )}
              </AnimatePresence>

              {collapsed && (
                <span className="absolute right-2 h-1.5 w-1.5 rounded-full bg-indigo-400 opacity-0 transition group-[&.active]:opacity-100" />
              )}
            </NavLink>
          ))}
        </nav>

        <div className="px-4 pb-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/80 text-sm font-semibold">{user?.email?.[0]?.toUpperCase() || "U"}</div>
              <AnimatePresence initial={false}>
                {!collapsed && (
                  <motion.div
                    key="user-card"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -6 }}
                    className="space-y-0.5"
                  >
                    <p className="text-xs uppercase tracking-wide text-indigo-200/80">
                      Sesión activa
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {user?.email || "usuario@speedcrm.com"}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-200 transition hover:border-red-300/70 hover:bg-red-500/20 ${
                collapsed ? "px-2 py-2" : ""
              }`}
            >
              <LogOut size={16} />
              {!collapsed && <span>Cerrar sesión</span>}
            </button>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
