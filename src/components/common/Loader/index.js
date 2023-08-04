// Loader.js
import { Spin } from "antd";
import React from "react";

const Loader = ({ size = "large" }) => {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <Spin size={size} />;
    </div>
  );
};

export default Loader;
