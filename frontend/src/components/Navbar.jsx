import { DynamicIcon } from "lucide-react/dynamic";
import { authStore } from "../store/authStore.jsx";
import { useEffect } from "react";
import { loadingDialogStore } from "../store/singleton/loadingDialogStore.jsx";

const Navbar = () => {
  const { account, signout, authLoading } = authStore();
  const { setShow } = loadingDialogStore();

  useEffect(() => {
    setShow(authLoading);
  }, [authLoading]);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-none">
        <label
          htmlFor="side-drawer"
          className="btn btn-circle btn-ghost drawer-btn lg:hidden"
        >
          <DynamicIcon name="menu" />
        </label>
      </div>
      <div className="flex-1"></div>
      <div className="flex-none">
        <div className="flex items-center justify-end w-full gap-6">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <DynamicIcon name="bell" />
              <span className="badge badge-xs badge-primary indicator-item">
                1
              </span>
            </div>
          </button>

          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              role="button"
              className="dropdown dropdown-end btn btn-ghost"
            >
              {" "}
              <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">
                  {account?.full_name}
                </span>
                <span className="text-[10px] text-gray-500 text-right">
                  Admin
                </span>
              </div>
              <DynamicIcon name="circle-user-round" />
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={signout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
