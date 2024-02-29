import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.scss";
import homeIcon from "./../../assets/icons/Group 46.png";
import TVIcon from "./../../assets/icons/Group 56.png";
import MoviesIcon from "./../../assets/icons/Group 54.png";
import GenresIcon from "./../../assets/icons/Group 53.png";
import LaterIcon from "./../../assets/icons/Group 47.png";

const NavLinks = () => {
  return (
    <div className="nav-links">
      <Link to="/" className="nav-link">
        <img src={homeIcon} alt="homeIcon" />
        <div className="label">Home</div>
      </Link>
      <Link to="/" className="nav-link">
        <img src={TVIcon} alt="TVIcon" />
        <div className="label">TV Shows</div>
      </Link>
      <Link to="/" className="nav-link">
        <img src={MoviesIcon} alt="MoviesIcon" />
        <div className="label">Movies</div>
      </Link>
      <Link to="/" className="nav-link">
        <img src={GenresIcon} alt="GenresIcon" />
        <div className="label">Genres</div>
      </Link>
      <Link to="/" className="nav-link">
        <img src={LaterIcon} alt="LaterIcon" />
        <div className="label">Watch Later</div>
      </Link>
    </div>
  );
};

export default NavLinks;
