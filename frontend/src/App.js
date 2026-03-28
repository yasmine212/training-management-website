import React from "react";
import { Routes, Route } from "react-router-dom"; // Remove BrowserRouter import
import "./App.css";
import Home from "./pages/Home";
import OnlineCourses from "./pages/Formations/OnlineCourses";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Subscribe from "./pages/Formations/Subscribe";
import FormationDetails from "./pages/Formations/FormationDetails";
import About from "./pages/About";
import DashboardFormations from "./Admin/DashboardFormations";
import DashboardClients from "./Admin/DashboardClients";
import DashboardFormateurs from "./Admin/DashboardFormateurs";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
//import DashboardFormateurs from "./Admin/DashboardFormateurs";

function App() {
  return (
    <Routes>
      {/* User Routes with Sidebar */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/formations" element={<OnlineCourses />} />
        <Route path="/formation/:id" element={<FormationDetails />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apropos" element={<About />} />
      </Route>

      {/* Admin Routes with AdminSidebar */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="formations" element={<DashboardFormations />} />
        <Route path="clients" element={<DashboardClients />} />
        <Route path="formateurs" element={<DashboardFormateurs />} />
        
      </Route>
    </Routes>
  );
}

export default App;
