import { Link } from "react-router-dom";
import { MenuBadge, MenuIcon } from "./MenuHelpers";

// Recursive render menu
export function renderSidebarMenu(
  menuList,
  userRole = "admin",
  parentUrl = "/home"
) {
  const pathName = window.location.pathname;

  return menuList
    .filter((menu) => !menu.hidden)
    .map((menu) => {
      const path = parentUrl + menu.url;
      const isActive = pathName === path;
      return menu.submenu ? (
        <li key={menu.url}>
          <details>
            <summary>
              <MenuIcon icon={menu.icon} />
              {menu.title}
              <MenuBadge text={menu.badge_text} type={menu.badge_type} />
            </summary>
            <ul>{renderSidebarMenu(menu.submenu, userRole)}</ul>
          </details>
        </li>
      ) : (
        <li key={menu.url}>
          <Link to={path} className={isActive ? "menu-active" : ""}>
            {menu.title}
            <MenuBadge text={menu.badge_text} type={menu.badge_type} />
          </Link>
        </li>
      );
    });
}

// // Render menu: jika collapsed, hanya icon; jika expanded, icon+title
// export function renderMenuCollapsed(menuList, userRole = "admin") {
//   return menuList
//     .filter((menu) => !menu.hidden)
//     .map((menu) => (
//       <li
//         key={menu.title}
//         className={
//           menu.allowed_role.includes(userRole)
//             ? "menu bg-base-200 w-auto"
//             : "menu-disable"
//         }
//       >
//         <a href={menu.url}>
//           <MenuIcon icon={menu.icon} />
//           {/* title as tooltip */}
//           <span className="sr-only">{menu.title}</span>
//         </a>
//       </li>
//     ));
// }
