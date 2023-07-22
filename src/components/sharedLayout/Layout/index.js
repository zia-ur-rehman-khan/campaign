import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
