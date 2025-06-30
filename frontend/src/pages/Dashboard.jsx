import React from "react";
import Navbar from "../components/Navbar";
import { renderSidebarMenu } from "../components/sidebar/SidebarMenu";
import sidebarMenu from "../store/menuStore";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { authStore } from "../store/authStore.jsx";
import { loadingDialogStore } from "../store/singleton/loadingDialogStore.jsx";
import FullscreenLoading from "../components/FullscreenLoading.jsx";

export default function Dashboard() {
  const { isAuthenticated } = authStore();
  const location = useLocation();
  const { show } = loadingDialogStore();

  // if (authLoading) {
  //   return <LoadingSpinner />;
  // }

  console.log("Dashboard isAuthed:", isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div className="drawer lg:drawer-open">
      <FullscreenLoading show={show} />
      <input id="side-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col min-h-screen">
        <Navbar />
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
        <ul className="menu bg-base-200 text-base-content min-h-full w-80">
          {renderSidebarMenu(sidebarMenu, "admin")}
        </ul>
      </div>
    </div>
  );
}
