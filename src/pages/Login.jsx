import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AuthCard from "../components/AuthCard";
import AnimatedInput from "../components/ui/AnimatedInput";
import GoogleButton from "../components/ui/GoogleButton";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (event) =>
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.email || !form.password) {
      setError("Por favor completa todos los campos");
      return;
    }

    login(form.email, form.password);
    navigate("/");
  };

  const handleGoogleLogin = () => {
    alert("🔗 Próximamente: Login con Google (backend)");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950/90 px-4 py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.18),_transparent_60%)]" />

      <AuthCard
        title="Bienvenido a Speed CRM"
        subtitle="Inicia sesión para acceder a tu panel personalizado"
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <AnimatedInput
            label="Correo electrónico"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ejemplo@empresa.com"
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

          {error && <p className="text-center text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-15px_rgba(37,99,235,0.65)] transition hover:shadow-[0_18px_50px_-12px_rgba(37,99,235,0.55)]"
          >
            Iniciar sesión
          </button>

          <GoogleButton text="Entrar con Google" onClick={handleGoogleLogin} />
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="font-semibold text-indigo-600 hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </AuthCard>
    </div>
  );
}
