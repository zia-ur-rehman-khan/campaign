import React, { useState } from "react";
import { Space } from "antd";
import { Avatar } from "antd";
import CommonTextField from "components/common/TextField";
import { Drawer } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar";
import Image from "next/image";
import logo from "../../../../public/logo.jpg";

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
      <div className="logo">
        <Image src={logo} alt="logo" width={45} height={36} />
      </div>
      <FontAwesomeIcon className="burger" icon={faBars} onClick={showDrawer} />
      <div className="logo-hide">
        <Image src={logo} alt="logo" width={45} height={36} />
      </div>
      <Avatar
        style={{
          backgroundColor: "#00a2ae",
        }}
        size="large"
      >
        DN
      </Avatar>

      <Drawer
        title={<Image src={logo} alt="logo" width={45} height={36} />}
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
