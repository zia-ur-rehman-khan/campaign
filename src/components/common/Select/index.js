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
}) => {
  return (
    <div className={`select-parent ${className || ""}`}>
      <Select
        placeholder={placeholder}
        defaultValue={defaultValue}
        options={options}
        width={width}
        style={{ height, background }}
        type={type}
        name={name}
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

export default CommonSelect;
