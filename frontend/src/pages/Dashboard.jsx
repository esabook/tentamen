import { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { authStore } from '../store/authStore';
import { loadingDialogStore } from '../store/singleton/loadingDialogStore.jsx';
import FullscreenLoading from '../components/FullscreenLoading.jsx';
import { SidebarInset, SidebarProvider } from '../components/ui/sidebar';
import { AppSidebar } from '../components/sidebar/nav-app-sidebar.js';
import { Separator } from '../components/ui/separator';
import NavTopBar from '../components/sidebar/nav-topbar';
import { Toaster } from '@/components/ui/sonner.js';

export default function Dashboard() {
  const { isAuthenticated, checkAuth, authLoading } = authStore();
  const defaultOpen = localStorage.getItem('sidebar_state') === 'true';
  const { show } = loadingDialogStore();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/', { replace: true });
    }
    console.log('Dashboard.useEffect isAuthed:', isAuthenticated);
  }, [isAuthenticated, navigate]);

  console.log('Dashboard.return isAuthed:', isAuthenticated);
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
       <Toaster />
      <FullscreenLoading show={show || authLoading} />
      <AppSidebar />
      <SidebarInset>
        <NavTopBar />
        <Separator />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
