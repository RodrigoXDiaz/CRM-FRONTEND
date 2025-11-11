import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFound(){
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-neutral-600 mb-4">Página no encontrada</p>
      <Link to="/" className="px-4 py-2 rounded-md bg-corporate-900 text-white">Volver al inicio</Link>
    </div>
  );
}
