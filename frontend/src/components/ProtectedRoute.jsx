import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuth.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuthStore();
  const location = useLocation();

  // if (authLoading) {
  //   return <LoadingSpinner />;
  // }
  

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } 
  return <Navigate to="/home/404" replace />; // Redirect to home if authenticated
}
