import { Routes, Route, Navigate } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./index.css";
import { Suspense } from "react";
import LoadingSpinner from "./components/FullscreenLoadingPlain.jsx";
import { ThemeProvider } from "./components/theme-provider.js";

function App() {
  const isHaveToken = localStorage.getItem("token") ? true : false;
  const rootPath = isHaveToken ? "/home" : "/login";
  console.log("App() Root path determined:", rootPath, " ishaveToken:", isHaveToken);

  return (
    <ThemeProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Navigate to={rootPath} replace={true} />} />
          <Route path="*" element={<AppRoutes />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
