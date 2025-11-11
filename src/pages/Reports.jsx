import React from "react";
import { BarChart3, PieChart, LineChart, Presentation, Download } from "lucide-react";

const insights = [
  {
    title: "Revenue Forecast",
    value: "$214K",
    delta: "+22%",
    description: "Proyección Q4 basada en ventas cerradas",
    icon: BarChart3,
    accent: "bg-indigo-500/10 text-indigo-600",
  },
  {
    title: "Tasa de conversión",
    value: "38%",
    delta: "+6 pts",
    description: "Embudo comercial consolidado",
    icon: PieChart,
    accent: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "SLA soporte",
    value: "92%",
    delta: "+4%",
    description: "Tickets resueltos en menos de 6h",
    icon: LineChart,
    accent: "bg-sky-500/10 text-sky-600",
  },
];

const scheduledReports = [
  {
    name: "Resumen ejecutivo semanal",
    audience: "Directorio y líderes",
    nextDelivery: "Viernes 09:00",
    format: "PDF + dashboard interactivo",
  },
  {
    name: "Pipeline y forecast comercial",
    audience: "Dirección comercial",
    nextDelivery: "Miércoles 08:30",
    format: "Spreadsheet + métricas clave",
  },
  {
    name: "Soporte & Customer Success",
    audience: "Líderes de soporte",
    nextDelivery: "Diario 18:00",
    format: "Panel dinámico",
  },
];

export default function Reports() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 rounded-3xl border border-white/15 bg-white/85 px-8 py-8 shadow-[0_28px_65px_-45px_rgba(15,23,42,0.55)] backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Centro de reportes</h1>
          <p className="mt-1 text-sm text-slate-500">
            Visualiza métricas clave y comparte análisis accionables con tu equipo.
          </p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 rounded-2xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_35px_-20px_rgba(37,99,235,0.7)] transition hover:bg-indigo-500/90"
        >
          <Download size={18} />
          Exportar último reporte
        </button>
      </header>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {insights.map(({ title, value, delta, description, icon: Icon, accent }) => (
          <div
            key={title}
            className="rounded-3xl border border-white/15 bg-white/75 p-6 shadow-[0_28px_65px_-45px_rgba(15,23,42,0.5)] backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">{title}</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
              </div>
              <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${accent}`}>
                <Icon size={22} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-600">
                {delta}
              </span>
              {description}
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl border border-white/15 bg-white/80 p-6 shadow-[0_28px_65px_-45px_rgba(15,23,42,0.5)] backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Reportes programados</h2>
              <p className="text-sm text-slate-500">Automatiza envíos y mantén a todos informados</p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              6 reportes activos
            </span>
          </div>

          <div className="mt-6 space-y-4">
            {scheduledReports.map(({ name, audience, nextDelivery, format }) => (
              <div
                key={name}
                className="rounded-2xl border border-slate-100 bg-white/85 p-4 shadow-sm"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{name}</p>
                    <p className="text-xs text-slate-500">{audience}</p>
                  </div>
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-[11px] font-medium text-indigo-600">
                    {nextDelivery}
                  </span>
                </div>
                <p className="mt-3 text-xs text-slate-500">Formato: {format}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-3xl border border-white/15 bg-white/78 p-6 shadow-[0_28px_65px_-45px_rgba(15,23,42,0.5)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600">
              <Presentation size={22} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Plantillas inteligentes</h2>
              <p className="text-sm text-slate-500">Personaliza dashboards y presentaciones ejecutivas</p>
            </div>
          </div>

          <ul className="space-y-4 text-sm text-slate-600">
            <li className="rounded-2xl border border-slate-100 bg-white/85 px-4 py-3 shadow-sm">
              • KPI Semanal de ventas con comparativas históricas
            </li>
            <li className="rounded-2xl border border-slate-100 bg-white/85 px-4 py-3 shadow-sm">
              • Tablero de soporte con SLA, NPS y backlog dinámico
            </li>
            <li className="rounded-2xl border border-slate-100 bg-white/85 px-4 py-3 shadow-sm">
              • Reporte de cohortes y crecimiento de clientes
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
