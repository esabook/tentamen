import { Routes, Route, Navigate } from 'react-router-dom';
import AppRoutes from './AppRoutes.jsx';
import './index.css';
import { Suspense } from 'react';
import LoadingSpinner from './components/FullscreenLoadingPlain.jsx';
import { ThemeProvider } from './components/theme-provider.js';
import { authStore } from './store/authStore';

function App() {
  const { isAuthenticated } = authStore();
  const path = isAuthenticated ? '/home' : '/login';
  console.log('App() Root path determined:', path);
  
  return (
    <ThemeProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Navigate to={path} replace={true} />} />
          <Route path="*" element={<AppRoutes />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
