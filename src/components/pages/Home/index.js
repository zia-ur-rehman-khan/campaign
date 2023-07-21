import React, { useState } from "react";
import DateFilters from "./DateFilters";
import SelectFilters from "./SelectFilters";
import { Col, Row } from "antd";
import CommonCard from "components/common/Card";
import { CARD_LIST } from "constant";

const Home = () => {
  return (
    <>
      <Row gutter={[0, 20]}>
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
      <Row className="mt-5">
        {CARD_LIST.map((data) => (
          <Col
            xl={{ span: 4 }}
            lg={{ span: 6 }}
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
            key={Math.random()}
          >
            <CommonCard data={data} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
