import { Col, Row } from "antd";
import React from "react";
import SelectFilters from "../SelectFilters";
import DateFilters from "../DateFilters";
import CommonCard from "components/common/Card";
import CommonTable from "../CampaignTable";
import CommonTextField from "components/common/TextField";
import CommonHeading from "components/common/Heading";
import CampaignTable from "../CampaignTable";
import { CARD_LIST } from "utils/constant";

const CampaignDetail = ({ data }) => {
  return (
    <>
      <Row gutter={[0, 20]}>
        <Col
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <CommonHeading level={4} text={data?.campaign} />
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
      <div className="mt-4">
        <CampaignTable />
      </div>
    </>
  );
};

export default CampaignDetail;
