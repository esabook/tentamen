import React from "react";
import Navbar from "../components/Navbar";
import { renderSidebarMenu } from "../components/sidebar/SidebarMenu";
import sidebarMenu from "../store/menuStore";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuth";

export default function Dashboard() {  
  const { isAuthenticated } = useAuthStore();
  const location = useLocation();

  // if (authLoading) {
  //   return <LoadingSpinner />;
  // }
  

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="side-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar />
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        {/* Page content here */}
        <Outlet />
      </div>
      {/* Sidebar content here */}
      <div className="drawer-side">
        <label
          htmlFor="side-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
          <div className="bg-base-200/90 navbar sticky top-0 z-20 hidden items-center gap-2 px-4 py-0 backdrop-blur lg:flex ">
            <img
              draggable="false"
              src="/tentamen-logo-text.svg"
              alt="Tentamen"
              className="h-4"
            />
          </div>
          <ul className="menu bg-base-200 text-base-content min-h-full w-auto">
            {renderSidebarMenu(sidebarMenu, "admin")}
          </ul>
      </div>
    </div>
  );
}
