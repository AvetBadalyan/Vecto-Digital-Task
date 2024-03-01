import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.scss";
import homeIcon from "./../../assets/icons/Group 46.png";
import TVIcon from "./../../assets/icons/Group 56.png";
import MoviesIcon from "./../../assets/icons/Group 54.png";
import GenresIcon from "./../../assets/icons/Group 53.png";
import LaterIcon from "./../../assets/icons/Group 47.png";
import User from "./../../assets/Sung-Gi-Hoon.jpg";

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
            <Link to="/" className="nav-link">
              <div className="nav-icon-container">
                <img src={homeIcon} alt="homeIcon" />
              </div>

              <div className="label">Home</div>
            </Link>
            <Link to="/" className="nav-link">
              <div className="nav-icon-container">
                <img src={TVIcon} alt="TVIcon" />
              </div>

              <div className="label">TV Shows</div>
            </Link>
            <Link to="/" className="nav-link">
              <div className="nav-icon-container">
                <img src={MoviesIcon} alt="MoviesIcon" />
              </div>

              <div className="label">Movies</div>
            </Link>
            <Link to="/" className="nav-link">
              <div className="nav-icon-container">
                <img src={GenresIcon} alt="GenresIcon" />
              </div>

              <div className="label">Genres</div>
            </Link>
            <Link to="/" className="nav-link">
              <div className="nav-icon-container">
                <img src={LaterIcon} alt="LaterIcon" />
              </div>

              <div className="label">Watch Later</div>
            </Link>
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
