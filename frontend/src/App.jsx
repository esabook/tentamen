import { Routes, Route, Navigate } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { authStore } from "./store/authStore.jsx";
import "./index.css";
import { Suspense, useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import { themeStore } from "./store/pengaturan/themeStore.jsx";
import FullscreenLoading from "./components/FullscreenLoading.jsx";
import { loadingDialogStore } from "./store/singleton/loadingDialogStore.jsx";

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center ">
    <LoadingSpinner />
  </div>
);

function App() {
  const { isAuthenticated, checkAuth, authLoading } = authStore();
  const { theme } = themeStore();

  useEffect(() => {
    console.log("App useEffect and checkAuth");
    checkAuth();
  }, [checkAuth]);

  console.log("App started auth=", isAuthenticated, "loading=", authLoading);

  const rootPath = isAuthenticated ? "/home" : "/login";
  console.log(
    "Root path determined:",
    rootPath,
    " isAuthenticated:",
    isAuthenticated
  );

  return (
    <div data-theme={theme}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navigate to={rootPath} replace={true} />} />
          <Route path="*" element={<AppRoutes />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
