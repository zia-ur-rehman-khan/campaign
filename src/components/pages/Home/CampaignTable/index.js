import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Space } from "antd";
import { Modal } from "antd";
import { Col, Row, Table } from "antd";
import CommonInputField from "components/common/Input";
import CommomTable from "components/common/Table";
import React, { useEffect, useMemo, useState } from "react";
import CampaignDetail from "../CampaignDetail";
import { Key, useGetCategories } from "utils/query";
import { useGetCurrentData } from "utils/webServices";
import Loader from "components/common/Loader";
import { campaignManupilator } from "utils/manupilator";
import { useQueryClient } from "react-query";
import { Select } from "antd/lib";
import CommonTextField from "components/common/TextField";
import { SORT_BY } from "utils/constant";

const CampaignTable = ({
  show,
  campaignData,
  handlePaginationChange,
  page,
  handleSearch,
  setFilter,
  filter,
}) => {
  const [isModalOpen, setIsModalOpen] = useState({ visible: false, data: {} });
  const [columnsd, setColumns] = useState([
    { label: "Spend", value: "spend", show: true },
    { label: "Clicks", value: "clicks", show: true },
    { label: "Revenue", value: "revenue", show: true },
    { label: "Profit", value: "profit", show: true },
    { label: "ROI", value: "roi", show: true },
    { label: "Conversions", value: "conversions", show: true },
    { label: "CPR", value: "cpr", show: true },
    { label: "CVR", value: "cvr", show: true },
    { label: "RPC", value: "rpc", show: true },
    { label: "BID", value: "bid", show: true },
  ]);
  const cache = useQueryClient();

  const { data, total, size } = campaignData || {};

  useEffect(() => {
    if (show) {
      setColumns((pre) => [
        { label: "Campaign", value: "campaign", show: true },
        ...pre,
      ]);
    } else {
      setColumns((pre) => [{ label: "Day", value: "day", show: true }, ...pre]);
    }
  }, []);

  const handleCancel = () => {
    console.log("test");
    setIsModalOpen({ visible: false, data: {} });
    cache.removeQueries([Key.CampaignTrend]);
  };

  const handleRowClick = (data) => {
    setIsModalOpen({ visible: true, data: data });
  };

  const columns = columnsd?.map((d) => {
    let data = {
      title: d?.label?.toUpperCase(),
      dataIndex: d.value,
      key: d.value,
      className: d.show ? "" : "hide-column",
    };

    if (d.value === "profit") {
      data.render = (profit, { color }) => {
        return <span className={color}>{profit}</span>;
      };
    }

    if (d.value === "campaign") {
      data.render = (id, { status }) => {
        return (
          <Space>
            <div className={`round background-${status}`}></div>
            {id}
          </Space>
        );
      };
    }

    return data;
  });

  return (
    <div>
      {show && (
        <div className="mb-3">
          <CommonInputField
            onChange={(e) => handleSearch(e.target.value)}
            prefix={<FontAwesomeIcon icon={faSearch} />}
            placeholder={"Search..."}
          />
        </div>
      )}
      <Row gutter={[12, 12]} align="center" className="my-4">
        <Col xs={22} md={8}>
          <CommonTextField
            text={"Column Visibility"}
            font={"General Sans"}
            mb={5}
          />
          <Select
            mode={"multiple"}
            style={{ width: "100%" }}
            value={columnsd.filter((c) => c.show).map(({ value }) => value)}
            options={columnsd}
            onChange={(columnVisiblity) => {
              if (columnVisiblity.length) {
                setColumns(
                  columnsd.map((i) => ({
                    ...i,
                    show: columnVisiblity.includes(i.value),
                  }))
                );
              }
            }}
            placeholder={"Select Item..."}
            maxTagCount={"responsive"}
          />
        </Col>
        <Col xs={11} md={8}>
          <CommonTextField
            text={"Sort By Column"}
            font={"General Sans"}
            mb={5}
          />
          <Select
            style={{ width: "100%" }}
            value={filter?.sortBy}
            options={SORT_BY}
            onChange={(sortBy) => {
              setFilter((p) => ({ ...p, sortBy }));
            }}
            placeholder={"Select Item..."}
            maxTagCount={"responsive"}
          />
        </Col>
        <Col xs={11} md={8}>
          <CommonTextField text={"Sort"} font={"General Sans"} mb={5} />
          <Select
            style={{ width: "100%" }}
            value={filter?.sort}
            options={[
              { label: "Asc", value: "asc" },
              { label: "Des", value: "desc" },
            ]}
            onChange={(sort) => {
              setFilter((p) => ({ ...p, sort }));
            }}
            placeholder={"Select Item..."}
            maxTagCount={"responsive"}
          />
        </Col>
      </Row>
      <CommomTable
        dataSource={campaignManupilator(data)}
        columns={columns}
        onRow={(record) => ({
          onClick: () => show && handleRowClick(record),
        })}
        pagination={{
          current: page,
          total,
          size,
          onChange: handlePaginationChange,
          showSizeChanger: false,
        }}
      />
      <Modal
        title=" "
        open={isModalOpen.visible}
        onCancel={handleCancel}
        footer={null}
      >
        <CampaignDetail data={isModalOpen.data} />
      </Modal>
    </div>
  );
};

export default CampaignTable;
