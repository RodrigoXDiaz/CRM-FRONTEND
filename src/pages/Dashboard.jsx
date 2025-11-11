import React from 'react';
import Card from "../components/ui/Card";

export default function Dashboard(){
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Usuarios" value="1,254" />
        <Card title="Reportes" value="42" />
        <Card title="Tareas pendientes" value="7" />
      </div>

      <div className="mt-6">
        <div className="bg-white p-4 rounded-md shadow-soft">
          <h2 className="text-lg font-medium mb-2">Actividad reciente</h2>
          <p className="text-sm text-neutral-500">Aquí irán las tarjetas y tablas en próximas iteraciones.</p>
        </div>
      </div>
    </div>
  );
}
