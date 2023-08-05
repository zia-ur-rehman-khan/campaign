import { Space } from "antd";
import React from "react";
import CommonTextField from "../TextField";
import CommonHeading from "../Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import Loader from "../Loader";

const CommonCard = ({ range, data, show, loading }) => {
  const days = () => {
    const momentDate1 = moment(range?.[0]);
    const momentDate2 = moment(range?.[1]);
    return momentDate2.diff(momentDate1, "days") + 1;
  };

  console.log(days(), "days");

  const { amount, per, color, label } = data;
  return (
    <Space direction="vertical" className="card-main">
      <CommonTextField text={label} className={"grey"} />
      {loading ? (
        <Loader size={"small"} className="mt-3" />
      ) : (
        <>
          <CommonHeading level={4} text={amount} />
          {show &&
            (per && amount !== "-" ? (
              <Space>
                <CommonTextField text={per} className={color} />

                <FontAwesomeIcon
                  icon={color === "green" ? faArrowUp : faArrowDown}
                  className={color}
                />

                <CommonTextField
                  text={
                    days() === 1
                      ? "than the day before"
                      : `than ${days()} days before`
                  }
                  topClass={"small"}
                  className={"grey"}
                />
              </Space>
            ) : (
              ""
            ))}
        </>
      )}
    </Space>
  );
};

export default CommonCard;
