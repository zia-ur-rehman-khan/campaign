import React, { useState } from "react";
import DateFilters from "./DateFilters";
import SelectFilters from "./SelectFilters";
import { Col, Row } from "antd";
import CommonCard from "components/common/Card";
import Table from "./CampaignTable";
import CommonTable from "./CampaignTable";
import CampaignTable from "./CampaignTable";
import { CARD_LIST } from "utils/constant";

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
            <CommonCard data={data} show={true} />
          </Col>
        ))}
      </Row>
      <div className="mt-5 table-parent">
        <CampaignTable show={true} />
      </div>
    </>
  );
};

export default Home;
