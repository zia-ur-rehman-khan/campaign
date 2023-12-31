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
  console.log("🚀 ~ file: index.js:12 ~ SelectFilters ~ users:", users);
  const { data: usersData } = useGetusers();
  console.log("🚀 ~ file: index.js:10 ~ SelectFilters ~ users:", usersData);

  return (
    <Space size={20} wrap={true} className="w-100">
      <CommonSelect
        key={Math.random()}
        width={120}
        options={selectManupilator(usersData)}
        mode="multiple"
        placeholder="select users"
        onChange={handleUsers}
        value={users}
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
        mode="multiple"
        placeholder="select providers"
        onChange={handleProviders}
        value={providers}
      />
    </Space>
  );
};

export default SelectFilters;
