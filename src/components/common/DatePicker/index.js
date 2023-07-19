/* eslint-disable react/prop-types */
import React from "react";
import { Input } from "antd";
import { DatePicker } from "antd";

const CommonDatePicker = ({
  placeholder,
  name,
  className,
  maxLength,
  showCount,
  addonBefore,
  type,
  onChange,
  onBlur,
  value,
  errors,
  touch,
  height = "45px",
  width = "100%",
}) => {
  return (
    <div className="date-Picker-parent">
      <DatePicker
        style={{ height, width }}
        type={type}
        name={name}
        addonBefore={addonBefore}
        showCount={showCount}
        maxLength={maxLength}
        className={`common-date-input  ${className || ""}`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {errors && touch && (
        <p
          style={{
            color: "red",
            fontSize: "13px",
            marginBottom: "0",
          }}
        >
          {errors[name]}
        </p>
      )}
    </div>
  );
};

export default CommonDatePicker;
