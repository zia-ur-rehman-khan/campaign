import React from "react";
import { Space } from "antd";
import { Avatar } from "antd";
import CommonTextField from "components/common/TextField";

const Header = () => {
  return (
    <div className="header d-flex w-100 justify-content-between align-items-center">
      <CommonTextField text={"Lorem Ipsum"} fontWeight={"600"} />
      <Avatar
        style={{
          backgroundColor: "#00a2ae",
        }}
        size="large"
      >
        DN
      </Avatar>
    </div>
  );
};

export default Header;
