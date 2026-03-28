import React from "react";
import AdminSidebar from "../Admin/AdminSidebar";
import { Outlet } from "react-router-dom";
import "./AdminLayout.css"

const AdminLayout = () => {
  return (
    <div className="admin-shell">
      <AdminSidebar />
      <div className="admin-main-panel">
        <div className="admin-main-panel__inner">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
