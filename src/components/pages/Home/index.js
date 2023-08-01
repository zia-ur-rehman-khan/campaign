import React, { useEffect, useState } from "react";
import DateFilters from "./DateFilters";
import SelectFilters from "./SelectFilters";
import { Col, Row } from "antd";
import CommonCard from "components/common/Card";
import CampaignTable from "./CampaignTable";
import { CARD_LIST } from "utils/constant";
import { useGetCampaignOverview } from "utils/query";
import Loader from "components/common/Loader";

const Home = () => {
  const [page, setPage] = useState(1);
  const [Search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [providers, setProviders] = useState([]);

  const {
    isLoading,
    error,
    data: campaignData,
    refetch,
  } = useGetCampaignOverview(page, Search, users, providers);
  console.log("🚀 ~ file: index.js:23 ~ Home ~ campaignData:", campaignData);

  useEffect(() => {
    refetch();
  }, [page, refetch, Search, users, providers]);

  if (isLoading) return <Loader />;

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
        <CampaignTable
          show={true}
          handlePaginationChange={handlePaginationChange}
          page={page}
          campaignData={campaignData}
          handleSearch={handleSearch}
        />
      </div>
    </>
  );
};

export default Home;
