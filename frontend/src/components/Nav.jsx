import React from "react";
import "./Nav.css";
// import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="Navbar">
      <h2>Chat Application</h2>
      <nav className="nav-links">
        <ul>
          <li>
            <a href="/">Chat</a>
          </li>
          <li>
            <a href="/">Room</a>
          </li>
          <li>
            <a href="/">Status</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
