import React from "react";
import { Settings as SettingsIcon, Shield, Bell, Globe, Palette } from "lucide-react";

const toggles = [
  { label: "Notificaciones push", detail: "Actualizaciones inmediatas de tickets y ventas" },
  { label: "Resúmenes semanales", detail: "Reporte consolidado los lunes a primera hora" },
  { label: "Recordatorios automáticos", detail: "Alertas de oportunidades con más de 3 días sin contacto" },
];

export default function Settings() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 rounded-3xl border border-white/15 bg-white/85 px-8 py-8 shadow-[0_28px_65px_-45px_rgba(15,23,42,0.55)] backdrop-blur-xl md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Configuración general</h1>
          <p className="mt-1 text-sm text-slate-500">
            Personaliza tu experiencia, seguridad y preferencias globales de Speed CRM.
          </p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 rounded-2xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_35px_-20px_rgba(37,99,235,0.7)] transition hover:bg-indigo-500/95"
        >
          <SettingsIcon size={18} />
          Guardar cambios
        </button>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-3xl border border-white/15 bg-white/85 p-6 shadow-[0_28px_65px_-45px_rgba(15,23,42,0.5)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600">
                <Globe size={22} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Preferencias de la organización</h2>
                <p className="text-sm text-slate-500">Actualiza la información corporativa y zona horaria</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-wide text-slate-400">Nombre de la empresa</label>
                <input
                  type="text"
                  defaultValue="Speed CRM Latam"
                  className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-wide text-slate-400">Zona horaria</label>
                <select className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100">
                  <option>GMT-5 Ciudad de México</option>
                  <option>GMT-3 Buenos Aires</option>
                  <option>GMT-4 Santiago</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-wide text-slate-400">Moneda principal</label>
                <select className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100">
                  <option>USD - Dólar estadounidense</option>
                  <option>MXN - Peso mexicano</option>
                  <option>COP - Peso colombiano</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-wide text-slate-400">Correo de notificaciones</label>
                <input
                  type="email"
                  defaultValue="alerts@speedcrm.com"
                  className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/85 p-6 shadow-[0_28px_65px_-45px_rgba(15,23,42,0.5)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
                <Shield size={22} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Seguridad y accesos</h2>
                <p className="text-sm text-slate-500">Define políticas y duraciones para sesiones activas</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-wide text-slate-400">Expiración de sesión</label>
                <select className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-100">
                  <option>24 horas</option>
                  <option>12 horas</option>
                  <option>7 días</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-wide text-slate-400">Autenticación de dos factores</label>
                <select className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-100">
                  <option>Requerida para administradores</option>
                  <option>Opcional</option>
                  <option>Desactivada</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-medium uppercase tracking-wide text-slate-400">IPs permitidas</label>
                <textarea
                  rows={3}
                  defaultValue={"189.234.34.12\n189.234.34.13"}
                  className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                />
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6 rounded-3xl border border-white/15 bg-white/80 p-6 shadow-[0_28px_65px_-45px_rgba(15,23,42,0.5)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
              <Bell size={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Alertas y notificaciones</h2>
              <p className="text-sm text-slate-500">Configura cómo y cuándo avisamos a tu equipo</p>
            </div>
          </div>

          <div className="space-y-4">
            {toggles.map(({ label, detail }) => (
              <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/85 px-4 py-3 text-sm shadow-sm">
                <div className="pr-4">
                  <p className="font-medium text-slate-800">{label}</p>
                  <p className="text-xs text-slate-500">{detail}</p>
                </div>
                <button
                  type="button"
                  className="relative h-6 w-11 rounded-full bg-indigo-500/25 transition"
                >
                  <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow" />
                </button>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white/85 p-4 text-sm text-slate-600 shadow-sm">
            <p className="font-semibold text-slate-900">Tema visual</p>
            <p className="mt-1 flex items-center gap-2 text-xs text-slate-500">
              <Palette size={16} className="text-indigo-500" />
              Próximamente podrás personalizar colores y tipografías
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
