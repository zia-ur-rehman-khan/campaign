import { DatePicker } from "antd";
import { Space } from "antd";
import CommonTextField from "components/common/TextField";
import React, { useState } from "react";

const { RangePicker } = DatePicker;
const array = ["Today", "Yesterday", "Last month"];

const DateFilters = ({ handleRange }) => {
  const [filter, setFilter] = useState("Yesterday");

  return (
    <Space
      size={20}
      wrap={true}
      className="w-100 justify-content-between datefilter-main"
    >
      <Space size={0}>
        {array.map((t) => {
          return (
            <div
              className={`filter-button ${t === filter && "active"}`}
              key={Math.random()}
              onClick={() => setFilter(t)}
            >
              <CommonTextField text={t} />
            </div>
          );
        })}
      </Space>
      <RangePicker onChange={handleRange} />
    </Space>
  );
};

export default DateFilters;
