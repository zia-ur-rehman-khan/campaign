import React from "react";
import { Space } from "antd";
import CommonSelect from "components/common/Select";
import { OPTIONS, SOCIAL_OPTION } from "utils/constant";

const SelectFilters = () => {
  return (
    <Space size={20} wrap={true} className="w-100">
      <CommonSelect
        key={Math.random()}
        width={120}
        options={OPTIONS}
        defaultValue={"Daton"}
      />
      <CommonSelect
        key={Math.random()}
        width={120}
        options={SOCIAL_OPTION}
        defaultValue={"Facebook"}
      />
      <CommonSelect
        key={Math.random()}
        width={120}
        options={OPTIONS}
        defaultValue={"Tonic"}
      />
    </Space>
  );
};

export default SelectFilters;
