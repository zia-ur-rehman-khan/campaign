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
import { Popover } from "antd";
import { Tooltip } from "antd";
import moment from "moment";

const CampaignTable = ({
  show,
  campaignData,
  handlePaginationChange,
  page,
  handleSearch,
  isFetching,
  setFilter,
}) => {
  const [isModalOpen, setIsModalOpen] = useState({ visible: false, data: {} });
  const [visible, setVisible] = useState(false);

  const [columnsd, setColumns] = useState([
    { label: "Spend", value: "spend", show: true, sortBy: "spend" },
    { label: "Clicks", value: "clicks", show: true, sortBy: "link_clicks" },
    { label: "Revenue", value: "revenue", show: true, sortBy: "revenue" },
    { label: "Profit", value: "profit", show: true, sortBy: "profit" },
    { label: "ROI", value: "roi", show: true, sortBy: "return_on_invest" },
    {
      label: "Conversions",
      value: "conversions",
      show: true,
      sortBy: "results",
    },
    {
      label: "Impressions",
      value: "impressions",
      show: false,
      sortBy: "impressions",
    },
    { label: "CPR", value: "cpr", show: true, sortBy: "cost_per_result" },
    { label: "CVR", value: "cvr", show: true, sortBy: "conversion_rate" },
    { label: "RPC", value: "rpc", show: true, sortBy: "revenue_per_click" },
    { label: "CTR", value: "ctr", show: false, sortBy: "click_through_rate" },
    { label: "BID", value: "bid", show: true, sortBy: "" },
    {
      label: "Time",
      value: "time",
      show: false,
      sortBy: "created_time",
    },
  ]);
  const cache = useQueryClient();

  const { data, total, size } = campaignData || {};

  useEffect(() => {
    if (show) {
      !columnsd.some((i) => i.value === "campaign") &&
        setColumns((pre) => [
          { label: "Campaign", value: "campaign", show: true, sortBy: "name" },
          ...pre,
        ]);
    } else {
      !columnsd.some((i) => i.value === "day") &&
        setColumns((pre) => [
          { label: "Day", value: "day", show: true, sortBy: "day" },
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
      sorter: true,
      sortBy: d.sortBy,
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

    if (d.value === "time") {
      data.render = (time) => {
        return (
          <Tooltip title={moment(time).format("MMM DD, yyyy, h:mm A")}>
            <span>{moment(time).format("MMM DD, yyyy")}</span>
          </Tooltip>
        );
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

  const handleTableChange = (pagination, filters, sorter) => {
    // 'sorter' contains the sorting information
    console.log(sorter, "sorter");

    if (sorter && sorter.field && sorter.order) {
      const field = sorter.column.sortBy;
      let order;
      if (sorter.order === "descend") {
        order = "desc";
      } else {
        order = "asc";
      }
      setFilter({ sort: order, sortBy: field });
    } else {
      setFilter({ sort: null, sortBy: null });
    }
  };

  return (
    <div>
      <Row className="mb-3" align={"middle"}>
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
        <Col
          span={1}
          className="d-flex align-items-center justify-content-center"
        >
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
              className="c-pointer"
              icon={faGear}
              onClick={() => setVisible(!visible)}
            />
          </CommonDropdown>
        </Col>
      </Row>
      <CommomTable
        onChange={handleTableChange}
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
