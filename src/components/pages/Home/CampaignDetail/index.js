import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import SelectFilters from "../SelectFilters";
import DateFilters from "../DateFilters";
import CommonCard from "components/common/Card";
import CommonTable from "../CampaignTable";
import CommonTextField from "components/common/TextField";
import CommonHeading from "components/common/Heading";
import CampaignTable from "../CampaignTable";
import { CARD_LIST, DATE_OPTIONS_trend } from "utils/constant";
import Loader from "components/common/Loader";
import {
  Key,
  useGetCampaignStatistics,
  useGetCampaignTrend,
  useGetCampaignTrendStatistics,
} from "utils/query";
import { statisticsdataManipulatorObject } from "utils/manupilator";
import moment from "moment";

const CampaignDetail = ({ data }) => {
  const [page, setPage] = useState(1);
  const [range, setRange] = useState([]);
  const [filter, setFilter] = useState({
    sort: null,
    sortBy: null,
  });

  const {
    isLoading,
    isFetching,
    data: campaignData,
    refetch,
  } = useGetCampaignTrend(page, range, data?.id, filter);

  const {
    isLoading: loadingstatistics,
    isFetching: loadingstatisticsFetching,
    data: CampaignStatistics,
    refetch: statisticsRefresh,
  } = useGetCampaignTrendStatistics(range, data?.id);

  useEffect(() => {
    statisticsRefresh();
  }, [statisticsRefresh, range, data]);

  useEffect(() => {
    refetch();
  }, [
    page,
    refetch,
    statisticsRefresh,
    range,
    filter["sort"],
    filter["sortBy"],
  ]);

  if (isLoading || loadingstatistics) return <Loader />;

  const handleTableChange = (pagination, filters, sorter) => {
    if (sorter && sorter.field && sorter.order) {
      const field = sorter.column.sortBy;
      let order;
      if (sorter.order === "descend") {
        order = "desc";
      } else {
        order = "asc";
      }

      setFilter({ sort: order, sortBy: field });
      if (page !== 1) setPage(1);
    } else {
      setFilter({ sort: null, sortBy: null });
      if (page !== 1) setPage(1);
    }
  };

  const handlePaginationChange = (page) => {
    setPage(page);
  };

  const handleRange = (date, dateString) => {
    if (page !== 1) setPage(1);

    if (date === "date") {
      if (dateString === "Today") {
        const today = moment();

        setRange([today, today]);
      } else if (dateString === "Yesterday") {
        const today = moment();
        const yesterday = today?.subtract(1, "days");
        setRange([yesterday, yesterday]);
      } else if (dateString === "Last 7 days") {
        const today = moment();
        const lastDate = today.subtract(6, "days");

        const formatToday = moment();
        setRange([lastDate, formatToday]);
      }
    } else {
      console.log(date, "date");
      setRange(date);
    }
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
          <DateFilters
            handleRange={handleRange}
            range={range}
            options={DATE_OPTIONS_trend}
          />
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
              <CommonCard
                range={range}
                data={data}
                loading={loadingstatisticsFetching}
              />
            </Col>
          )
        )}
      </Row>
      <div>
        <CampaignTable
          handlePaginationChange={handlePaginationChange}
          page={page}
          campaignData={campaignData}
          isFetching={isFetching}
          handleTableChange={handleTableChange}
        />
      </div>
    </>
  );
};

export default CampaignDetail;
