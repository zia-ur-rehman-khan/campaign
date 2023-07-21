import React, { useState } from "react";
import DateFilters from "./DateFilters";
import SelectFilters from "./SelectFilters";
import { Col, Row } from "antd";

const Home = () => {
  return (
    <Row gutter={[20, 10]}>
      <Col
        lg={{ span: 12 }}
        md={{ span: 24 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
      >
        <SelectFilters />
      </Col>
      <Col
        lg={{ span: 12 }}
        md={{ span: 24 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
      >
        <DateFilters />
      </Col>
    </Row>
  );
};

export default Home;
