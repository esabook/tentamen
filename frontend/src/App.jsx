import { Routes, Route, Navigate } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { useAuthStore } from "./store/useAuth.jsx";
import "./index.css";
import { useEffect } from "react";

function App() {
  const { isAuthenticated, checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  
  const rootPath = isAuthenticated ? "/home" : "/login";
  
  console.log("App component rendered, isAuthenticated:", isAuthenticated);
  console.log("Root path determined:", rootPath);


  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace={rootPath} />} />
        <Route path="*" element={<AppRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
