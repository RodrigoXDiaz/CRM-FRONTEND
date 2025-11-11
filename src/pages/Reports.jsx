import React from "react";
import Card from "../components/ui/Card";

export default function Reports() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card title="Reporte de Ventas">
        <p>Resumen de ingresos y egresos.</p>
      </Card>
      <Card title="Reporte de Usuarios">
        <p>Actividad y desempeño de usuarios registrados.</p>
      </Card>
      <Card title="Reporte de Soporte">
        <p>Solicitudes y tiempos de respuesta.</p>
      </Card>
    </div>
  );
}
