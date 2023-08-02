import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Space } from "antd";
import { Modal } from "antd";
import { Col, Row, Table } from "antd";
import CommonInputField from "components/common/Input";
import CommomTable from "components/common/Table";
import React, { useEffect, useState } from "react";
import CampaignDetail from "../CampaignDetail";
import { Key, useGetCategories } from "utils/query";
import { useGetCurrentData } from "utils/webServices";
import Loader from "components/common/Loader";
import { campaignManupilator } from "utils/manupilator";
import { useQueryClient } from "react-query";

const CampaignTable = ({
  show,
  campaignData,
  handlePaginationChange,
  page,
  handleSearch,
}) => {
  const [isModalOpen, setIsModalOpen] = useState({ visible: false, data: {} });

  const cache = useQueryClient();

  const { data, total, size } = campaignData || {};
  console.log("🚀 ~ file: index.js:83 ~ total:", total);

  const handleCancel = () => {
    console.log("test");
    setIsModalOpen({ visible: false, data: {} });
    cache.removeQueries([Key.CampaignTrend]);
  };

  const handleRowClick = (data) => {
    setIsModalOpen({ visible: true, data: data });
  };

  const array = [
    "spend",
    "clicks",
    "revenue",
    "profit",
    "roi",
    "conversions",
    "cpr",
    "cvr",
    "rpc",
    "bid",
  ];

  if (show) {
    array.unshift("campaign");
  } else {
    array.unshift("day");
  }

  const columns = array.map((d) => {
    let data = {
      title: d.toUpperCase(),
      dataIndex: d,
      key: d,
    };

    // if (d === "profit") {
    //   data.render = (profit) => {
    //     let color;
    //     if (5 < profit && profit < 6) {
    //       color = "red";
    //       return <span className={color}>{`-$${profit}`}</span>;
    //     } else {
    //       color = "green";
    //       return <span className={color}>{`$${profit}`}</span>;
    //     }
    //   };
    // } else if (d === "campaign") {
    //   data.render = (id, { profit }) => {
    //     let color;
    //     if (5 < profit && profit < 6) {
    //       color = "background-red";
    //       return (
    //         <Space>
    //           <div className={`round ${color}`}></div>
    //           {id}
    //         </Space>
    //       );
    //     } else {
    //       color = "background-green";
    //       return (
    //         <Space>
    //           <div className={`round ${color}`}></div>
    //           {id}
    //         </Space>
    //       );
    //     }
    //   };
    // }

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
