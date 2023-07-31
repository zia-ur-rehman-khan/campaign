/* eslint-disable react/prop-types */
import React from "react";
import { Input } from "antd";
import { Select } from "antd";

const CommonSelect = ({
  name,
  className = "select-form",
  type,
  onChange,
  onBlur,
  value,
  errors,
  touch,
  height,
  background,
  options,
  width,
  defaultValue,
  placeholder,
  mode,
}) => {
  const { Option } = Select;

  return (
    <div className={`select-parent ${className || ""}`}>
      <Select
        mode={mode}
        placeholder={placeholder}
        defaultValue={defaultValue}
        style={{ height, background, width }}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.icon} {option.label}
          </Option>
        ))}
      </Select>
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

export default CommonSelect;
