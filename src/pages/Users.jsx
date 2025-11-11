import React from "react";
import Card from "../components/ui/Card";

export default function Users() {
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card title="Administrador">
        <p>Gestiona usuarios y permisos.</p>
      </Card>
      <Card title="Supervisor">
        <p>Accede a reportes de desempeño y tareas.</p>
      </Card>
      <Card title="Empleado">
        <p>Consulta tus actividades y metas.</p>
      </Card>
    </div>
  );
}
