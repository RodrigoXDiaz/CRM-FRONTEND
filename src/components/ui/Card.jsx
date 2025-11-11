import React from "react";

export default function Card({ title, value, children }) {
  return (
    <div className="glass-card p-6 rounded-2xl shadow-card-lg border border-transparent hover:border-primary-300 transition-all">
      {title && <div className="text-sm text-neutral-500 mb-2">{title}</div>}
      {value && <div className="text-2xl font-semibold text-neutral-900 mb-3">{value}</div>}
      <div className="text-neutral-700">{children}</div>
    </div>
  );
}
