import React from "react";
import { Link } from "react-router-dom";
import img from "./../../assets/icons/not-found.svg";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="error-page">
      <img src={img} alt="not found" />
      <h3>Ohh! Page Not Found</h3>
      <p>We can't seem to find the page you're looking for</p>
      <Link to="/">back home</Link>
    </div>
  );
};

export default NotFound;
