import React, { useEffect, useState } from "react";
import DateFilters from "./DateFilters";
import SelectFilters from "./SelectFilters";
import { Col, Row } from "antd";
import CommonCard from "components/common/Card";
import CampaignTable from "./CampaignTable";
import { CARD_LIST } from "utils/constant";
import { useGetCampaignOverview, useGetCampaignStatistics } from "utils/query";
import Loader from "components/common/Loader";
import { statisticsdataManipulatorObject } from "utils/manupilator";
import moment from "moment";

const Home = () => {
  const [page, setPage] = useState(1);
  const [Search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [providers, setProviders] = useState([]);
  const [range, setRange] = useState([]);
  const [filter, setFilter] = useState({
    sort: null,
    sortBy: null,
  });

  const {
    isLoading,
    data: campaignData,
    refetch,
  } = useGetCampaignOverview(page, Search, users, providers, range, filter);

  const {
    isLoading: loadingstatistics,
    data: CampaignStatistics,
    refetch: statisticsRefresh,
  } = useGetCampaignStatistics(users, providers, range);

  useEffect(() => {
    refetch();
    statisticsRefresh();
  }, [
    page,
    refetch,
    statisticsRefresh,
    users,
    providers,
    range,
    filter["sort"],
    filter["sortBy"],
  ]);

  useDebounceEffect(refetch, 1000, [Search]);

  if (isLoading || loadingstatistics) return <Loader />;

  const handlePaginationChange = (page) => {
    setPage(page);
  };

  const handleSearch = (d) => {
    setSearch(d);
  };

  const handleUsers = (d) => {
    setUsers(d);
  };

  const handleProviders = (d) => {
    console.log(d, "d");
    setProviders(d);
  };

  const handleRange = (date, dateString) => {
    if (date === "date") {
      if (dateString === "Today") {
        const today = moment();

        setRange([today, today]);
      } else if (dateString === "Yesterday") {
        const today = moment();
        const yesterday = today?.subtract(1, "days");
        setRange([yesterday, yesterday]);
      } else if (dateString === "Last month") {
        const today = moment();
        const lastMonthDate = today.subtract(1, "months");
        const tomorrow = lastMonthDate.add(1, "days");
        const formatToday = moment();
        setRange([tomorrow, formatToday]);
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
          <SelectFilters
            handleUsers={handleUsers}
            users={users}
            providers={providers}
            handleProviders={handleProviders}
          />
        </Col>
        <Col
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <DateFilters handleRange={handleRange} range={range} />
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
              <CommonCard range={range} data={data} show={true} />
            </Col>
          )
        )}
      </Row>
      <div className="mt-5 table-parent">
        <CampaignTable
          show={true}
          handlePaginationChange={handlePaginationChange}
          page={page}
          campaignData={campaignData}
          handleSearch={handleSearch}
          setFilter={setFilter}
          filter={filter}
        />
      </div>
    </>
  );
};

function useDebounceEffect(fn, waitTime, deps) {
  useEffect(() => {
    const t = setTimeout(() => {
      fn.apply(undefined, deps);
    }, waitTime);

    return () => {
      clearTimeout(t);
    };
  }, deps);
}

export default Home;
