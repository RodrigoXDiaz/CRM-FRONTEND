import React from "react";
import { ShieldCheck, Users as UsersIcon, Briefcase, Headset, CheckCircle2, Clock } from "lucide-react";

const personas = [
  {
    title: "Administradores",
    description: "Control total de la plataforma, permisos y seguridad.",
    total: 6,
    icon: ShieldCheck,
    badge: "Seguridad",
  },
  {
    title: "Supervisores",
    description: "Supervisan desempeño y realizan aprobaciones.",
    total: 12,
    icon: Briefcase,
    badge: "Coaching",
  },
  {
    title: "Agentes",
    description: "Gestionan clientes, tickets y tareas diarias.",
    total: 48,
    icon: UsersIcon,
    badge: "Actividad",
  },
  {
    title: "Soporte",
    description: "Atención a clientes y resolución de incidencias.",
    total: 17,
    icon: Headset,
    badge: "SLA 94%",
  },
];

const roster = [
  { name: "Daniela Cortés", role: "Administrador", lastLogin: "Hoy • 09:15", status: "En línea" },
  { name: "Mauricio Vera", role: "Supervisor", lastLogin: "Ayer • 19:40", status: "Activo" },
  { name: "Ana Valera", role: "Agente", lastLogin: "Hoy • 08:55", status: "En seguimiento" },
  { name: "Cristina Ruiz", role: "Soporte", lastLogin: "Hace 3 h", status: "En llamada" },
  { name: "Lucía Fernández", role: "Agente", lastLogin: "Hace 1 h", status: "Activo" },
];

export default function Users() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-3 rounded-3xl border border-white/15 bg-white/80 px-8 py-8 shadow-[0_28px_65px_-45px_rgba(15,23,42,0.55)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Gestión de usuarios</h1>
          <p className="mt-1 text-sm text-slate-500">
            Administra roles, acceso y seguimiento de actividad en tiempo real.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-2xl bg-indigo-500/10 px-4 py-2 text-xs font-medium text-indigo-600">
          <CheckCircle2 size={16} />
          98% de usuarios activos este mes
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {personas.map(({ title, description, total, icon: Icon, badge }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/75 p-6 shadow-[0_28px_65px_-45px_rgba(15,23,42,0.5)] backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">{badge}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500">
                <Icon size={22} />
              </div>
            </div>
            <p className="relative mt-3 text-sm text-slate-500">{description}</p>
            <p className="mt-5 text-3xl font-semibold text-slate-900">{total}</p>
            <p className="text-xs text-slate-500">Usuarios totales en este rol</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 overflow-hidden rounded-3xl border border-white/15 bg-white/80 shadow-[0_28px_65px_-45px_rgba(15,23,42,0.5)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/20 px-6 py-5">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Actividad del equipo</h2>
              <p className="text-sm text-slate-500">Últimos accesos y estado actual</p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              Actualizado hace 2 min
            </span>
          </div>

          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50/60 text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-6 py-4">Nombre</th>
                <th className="px-6 py-4">Rol</th>
                <th className="px-6 py-4">Último acceso</th>
                <th className="px-6 py-4">Estado</th>
              </tr>
            </thead>
            <tbody>
              {roster.map(({ name, role, lastLogin, status }) => (
                <tr key={name} className="border-t border-slate-100/70">
                  <td className="px-6 py-4 font-medium text-slate-900">{name}</td>
                  <td className="px-6 py-4">{role}</td>
                  <td className="px-6 py-4 text-slate-500">{lastLogin}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-medium ${
                        status === "En línea"
                          ? "bg-emerald-500/10 text-emerald-600"
                          : status === "En llamada"
                          ? "bg-amber-500/10 text-amber-600"
                          : status === "En seguimiento"
                          ? "bg-indigo-500/10 text-indigo-600"
                          : "bg-slate-200/60 text-slate-600"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-6 rounded-3xl border border-white/15 bg-white/75 p-6 shadow-[0_28px_65px_-45px_rgba(15,23,42,0.5)] backdrop-blur-xl">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Indicadores clave</h2>
            <p className="text-sm text-slate-500">Supervisa la salud del equipo</p>
          </div>

          <div className="space-y-4 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/80 px-4 py-3 shadow-sm">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">Tiempo de onboarding</p>
                <p className="text-base font-semibold text-slate-900">3.2 días</p>
              </div>
              <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">-14%</div>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/80 px-4 py-3 shadow-sm">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">Usuarios inactivos</p>
                <p className="text-base font-semibold text-slate-900">4 cuentas</p>
              </div>
              <div className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600">Atención</div>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/80 px-4 py-3 shadow-sm">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">Satisfacción del equipo</p>
                <p className="text-base font-semibold text-slate-900">9.3 / 10</p>
              </div>
              <div className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-600">Top</div>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-white/20 bg-indigo-500/10 px-4 py-3 text-xs text-indigo-600">
            <Clock size={16} />
            Próxima auditoría de accesos en 4 días
          </div>
        </div>
      </section>
    </div>
  );
}
