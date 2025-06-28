import { Routes, Route, Navigate } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { useAuthStore } from "./store/useAuth.jsx";
import "./index.css";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

function App() {
  const { isAuthenticated, checkAuth, authLoading } = useAuthStore();

  console.log("App authLoading: ", authLoading);

  useEffect(() => {
    checkAuth();
  }, [checkAuth, authLoading]);


  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <LoadingSpinner />
      </div>
    );
  }

  const rootPath = isAuthenticated ? "/home" : "/login";
  console.log("Root path determined:", rootPath, " isAuthenticated:", isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={rootPath} replace={true} />} />
      <Route path="*" element={<AppRoutes />} />
    </Routes>
  );
}

export default App;
