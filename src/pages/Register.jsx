import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AuthCard from "../components/AuthCard";
import AnimatedInput from "../components/ui/AnimatedInput";

export default function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");

  const handleChange = (event) =>
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Las contraseñas no coinciden");
      return;
    }

    register(form.name, form.email, form.password);
    navigate("/login");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950/90 px-4 py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.22),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(14,165,233,0.2),_transparent_58%)]" />

      <AuthCard
        title="Crear cuenta"
        subtitle="Diseña tu espacio de trabajo en menos de un minuto"
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <AnimatedInput
            label="Nombre completo"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            autoComplete="name"
          />

          <AnimatedInput
            label="Correo corporativo"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="usuario@empresa.com"
            autoComplete="email"
          />

          <AnimatedInput
            label="Contraseña"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Mínimo 8 caracteres"
            autoComplete="new-password"
          />

          <AnimatedInput
            label="Confirmar contraseña"
            name="confirm"
            type="password"
            value={form.confirm}
            onChange={handleChange}
            placeholder="Repite tu contraseña"
            autoComplete="new-password"
          />

          {error && <p className="text-center text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-15px_rgba(14,165,233,0.6)] transition hover:shadow-[0_18px_52px_-12px_rgba(14,165,233,0.55)]"
          >
            Crear cuenta
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="font-semibold text-indigo-600 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </AuthCard>
    </div>
  );
}
