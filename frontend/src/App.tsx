import {
  createBrowserRouter,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import './index.css';
import { Suspense, useEffect } from 'react';
import LoadingSpinner from './components/FullscreenLoadingPlain.jsx';
import { ThemeProvider } from './components/theme-provider.js';
import { authStore } from './store/authStore';
import dashboardRoutes from './AppRoutes.tsx';
import { useLocation } from 'react-router-dom';
import Error500 from './pages/Error500.jsx';

function App() {
  const { isAuthenticated } = authStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const path = isAuthenticated ? '/home' : '/login';
    console.log('App() Root path determined:', path);
    navigate(path, { replace: true });
  }, [isAuthenticated, location]);

  return (
    <ThemeProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
    </ThemeProvider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    Component: App,
    errorElement: <Error500 />,
    children: dashboardRoutes,
  },
]);

export default appRouter;
