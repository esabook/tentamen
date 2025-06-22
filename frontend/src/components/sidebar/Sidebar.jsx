// import React, { useState, useRef } from "react";
// import { renderSidebarMenu, renderMenuCollapsed } from "./SidebarMenu";
// import sidebarMenu from "../../store/menuStore";

// export default function Sidebar() {
//   const [collapsed, setCollapsed] = useState(false);
//   const [width, setWidth] = useState(240); // default 240px
//   const sidebarRef = useRef(null);
//   const startX = useRef(0);
//   const startWidth = useRef(240);
//   const isDragging = useRef(false);
//   const animationFrame = useRef(null);

//   // Mouse event handlers for resizing
//   function handleMouseMove(e) {
//     if (!isDragging.current) return;
//     if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
//     animationFrame.current = requestAnimationFrame(() => {
//       const dx = e.clientX - startX.current;
//       let newWidth = startWidth.current + dx;
//       if (newWidth < 120) newWidth = 120;
//       if (newWidth > 400) newWidth = 400;
//       setWidth(newWidth);
//     });
//   }

//   function handleMouseUp() {
//     isDragging.current = false;
//     document.body.style.cursor = "";
//     window.removeEventListener("mousemove", handleMouseMove);
//     window.removeEventListener("mouseup", handleMouseUp);
//     if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
//   }

//   function handleMouseDown(e) {
//     isDragging.current = true;
//     startX.current = e.clientX;
//     startWidth.current = width;
//     document.body.style.cursor = "col-resize";
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//   }

//   // Only apply transition when collapse/expand, not during drag
//   const transitionClass = !isDragging.current ? "transition-all duration-200" : "";


//   return (
//     <aside
//       ref={sidebarRef}
//       className={`min-h-screen bg-base-200 flex flex-col select-none ${transitionClass} ${collapsed ? 'w-16' : ''}`}
//       style={{ width: collapsed ? 64 : width, minWidth: 64, maxWidth: 400, position: 'relative' }}
//     >
//       <button
//         className="mb-4 btn btn-xs btn-ghost self-start"
//         onClick={() => setCollapsed((c) => !c)}
//         title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
//       >
//         {collapsed ? (
//           <span>&#9654;</span> // ▶
//         ) : (
//           <span>&#9664;</span> // ◀
//         )}
//       </button>
//       <ul className="menu p-0 items-start">
//         {collapsed ? renderMenuCollapsed(sidebarMenu) : renderSidebarMenu(sidebarMenu)}
//       </ul>
//       {/* Resize handle */}
//       <div
//         onMouseDown={handleMouseDown}
//         style={{
//           position: "absolute",
//           top: 0,
//           right: 0,
//           width: 6,
//           height: "100%",
//           cursor: "col-resize",
//           zIndex: 10,
//           background: "transparent",
//         }}
//         aria-label="Resize sidebar"
//       />
//     </aside>
//   );
// }
