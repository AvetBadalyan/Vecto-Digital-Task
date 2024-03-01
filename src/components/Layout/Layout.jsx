import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
