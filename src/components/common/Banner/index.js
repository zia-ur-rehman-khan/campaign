import { Space } from "antd";
import Image from "next/image";
import Commonheading from "components/common/Heading";
import TextField from "components/common/TextField";
import React from "react";

const CommonBanner = ({ text1, Component, heading, content, src }) => {
  return (
    <div className="banner-image">
      <Space className="banner-content">
        <TextField text={text1} fontSize="29.64px" />

        {heading ? <Commonheading heading={heading} /> : Component}

        <div className="content-text">
          <TextField text={content} />
        </div>
      </Space>
      <div>
        <div className="radial-background"></div>

        <Image src={src} alt="logo" priority={true} />
      </div>
    </div>
  );
};

export default CommonBanner;
