import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({ text = "Entrar con Google", onClick }) {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50"
    >
      <FcGoogle size={22} />
      <span className="font-medium text-slate-600">{text}</span>
    </motion.button>
  );
}
