// src/App.jsx
import React, { useContext } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AuthProvider, AuthContext } from "./context/AuthContext";

import Layout from "./components/layout/Layout";
import FloatingChat from "./components/support/FloatingChat";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

function PageWrapper({ children }) {
  const variants = {
    initial: { opacity: 0, y: 18, scale: 0.99 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -12, scale: 0.995 },
  };
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.45, ease: "circOut" }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
}

// ✅ RUTA PRIVADA
function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const location = useLocation();

  return (
    <AuthProvider>
      <FloatingChat />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          {/* 🔐 LOGIN PAGE */}
          <Route
            path="/login"
            element={
              <PageWrapper>
                <Login />
              </PageWrapper>
            }
          />

          {/* 🧾 REGISTER PAGE */}
          <Route
            path="/register"
            element={
              <PageWrapper>
                <Register />
              </PageWrapper>
            }
          />

          {/* 🏠 ÁREA PROTEGIDA (Dashboard, Users, etc.) */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route
              index
              element={
                <PageWrapper>
                  <Dashboard />
                </PageWrapper>
              }
            />
            <Route
              path="users"
              element={
                <PageWrapper>
                  <Users />
                </PageWrapper>
              }
            />
            <Route
              path="reports"
              element={
                <PageWrapper>
                  <Reports />
                </PageWrapper>
              }
            />
            <Route
              path="settings"
              element={
                <PageWrapper>
                  <Settings />
                </PageWrapper>
              }
            />
          </Route>

          {/* ❌ ERROR 404 */}
          <Route
            path="/404"
            element={
              <PageWrapper>
                <NotFound />
              </PageWrapper>
            }
          />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </AnimatePresence>
    </AuthProvider>
  );
}
