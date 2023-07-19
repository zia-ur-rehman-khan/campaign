import { Button } from "antd";
import React from "react";

const CommonButton = ({
  child,
  classname,
  topClass,
  width = "100%",
  height,
  background,
  borderRadius = "6px",
  border,
  color = "#ffffff",
  onClick,
  htmlType,
  disabled,
  type = "primary",
}) => {
  return (
    <div className={`button-parent ${topClass || ""} `}>
      <Button
        type={type}
        style={{
          width,
          height,
          background,
          borderRadius,
          color,
          border,
        }}
        className={classname}
        onClick={onClick}
        htmlType={htmlType}
        disabled={disabled}
      >
        {child}
      </Button>
    </div>
  );
};

export default CommonButton;
