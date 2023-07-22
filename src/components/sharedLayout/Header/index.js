import React, { useState } from "react";
import { Space } from "antd";
import { Avatar } from "antd";
import CommonTextField from "components/common/TextField";
import { Drawer } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="header d-flex w-100 justify-content-between align-items-center">
      <CommonTextField
        text={"Lorem Ipsum"}
        topClass={"logo"}
        fontWeight={"600"}
      />
      <FontAwesomeIcon className="burger" icon={faBars} onClick={showDrawer} />
      <Avatar
        style={{
          backgroundColor: "#00a2ae",
        }}
        size="large"
      >
        DN
      </Avatar>

      <Drawer
        title={<CommonTextField text={"Lorem Ipsum"} fontWeight={"600"} />}
        onClose={onClose}
        open={open}
        placement={"left"}
      >
        <Sidebar />
      </Drawer>
    </div>
  );
};

export default Header;
