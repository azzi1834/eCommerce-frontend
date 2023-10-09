import React from "react";
import SidebarDashboard from "./sidebarDashboard";
import { Outlet } from "react-router-dom";

function UserDashboardLayout() {
  return (
    <div className="container row m-3">
      <div className="col-3">
        <SidebarDashboard />
      </div>
      <div className="col-9">
        <Outlet />
      </div>
    </div>
  );
}

export default UserDashboardLayout;
