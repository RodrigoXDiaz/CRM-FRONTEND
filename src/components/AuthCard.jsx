import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/speed-logo.jpg";

export default function AuthCard({ children, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26, scale: 0.995 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-lg overflow-hidden rounded-3xl border border-white/60 bg-white/80 px-10 pb-12 pt-10 shadow-[0_35px_80px_-35px_rgba(15,23,42,0.45)] backdrop-blur-2xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_60%)]" />
      <div className="pointer-events-none absolute -left-6 top-24 h-32 w-32 rounded-full bg-indigo-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-2 -top-8 h-36 w-36 rounded-full bg-sky-200/60 blur-3xl" />
      <div className="relative mb-8 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl border border-white/50 bg-white/70 shadow-[0_18px_40px_-18px_rgba(37,99,235,0.4)]">
          <img src={logo} alt="Speed CRM" className="h-full w-full object-contain" />
        </div>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
        {subtitle && <p className="mt-2 text-sm text-slate-500">{subtitle}</p>}
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  );
}
