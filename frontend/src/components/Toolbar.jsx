// import React from "react";
// import { useNavigate } from "react-router-dom";
// // import { logout } from "../api/auth";
// import { useAuthStore } from "../store/useAuth.jsx";

// export default function Toolbar() {
//   const navigate = useNavigate();
//   const { isAuthenticated, signout } = useAuthStore();

//   const handleLogout = async () => {
//     await signout();
//     if (!isAuthenticated) {
//       navigate("/login", { replace: true });
//     }
//   };

//   return (
//     <div className="fixed top-4 right-4 z-50 flex gap-2 bg-base-100 shadow-lg rounded-lg px-4 py-2 border border-base-200 items-center">
//       <button className="btn btn-sm btn-primary">Tambah Data</button>
//       <button className="btn btn-sm btn-secondary">Refresh</button>
//       <button className="btn btn-sm btn-error" onClick={handleLogout}>
//         Logout
//       </button>
//     </div>
//   );
// }
