import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authStore } from "../store/authStore.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, authLoading } = authStore();
  const location = useLocation();

  if (authLoading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
