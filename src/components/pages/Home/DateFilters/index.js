import { DatePicker } from "antd";
import { Space } from "antd";
import CommonTextField from "components/common/TextField";
import moment from "moment";
import React, { useState } from "react";
import { DATE_OPTIONS } from "utils/constant";

const { RangePicker } = DatePicker;

const DateFilters = ({ handleRange, range }) => {
  console.log("🚀 ~ file: index.js:10 ~ DateFilters ~ range:", range);
  return (
    <Space
      size={20}
      wrap={true}
      className="w-100 justify-content-between datefilter-main"
    >
      <Space size={0}>
        {DATE_OPTIONS.map((t) => {
          return (
            <div
              className={`filter-button ${t === range && "active"}`}
              key={Math.random()}
              onClick={() => handleRange("date", t)}
            >
              <CommonTextField text={t} />
            </div>
          );
        })}
      </Space>
      <RangePicker onChange={handleRange} value={range} />
    </Space>
  );
};

export default DateFilters;
