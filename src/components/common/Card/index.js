import { Space } from "antd";
import React from "react";
import CommonTextField from "../TextField";
import CommonHeading from "../Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const CommonCard = ({ data }) => {
  const { amount, chg, color, name } = data;
  return (
    <Space direction="vertical" className="card-main">
      <CommonTextField text={name} className={"grey"} />
      <CommonHeading level={4} text={amount} />
      <Space>
        <CommonTextField text={chg} className={color} />
        <FontAwesomeIcon icon={faArrowDown} className={color} />
        <CommonTextField
          text={"than the day before"}
          topClass={"small"}
          className={"grey"}
        />
      </Space>
    </Space>
  );
};

export default CommonCard;
