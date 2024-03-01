import { Outlet } from "react-router-dom";
import "./Layout.scss";
import NavLinks from "../NavLinks/NavLinks";

const Layout = () => {
  return (
    <div className="layout-container">
      <NavLinks />
      <Outlet />
    </div>
  );
};

export default Layout;
