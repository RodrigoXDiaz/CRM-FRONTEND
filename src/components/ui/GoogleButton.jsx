import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold py-2 w-full rounded-lg shadow hover:bg-gray-200 transition"
    >
      <FcGoogle size={22} />
      Iniciar sesión con Google
    </motion.button>
  );
}
