import React, { useState } from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";

import { useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../components/000.png";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className={`Sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="logo" onClick={() => setIsOpen(!isOpen)}>
        <img src={logo} alt="Logo" className="logo-img" />
        {isOpen && <button className="toggle-btn"><MenuIcon /></button>}
      </div>
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          const isActive = location.pathname === val.link;
          return (
            <li
              key={key}
              className={`row ${isActive ? "active" : ""}`}
              onClick={() => navigate(val.link)}
            >
              <div id="icon">{val.icon}</div>
              {isOpen && <div id="title">{val.title}</div>}
            </li>
          );
        })}

        {!user && (
          <li className="row" onClick={() => navigate("/login")}>
            <div id="icon"><LoginIcon /></div>
            {isOpen && <div id="title">Login</div>}
          </li>
        )}

        {user && (
          <>
            <li className="row" onClick={() => navigate("/etudiant/dashboard")}>
              <div id="icon"><LoginIcon /></div>
              {isOpen && <div id="title">Mon espace</div>}
            </li>
            <li className="row" onClick={handleLogout}>
              <div id="icon"><LogoutIcon /></div>
              {isOpen && <div id="title">Déconnexion</div>}
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
