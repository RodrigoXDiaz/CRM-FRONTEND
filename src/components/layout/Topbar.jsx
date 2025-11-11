import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-sm">
      <h1 className="font-bold text-xl text-corporate-900">CRM Panel</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">{user?.email}</span>
        <button
          onClick={handleLogout}
          className="text-sm bg-corporate-900 text-white px-3 py-1 rounded-lg hover:bg-corporate-700 transition"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
