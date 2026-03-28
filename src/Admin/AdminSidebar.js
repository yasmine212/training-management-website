import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import "./AdminSidebar.css";
import logo from "../components/000.png";

const adminLinks = [
  { label: "Formations", icon: <LibraryBooksOutlinedIcon fontSize="small" />, to: "/admin/formations" },
  { label: "Clients", icon: <Groups2OutlinedIcon fontSize="small" />, to: "/admin/clients" },
  { label: "Formateurs", icon: <WorkspacePremiumOutlinedIcon fontSize="small" />, to: "/admin/formateurs" },
];

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <nav
      className={`sidebar admin-sidebar ${isOpen ? "expanded" : "collapsed"}`}
      aria-label="Navigation administrateur"
    >
      <div className="sidebar__brand">
        <div className="sidebar__brand-meta">
          <div className="sidebar__logo">
            <img src={logo} alt="FormaSphere Admin" className="logo-img" />
          </div>
          {isOpen && (
            <div className="sidebar__identity">
              <strong>Console Admin</strong>
              <span>Mise à jour</span>
            </div>
          )}
        </div>
        <button
          type="button"
          className="sidebar__toggle"
          aria-label="Réduire le menu admin"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <MenuIcon fontSize="small" />
        </button>
      </div>

      <ul className="sidebar__nav">
        {adminLinks.map(({ label, icon, to }) => (
          <li key={label}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `sidebar__item ${isActive ? "is-active" : ""}`
              }
            >
              <span className="sidebar__icon">{icon}</span>
              {isOpen && <span className="sidebar__label">{label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="sidebar__footer">
        {isOpen && <p>Retourner sur la partie publique ?</p>}
        <button
          type="button"
          className="sidebar__cta"
          onClick={() => navigate("/home")}
        >
          Voir le site
        </button>
      </div>
    </nav>
  );
};

export default AdminSidebar;
