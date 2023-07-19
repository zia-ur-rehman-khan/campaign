import { Col, Row, Space } from "antd";
import CommonButton from "components/common/Button";
import Commonheading from "components/common/Heading";
import CommonTextField from "components/common/TextField";
import { useRouter } from "next/router";
import React from "react";

const MemberShip = () => {
  const { query, push } = useRouter();

  const handelRoute = () => {
    push({
      pathname: "/register",
      query: {
        t: "payment",
        m: "member",
      },
    });
  };

  return (
    <Row
      justify="space-between"
      align="middle"
      className="bg-grey common-padding radius"
      gutter={[0, 24]}
    >
      <Col
        xxl={{ span: 8 }}
        xl={{ span: 8 }}
        lg={{ span: 8 }}
        md={{ span: 24 }}
        sm={{ span: 24 }}
      >
        <Space direction="vertical">
          <CommonTextField text="Iball membership" />
          <Commonheading level={2} heading={"Membership Price"} />
          <Commonheading level={2} heading={"£99/month"} />
        </Space>
      </Col>
      <Col
        xxl={{ span: 8 }}
        xl={{ span: 8 }}
        lg={{ span: 8 }}
        md={{ span: 24 }}
        sm={{ span: 24 }}
      >
        <CommonTextField
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
          }
        />
      </Col>
      <Col
        xxl={{ span: 5 }}
        xl={{ span: 5 }}
        lg={{ span: 5 }}
        md={{ span: 24 }}
        sm={{ span: 24 }}
      >
        <CommonButton
          width={"200px"}
          child="Buy Membership"
          onClick={handelRoute}
        />
      </Col>
    </Row>
  );
};

export default MemberShip;
