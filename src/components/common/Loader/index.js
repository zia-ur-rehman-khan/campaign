// Loader.js
import { Spin } from "antd";
import React from "react";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <Spin size="large" />;
    </div>
  );
};

export default Loader;
