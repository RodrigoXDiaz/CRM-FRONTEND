import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Building2, Headphones, LineChart } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import AnimatedInput from "../components/ui/AnimatedInput";
import GoogleButton from "../components/ui/GoogleButton";
import logo from "../assets/speed-logo.jpg";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const quickMetrics = [
    { id: "sla", title: "Tiempo de respuesta", value: "1.2h", helper: "SLA promedio" },
    { id: "automation", title: "Equipos activos", value: "180+", helper: "Procesos automatizados" },
    { id: "nps", title: "NPS clientes", value: "4.9/5", helper: "Encuesta 2025" },
  ];

  const featureHighlights = [
    {
      id: "insights",
      icon: LineChart,
      title: "Reportes ejecutivos",
      description: "Proyecciones, soporte y crecimiento de ingresos en tableros listos para el comité directivo.",
    },
    {
      id: "success",
      icon: Headphones,
      title: "Éxito dedicado",
      description: "Implementación guiada, sesiones tácticas semanales y soporte bilingüe 24/7.",
    },
    {
      id: "scale",
      icon: Building2,
      title: "Escala global",
      description: "Usuarios ilimitados, dominios personalizados y flujo multiregión en minutos.",
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.email || !form.password) {
      setError("Por favor completa todos los campos");
      return;
    }

    setError("");
    login(form.email, form.password);
    navigate("/");
  };

  const handleGoogleLogin = () => {
    setError("");
    alert("🔗 Próximamente: inicio con Google Workspace.");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950/95 px-4 py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(59,130,246,0.32),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_110%,rgba(14,165,233,0.28),transparent_55%)]" />

      <div className="relative z-10 w-full max-w-6xl overflow-hidden rounded-[36px] border border-white/15 bg-white/85 shadow-[0_42px_120px_-45px_rgba(15,23,42,0.75)] backdrop-blur-2xl">
        <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <aside className="relative hidden overflow-hidden lg:flex">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.18),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(14,165,233,0.2),transparent_65%)]" />

            <div className="relative z-10 flex flex-1 flex-col px-12 py-12 text-white">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/30 bg-white/90 p-1.5 shadow-[0_16px_38px_-20px_rgba(15,23,42,0.65)]">
                    <img src={logo} alt="Speed CRM" className="h-full w-full rounded-xl object-contain" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">Speed CRM</p>
                    <p className="text-sm text-white/75"></p>
                  </div>
                </div>

                <div className="max-w-xl space-y-6">
                  <h1 className="text-[34px] font-semibold leading-tight">
                    Impulsa tus equipos con información accionable en tiempo real.
                  </h1>
                  <p className="text-sm text-white/80">
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {quickMetrics.map(({ id, title, value, helper }) => (
                    <div
                      key={id}
                      className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.55)] backdrop-blur"
                    >
                      <p className="text-xs uppercase tracking-[0.24em] text-white/70">{title}</p>
                      <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
                      <p className="mt-1 text-[11px] text-white/60">{helper}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <div className="grid gap-4 sm:grid-cols-3">
                  {featureHighlights.map(({ id, icon: Icon, title, description }) => (
                    <div
                      key={id}
                      className="flex flex-col rounded-2xl border border-white/12 bg-white/10 p-4 shadow-[0_22px_48px_-30px_rgba(15,23,42,0.55)] backdrop-blur"
                    >
                      <Icon size={20} className="text-sky-200" />
                      <p className="mt-3 text-sm font-semibold text-white">{title}</p>
                      <p className="mt-1 text-xs text-white/70">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <section className="relative bg-white/95 px-8 py-10 sm:px-12">
            <div className="flex w-full flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white/95 p-1.5 shadow-[0_12px_32px_-24px_rgba(15,23,42,0.55)]">
                  <img src={logo} alt="Speed CRM" className="h-full w-full rounded-xl object-contain" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Acceso seguro</p>
                  <h2 className="mt-1 text-2xl font-semibold text-slate-900">Inicia sesión en Speed CRM</h2>
                </div>
              </div>
              <Link to="/register" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700">
                Crear cuenta
              </Link>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              Utiliza tu correo corporativo y contraseña para acceder a tu espacio de trabajo.
              Si necesitas cambiar o recuperar credenciales, contacta a tu administrador.
            </p>

            <div className="mt-6 space-y-4">
              <GoogleButton text="Continuar con Google Workspace" onClick={handleGoogleLogin} />
              <div className="relative flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                <span className="h-px flex-1 bg-slate-200" />
                O con correo
                <span className="h-px flex-1 bg-slate-200" />
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200/70 bg-white/85 px-8 py-8 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.35)]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5">
                  <AnimatedInput
                    label="Correo corporativo"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ejemplo@speedcrm.com"
                    autoComplete="email"
                  />

                  <AnimatedInput
                    label="Contraseña"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />
                </div>

                {error && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-500">
                    {error}
                  </p>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    Recordar sesión
                  </label>
                  <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-700">
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 px-4 py-3.5 text-sm font-semibold text-white shadow-[0_18px_44px_-18px_rgba(37,99,235,0.6)] transition hover:shadow-[0_22px_52px_-20px_rgba(37,99,235,0.55)]"
                >
                  Acceder
                </button>

                <div className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 text-[11px] text-slate-500">
                  Tienes acceso según tu rol asignado. Contacta a tu administrador para gestionar permisos adicionales.
                </div>
              </form>
            </div>

            <p className="mt-10 text-center text-sm text-slate-500">
              ¿No tienes cuenta todavía?{" "}
              <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-700">
                Crear cuenta
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
