import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";
import SubMenu from "../menu/SubMenu";

const Sidebar = () => {
  return (
    <aside className="bg-green-500 col-span-2 h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5">
      <nav className="flex flex-col gap-5">
        <NavLink to="/dashboard">
          <LayoutDashboard className="shrink-0 text-white lg:hidden" />
          <span className="truncate hidden lg:block cursor-pointer text-white">
            My Dashboard
          </span>
        </NavLink>
        <SubMenu />
      </nav>
    </aside>
  );
};

export default Sidebar;
