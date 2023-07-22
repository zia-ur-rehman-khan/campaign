import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="hide-mobile">
        <Sidebar />
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
