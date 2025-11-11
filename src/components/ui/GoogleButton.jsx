import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({ text = "Entrar con Google", onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-2.5 bg-white shadow-sm hover:shadow-md transition-all"
    >
      <FcGoogle size={22} />
      <span className="text-neutral-700 font-medium">{text}</span>
    </motion.button>
  );
}
