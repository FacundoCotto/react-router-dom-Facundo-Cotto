import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "text-white"
            }
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "text-white"
            }
          >
            Acerca de
          </NavLink>
        </li>
        <li>
          {/* <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "text-white"
            }
          >
            Perfil
          </NavLink> */}
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "text-white"
            }
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
