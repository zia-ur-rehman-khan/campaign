import { faSearch, faGear } from "@fortawesome/free-solid-svg-icons";
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
import CommonDropdown from "components/common/CommonDropdown";
import { Checkbox } from "antd";
import CommonCheckBox from "components/common/Fields/CommonCheckBox";

const CampaignTable = ({
  show,
  campaignData,
  handlePaginationChange,
  page,
  handleSearch,
  isFetching,
}) => {
  const [isModalOpen, setIsModalOpen] = useState({ visible: false, data: {} });
  const [visible, setVisible] = useState(false);

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
      !columnsd.some((i) => i.value === "campaign") &&
        setColumns((pre) => [
          { label: "Campaign", value: "campaign", show: true },
          ...pre,
        ]);
    } else {
      !columnsd.some((i) => i.value === "day") &&
        setColumns((pre) => [
          { label: "Day", value: "day", show: true },
          ...pre,
        ]);
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

  const columns = columnsd?.map((d, ind) => {
    let data = {
      title: d?.label?.toUpperCase(),
      dataIndex: d.value,
      key: d.value,
      className: d.show ? "" : "hide-column",
      sortDirections: ["ascend", "descend"],
    };

    data["sorter"] = {
      compare: (a, b) => {
        const aValue = a?.[d?.value];
        const bValue = b?.[d?.value];

        if (typeof aValue === "number" && typeof bValue === "number") {
          return aValue - bValue;
        }

        return aValue == "-" || bValue == "-" || !aValue || !bValue
          ? -1
          : a?.[d?.value]?.localeCompare(b?.[d?.value]);
      },
      multiple: ind + 1,
    };

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

    if (d.value === "profit") {
      data.render = (profit, { color }) => {
        return <span className={color}>{profit}</span>;
      };
    }

    return data;
  });

  const columnVisiblityHandler = (ind) => () => {
    setColumns((p) =>
      p.map((item, i) =>
        ind == i
          ? {
              ...item,
              show: !item["show"],
            }
          : item
      )
    );
  };

  return (
    <div>
      <Row
        className="mb-3"
        gutter={[15]}
        align={"middle"}
        justify="space-between"
      >
        <Col span={23}>
          {show && (
            <div>
              <CommonInputField
                onChange={(e) => handleSearch(e.target.value)}
                prefix={<FontAwesomeIcon icon={faSearch} />}
                placeholder={"Search..."}
              />
            </div>
          )}
        </Col>
        <Col>
          <CommonDropdown
            open={visible}
            overlayClassName={"column-visibility-menu"}
            onOpenChange={() => setVisible(!visible)}
            items={columnsd.map((col, ind) => ({
              key: ind.toString(),
              label: (
                <CommonCheckBox
                  label={col["label"]}
                  checked={col["show"]}
                  onChange={columnVisiblityHandler(ind)}
                />
              ),
              onClick: columnVisiblityHandler(ind),
            }))}
          >
            <FontAwesomeIcon
              icon={faGear}
              onClick={() => setVisible(!visible)}
            />
          </CommonDropdown>
        </Col>
      </Row>
      <CommomTable
        loading={isFetching}
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
