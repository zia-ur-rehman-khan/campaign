import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";

const ImageContent = ({
  src,
  content,
  className,
  responsive,
  component,
  children,
}) => {
  return (
    <div className="common-padding">
      <Row
        gutter={[58, 58]}
        align="middle"
        justify={"space-between"}
        className={`${className || ""}`}
      >
        <Col
          xxl={{ span: responsive.imagelarge }}
          xl={{ span: responsive.imagelarge }}
          lg={{ span: responsive.imagelarge }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          {component ? (
            component
          ) : (
            <Image priority={true} className="c-pointer" src={src} alt="logo" />
          )}
        </Col>
        <Col
          xxl={{ span: responsive.contentlarge }}
          xl={{ span: responsive.contentlarge }}
          lg={{ span: responsive.contentlarge }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          {content || children}
        </Col>
      </Row>
    </div>
  );
};

export default ImageContent;
