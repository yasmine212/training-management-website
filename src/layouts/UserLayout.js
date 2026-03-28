import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="MainContent">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
