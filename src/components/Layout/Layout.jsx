import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
