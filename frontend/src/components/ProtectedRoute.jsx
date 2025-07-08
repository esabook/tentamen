import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authStore } from "../store/authStore.jsx";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = authStore();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}
