/* eslint-disable react/prop-types */
import React from "react";
import { Input } from "antd";
import { prefix } from "@fortawesome/free-regular-svg-icons";

const CommonInputField = ({
  placeholder,
  name,
  label,
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
  height,
  suffix,
  prefix,
}) => {
  return (
    <div>
      <Input
        style={{ height }}
        type={type}
        name={name}
        addonBefore={addonBefore}
        showCount={showCount}
        maxLength={maxLength}
        className={`common-input  ${className || ""}`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        prefix={prefix}
        suffix={suffix}
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

export default CommonInputField;
