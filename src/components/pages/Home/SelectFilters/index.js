import React from "react";
import { Space } from "antd";
import CommonSelect from "components/common/Select";
import { OPTIONS, SOCIAL_OPTION } from "utils/constant";
import Loader from "components/common/Loader";
import { useGetCategories, useGetusers } from "utils/query";
import { selectManupilator } from "utils/manupilator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SelectFilters = ({ handleUsers, users, handleProviders, providers }) => {
  const { data: usersData } = useGetusers();

  return (
    <Space size={20} wrap={true} className="w-100 align-items-start">
      <CommonSelect
        key={Math.random()}
        options={selectManupilator(usersData)}
        mode="multiple"
        placeholder="select users"
        onChange={handleUsers}
        value={users}
      />
      <CommonSelect
        key={Math.random()}
        mode="multiple"
        options={SOCIAL_OPTION}
        defaultValue={"Facebook"}
      />
      <CommonSelect
        key={Math.random()}
        options={OPTIONS}
        mode="multiple"
        placeholder="select providers"
        onChange={handleProviders}
        value={providers}
      />
    </Space>
  );
};

export default SelectFilters;
