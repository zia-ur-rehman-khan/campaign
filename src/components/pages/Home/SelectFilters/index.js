import React from "react";
import { options, socialOptions } from "constant";
import { Space } from "antd";
import CommonSelect from "components/common/Select";

const SelectFilters = () => {
  return (
    <Space size={20} wrap={true} className="w-100">
      <CommonSelect
        key={Math.random()}
        width={120}
        options={options}
        defaultValue={"Daton"}
      />
      <CommonSelect
        key={Math.random()}
        width={120}
        options={socialOptions}
        defaultValue={"Facebook"}
      />
      <CommonSelect
        key={Math.random()}
        width={120}
        options={options}
        defaultValue={"Tonic"}
      />
    </Space>
  );
};

export default SelectFilters;
