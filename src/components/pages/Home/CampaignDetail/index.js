import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import SelectFilters from "../SelectFilters";
import DateFilters from "../DateFilters";
import CommonCard from "components/common/Card";
import CommonTable from "../CampaignTable";
import CommonTextField from "components/common/TextField";
import CommonHeading from "components/common/Heading";
import CampaignTable from "../CampaignTable";
import { CARD_LIST } from "utils/constant";
import Loader from "components/common/Loader";
import {
  Key,
  useGetCampaignStatistics,
  useGetCampaignTrend,
} from "utils/query";
import { statisticsdataManipulatorObject } from "utils/manupilator";

const CampaignDetail = ({ data }) => {
  const [page, setPage] = useState(1);
  const [range, setRange] = useState([]);

  const {
    isLoading,
    error,
    data: campaignData,
    refetch,
  } = useGetCampaignTrend(page, range, data?.id);

  const {
    isLoading: loadingstatistics,
    data: CampaignStatistics,
    refetch: statisticsRefresh,
  } = useGetCampaignStatistics("", "", range);

  console.log(
    "🚀 ~ file: index.js:23 ~ Home ~ campaigntrend:",
    CampaignStatistics
  );

  useEffect(() => {
    refetch();
    statisticsRefresh();
  }, [page, refetch, statisticsRefresh, range]);

  if (isLoading || loadingstatistics) return <Loader />;

  const handlePaginationChange = (page) => {
    setPage(page);
  };

  const handleRange = (_, dateString) => {
    console.log(dateString, "dateString");
    setRange(dateString);
  };
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
          <DateFilters handleRange={handleRange} />
        </Col>
      </Row>
      <Row className="mt-5">
        {Object.values(statisticsdataManipulatorObject(CampaignStatistics)).map(
          (data) => (
            <Col
              xl={{ span: 4 }}
              lg={{ span: 6 }}
              md={{ span: 8 }}
              sm={{ span: 12 }}
              xs={{ span: 24 }}
              key={Math.random()}
            >
              <CommonCard range={range} data={data} />
            </Col>
          )
        )}
      </Row>
      <div className="mt-4">
        <CampaignTable
          handlePaginationChange={handlePaginationChange}
          page={page}
          campaignData={campaignData}
        />
      </div>
    </>
  );
};

export default CampaignDetail;
