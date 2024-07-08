import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardNav from "./DashboardNav";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <div className="col-span-10 h-full">
        <DashboardNav />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
