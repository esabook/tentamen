import React, { Suspense, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { authStore } from "../store/authStore.jsx";
import { loadingDialogStore } from "../store/singleton/loadingDialogStore.jsx";
import FullscreenLoading from "../components/FullscreenLoading.jsx";
import { SidebarInset, SidebarProvider } from "../components/ui/sidebar";
import { AppSidebar } from "../components/sidebar/nav-app-sidebar.js";
import { Separator } from "../components/ui/separator";
import NavTopBar from "../components/sidebar/nav-topbar";
import LoadingSpinner from "../components/FullscreenLoadingPlain.jsx";

export default function Dashboard() {
  const { isAuthenticated, checkAuth, authLoading } = authStore();
  const defaultOpen = localStorage.getItem("sidebar_state") === "true";
  const { show } = loadingDialogStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log("Dashboard isAuthed:", isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
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
