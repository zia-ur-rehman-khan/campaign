import { DatePicker } from "antd";
import { Space } from "antd";
import CommonTextField from "components/common/TextField";
import moment from "moment";
import React, { useState } from "react";
import { DATE_OPTIONS } from "utils/constant";

const { RangePicker } = DatePicker;

const DateFilters = ({ handleRange, range }) => {
  console.log("🚀 ~ file: index.js:10 ~ DateFilters ~ range:", range);

  const handelClass = (dateString) => {
    if (dateString === "Today") {
      const today = moment();
      const differenceInDays = range[0]?.diff(today, "days");
      return differenceInDays === 0 && "Today";
    } else if (dateString === "Yesterday") {
      const today = moment();
      const yesterday = today.subtract(1, "days");
      return range[0]?.isSame(yesterday, "day") && "Yesterday";
    } else if (dateString === "Last 7 days") {
      const today = moment();
      const lastDate = today.subtract(7, "days");

      return (
        range[0]?.isSame(lastDate, "day") &&
        range[1]?.isSame(moment(), "day") &&
        "Last 7 days"
      );
    }
  };

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
              className={`filter-button ${
                range ? handelClass(t) === t && "active" : ""
              }`}
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
