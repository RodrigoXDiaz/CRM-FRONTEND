import React from "react";
import { motion } from "framer-motion";

export default function AnimatedInput({ label, type, value, onChange }) {
  return (
    <motion.div
      className="mb-5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label className="block text-gray-300 text-sm mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 bg-gray-800 text-gray-100 rounded-lg border border-gray-700 focus:outline-none focus:border-indigo-500 transition"
      />
    </motion.div>
  );
}
