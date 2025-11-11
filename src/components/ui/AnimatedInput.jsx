import React from "react";
import { motion } from "framer-motion";

export default function AnimatedInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete = "off",
}) {
  return (
    <motion.div
      className="mb-5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-slate-500">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-slate-700 shadow-sm transition focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
      />
    </motion.div>
  );
}
