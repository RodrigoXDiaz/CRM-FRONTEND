// src/components/AuthCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AuthCard({ children, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md mx-auto"
      style={{ border: "1px solid rgba(15,76,129,0.06)" }}
    >
      <div className="mb-6 text-center">
        <div className="w-16 h-16 rounded-lg mx-auto flex items-center justify-center bg-gradient-to-br from-corporate-900 to-corporate-700 text-white font-bold text-lg">
          CR
        </div>
        <h2 className="text-2xl font-semibold text-neutral-900 mt-4">{title}</h2>
        {subtitle && <p className="text-sm text-neutral-500 mt-1">{subtitle}</p>}
      </div>

      <div>{children}</div>
    </motion.div>
  );
}
