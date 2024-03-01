import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.scss";
import homeIcon from "./../../assets/icons/Group 46.png";
import TVIcon from "./../../assets/icons/Group 56.png";
import MoviesIcon from "./../../assets/icons/Group 54.png";
import GenresIcon from "./../../assets/icons/Group 53.png";
import LaterIcon from "./../../assets/icons/Group 47.png";
import User from "./../../assets/Sung-Gi-Hoon.jpg";

const navLinks = [
  { to: "/", label: "Home", icon: homeIcon },
  { to: "/", label: "TV Shows", icon: TVIcon },
  { to: "/", label: "Movies", icon: MoviesIcon },
  { to: "/", label: "Genres", icon: GenresIcon },
  { to: "/", label: "Watch Later", icon: LaterIcon },
];

const Navbar = () => {
  return (
    <nav className="vertical-nav">
      <div className="content">
        <div>
          <div className="profile-card">
            <img src={User} alt="user" className="user-image" />

            <div className="user-name">
              <span>Daniel</span>
            </div>
          </div>
          <div className="nav-links">
            {navLinks.map((link, index) => (
              <Link to={link.to} className="nav-link" key={index}>
                <div className="nav-icon-container">
                  <img src={link.icon} alt={link.label} />
                </div>
                <div className="label">{link.label}</div>
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-menu">
          <button href="/">language</button>
          <a href="/">Get help</a>
          <button href="/">Exit</button>
        </div>
      </div>
      <div className="backdrop"></div>
    </nav>
  );
};

export default Navbar;
