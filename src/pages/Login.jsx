// src/pages/Login.jsx
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Por favor complete todos los campos");
      return;
    }
    login(form.email, form.password); // lógica del AuthContext
    navigate("/");
  };

  const handleGoogleLogin = () => {
    alert("🔗 Próximamente: Login con Google (backend)");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 justify-center items-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Bienvenido al CRM
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Inicia sesión para continuar
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-600 mb-2">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="ejemplo@empresa.com"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Contraseña</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-center text-red-500 text-sm">{error}</p>
          )}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-all"
          >
            Iniciar sesión
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition-all"
          >
            <FaGoogle className="text-red-500" />
            <span>Iniciar sesión con Google</span>
          </motion.button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          ¿No tienes cuenta?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Regístrate
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
