import React from "react";
import {
  Users,
  BarChart3,
  TrendingUp,
  Target,
  Clock,
  Activity,
} from "lucide-react";

const highlightCards = [
  {
    title: "Usuarios activos",
    value: "1,245",
    trend: "+18%",
    subtitle: "vs. mes anterior",
    icon: Users,
    gradient: "from-indigo-500/25 via-blue-500/20 to-sky-400/20",
  },
  {
    title: "Ingresos mensuales",
    value: "$52,430",
    trend: "+12%",
    subtitle: "objetivo alcanzado",
    icon: BarChart3,
    gradient: "from-emerald-400/25 via-teal-400/20 to-sky-400/15",
  },
  {
    title: "Tickets resueltos",
    value: "312",
    trend: "-6%",
    subtitle: "respecto a la semana pasada",
    icon: Activity,
    gradient: "from-amber-400/30 via-orange-400/20 to-pink-400/20",
  },
];

const activityTimeline = [
  {
    time: "09:20",
    title: "Reunión de ventas",
    description: "Resumen semanal con el equipo de México",
    status: "En curso",
  },
  {
    time: "11:45",
    title: "Seguimiento VIP",
    description: "Actualización del pipeline Enterprise",
    status: "Pendiente",
  },
  {
    time: "15:10",
    title: "Cierre del día",
    description: "Auditar tickets de soporte y SLA",
    status: "Programado",
  },
];

const quarterlyGoals = [
  { label: "Retención de clientes", progress: 78, color: "bg-indigo-500" },
  { label: "Nuevas oportunidades", progress: 64, color: "bg-emerald-500" },
  { label: "Satisfacción NPS", progress: 92, color: "bg-sky-500" },
];

const productivity = [
  { title: "Tiempo medio de respuesta", value: "2.5 h", helper: "Meta 3 h", icon: Clock },
  { title: "Conversiones del mes", value: "38%", helper: "+6 puntos", icon: TrendingUp },
  { title: "Objetivo del trimestre", value: "68%", helper: "En progreso", icon: Target },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500 px-10 py-12 text-white shadow-[0_40px_90px_-45px_rgba(37,99,235,0.85)]">
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">Resumen ejecutivo</p>
            <h1 className="text-3xl font-semibold leading-tight lg:text-4xl">
              Todo tu rendimiento en Speed CRM en un solo vistazo
            </h1>
            <p className="text-sm text-white/80">
              Revisa cómo evolucionan tus equipos, oportunidades y atención al cliente dentro de Speed CRM. Los datos se actualizan en tiempo real.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {highlightCards.map(({ title, value, trend, subtitle, icon: Icon, gradient }) => (
              <div
                key={title}
                className={`flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/15 p-4 backdrop-blur-xl shadow-lg`}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/60">{title}</p>
                  <p className="text-2xl font-semibold text-white">{value}</p>
                </div>
                <p className="text-xs text-white/70">
                  {trend}
                  <span className="ml-2 text-white/60">{subtitle}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="grid gap-6 lg:col-span-2">
          <div className="grid gap-6 sm:grid-cols-2">
            {productivity.map(({ title, value, helper, icon: Icon }) => (
              <div
                key={title}
                className="rounded-3xl border border-white/15 bg-white/70 p-6 shadow-[0_28px_65px_-45px_rgba(15,23,42,0.6)] backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">{title}</p>
                    <p className="mt-2 text-3xl font-semibold text-slate-900">{value}</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500">
                    <Icon size={20} />
                  </div>
                </div>
                <p className="mt-5 text-xs text-slate-500">{helper}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/75 p-6 shadow-[0_28px_65px_-45px_rgba(15,23,42,0.55)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Pipeline comercial</h2>
                <p className="text-sm text-slate-500">Desglose de oportunidades por etapa</p>
              </div>
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-600">
                Actualizado hace 5 min
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {["Prospección", "Negociación", "Cierre"].map((stage, index) => (
                <div key={stage} className="space-y-3 rounded-2xl border border-slate-100/80 bg-white/80 p-4 text-slate-700 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-slate-400">{stage}</p>
                  <p className="text-3xl font-semibold text-slate-800">{["63", "28", "15"][index]}</p>
                  <div className="h-2 w-full rounded-full bg-slate-200">
                    <div
                      className={`h-full rounded-full ${["bg-indigo-500", "bg-amber-400", "bg-emerald-500"][index]}`}
                      style={{ width: `${[68, 42, 86][index]}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-500">{["En contacto", "Propuestas enviadas", "Firmas esperadas"][index]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="h-full rounded-3xl border border-white/15 bg-white/80 p-6 shadow-[0_28px_65px_-45px_rgba(15,23,42,0.55)] backdrop-blur-xl">
            <h2 className="text-lg font-semibold text-slate-900">Agenda del día</h2>
            <p className="text-sm text-slate-500">Tus próximos hitos clave</p>

            <div className="mt-6 space-y-5">
              {activityTimeline.map(({ time, title, description, status }) => (
                <div key={title} className="relative rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm">
                  <span className="absolute -left-3 top-5 h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  <p className="text-xs uppercase tracking-wide text-slate-400">{time}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{title}</p>
                  <p className="text-xs text-slate-500">{description}</p>
                  <span className="mt-3 inline-flex rounded-full bg-indigo-500/10 px-3 py-1 text-[11px] font-medium text-indigo-600">
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/15 bg-white/75 p-6 shadow-[0_28px_65px_-45px_rgba(15,23,42,0.5)] backdrop-blur-xl">
          <h2 className="text-lg font-semibold text-slate-900">Objetivos trimestrales</h2>
          <p className="text-sm text-slate-500">Monitorea el pulso de tus indicadores clave</p>
          <div className="mt-6 space-y-5">
            {quarterlyGoals.map(({ label, progress, color }) => (
              <div key={label} className="space-y-2">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>{label}</span>
                  <span className="font-semibold text-slate-900">{progress}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-200">
                  <div className={`h-full rounded-full ${color}`} style={{ width: `${progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 rounded-3xl border border-white/15 bg-white/80 p-6 shadow-[0_28px_65px_-45px_rgba(15,23,42,0.5)] backdrop-blur-xl">
          <h2 className="text-lg font-semibold text-slate-900">Resumen del equipo</h2>
          <p className="text-sm text-slate-500">Actividad reciente y desempeño por célula</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-sm">
                <p className="text-xs uppercase tracking-wide text-slate-400">Equipo {String.fromCharCode(64 + item)}</p>
                <p className="mt-2 text-lg font-semibold text-slate-800">{["Ventas", "Customer Success", "Marketing", "Soporte"][item - 1]}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                  <span>
                    Leads activos
                    <strong className="ml-2 text-slate-800">{[43, 28, 35, 19][item - 1]}</strong>
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-600">
                    {["+12%", "+8%", "+6%", "+14%"][item - 1]} vs. ayer
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
