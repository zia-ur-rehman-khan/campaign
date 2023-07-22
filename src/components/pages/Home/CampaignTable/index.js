import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Space } from "antd";
import { Modal } from "antd";
import { Col, Row, Table } from "antd";
import CommonInputField from "components/common/Input";
import CommomTable from "components/common/Table";
import React, { useState } from "react";
import CampaignDetail from "../CampaignDetail";

const array = [
  "campaign",
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

const dataSource = [
  {
    key: "1",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$60.12",
    clicks: 2231,
    revenue: "$32",
    profit: 44.47,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "2",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$32.01",
    clicks: 2231,
    revenue: "$32",
    profit: 5.1,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "3",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$55.12",
    clicks: 2231,
    revenue: "$32",
    profit: 16.32,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "Highest valoume",
  },
  {
    key: "4",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$55.12",
    clicks: 2231,
    revenue: "$32",
    profit: 33.12,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "5",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$55.12",
    clicks: 2231,
    revenue: "$32",
    profit: 44,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "6",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$44",
    clicks: 2231,
    revenue: "$32",
    profit: 5.2,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "Highest valoume",
  },
  {
    key: "7",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$55.12",
    clicks: 2231,
    revenue: "$32",
    profit: 32,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "8",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$55.12",
    clicks: 2231,
    revenue: "$32",
    profit: 12,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "9",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$23.12",
    clicks: 2231,
    revenue: "$32",
    profit: 32,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "10",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$55.12",
    clicks: 2231,
    revenue: "$32",
    profit: 32,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "11",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$55.90",
    clicks: 2231,
    revenue: "$32",
    profit: 32,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "12",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$55.12",
    clicks: 2231,
    revenue: "$32",
    profit: 32,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "13",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$55.12",
    clicks: 2231,
    revenue: "$32",
    profit: 32,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "14",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$55.12",
    clicks: 2231,
    revenue: "$32",
    profit: 32,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "15",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$55.12",
    clicks: 2231,
    revenue: "$32",
    profit: 32,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "16",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$55.12",
    clicks: 2231,
    revenue: "$32",
    profit: 32,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "17",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$55.12",
    clicks: 2231,
    revenue: "$32",
    profit: 32,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "18",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$55.12",
    clicks: 2231,
    revenue: "$32",
    profit: 32,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "19",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$55.12",
    clicks: 2231,
    revenue: "$32",
    profit: 32,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "20",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$55.12",
    clicks: 2231,
    revenue: "$32",
    profit: 32,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "21",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$55.12",
    clicks: 2231,
    revenue: "$32",
    profit: 32,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
  {
    key: "22",
    campaign: "it-it-fb-cremationservices-auto-dotan",
    spend: "$55.12",
    clicks: 2231,
    revenue: "$32",
    profit: 22,
    roi: "32%",
    conversions: 32,
    cpr: "$32",
    cvr: "32%",
    rpc: "$32",
    bid: "$32",
  },
];

const columns = array.map((d) => {
  let data = {
    title: d.toUpperCase(),
    dataIndex: d,
    key: d,
  };

  if (d === "profit") {
    data.render = (profit) => {
      let color;
      if (5 < profit && profit < 6) {
        color = "red";
        return <span className={color}>{`-$${profit}`}</span>;
      } else {
        color = "green";
        return <span className={color}>{`$${profit}`}</span>;
      }
    };
  } else if (d === "campaign") {
    data.render = (id, { profit }) => {
      let color;
      if (5 < profit && profit < 6) {
        color = "background-red";
        return (
          <Space>
            <div className={`round ${color}`}></div>
            {id}
          </Space>
        );
      } else {
        color = "background-green";
        return (
          <Space>
            <div className={`round ${color}`}></div>
            {id}
          </Space>
        );
      }
    };
  }

  return data;
});

const CampaignTable = ({ show }) => {
  const [isModalOpen, setIsModalOpen] = useState({ visible: false, data: {} });

  const handleCancel = () => {
    setIsModalOpen({ visible: false, data: {} });
  };

  const handleRowClick = (data) => {
    setIsModalOpen({ visible: true, data: data });
  };

  return (
    <div>
      <div className="mb-3">
        <CommonInputField
          prefix={<FontAwesomeIcon icon={faSearch} />}
          placeholder={"Search..."}
        />
      </div>
      <CommomTable
        dataSource={dataSource}
        columns={columns}
        onRow={(record) => ({
          onClick: () => show && handleRowClick(record),
        })}
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
