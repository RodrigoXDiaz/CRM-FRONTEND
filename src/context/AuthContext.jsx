// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Leer sesión guardada al cargar
  useEffect(() => {
    const saved = localStorage.getItem("speedCrmUser");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (email, password) => {
    // simulamos autenticación
    const fakeUser = { email };
    localStorage.setItem("speedCrmUser", JSON.stringify(fakeUser));
    setUser(fakeUser);
    return true;
  };

  const register = (name, email, password) => {
    // simulamos registro (guardar datos)
    const newUser = { name, email };
    localStorage.setItem("speedCrmUser", JSON.stringify(newUser));
    setUser(newUser);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("speedCrmUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
