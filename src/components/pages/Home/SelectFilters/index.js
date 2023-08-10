import React from "react";
import { Space } from "antd";
import CommonSelect from "components/common/Select";
import { OPTIONS, SOCIAL_OPTION } from "utils/constant";
import Loader from "components/common/Loader";
import { useGetCategories, useGetusers } from "utils/query";
import { selectManupilator } from "utils/manupilator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SelectFilters = ({
  handleUsers,
  users,
  handleProviders,
  providers,
  handlePlatforms,
  Platforms,
}) => {
  const { data: usersData } = useGetusers();

  return (
    <Space size={20} wrap={true} className="w-100 align-items-start">
      <CommonSelect
        options={selectManupilator(usersData)}
        mode="multiple"
        placeholder="Users"
        onChange={handleUsers}
        value={users}
      />
      <CommonSelect
        options={SOCIAL_OPTION}
        mode="multiple"
        placeholder={"Buying platforms"}
        onChange={handlePlatforms}
        value={Platforms}
      />
      <CommonSelect
        options={OPTIONS}
        mode="multiple"
        placeholder="Feed providers"
        onChange={handleProviders}
        value={providers}
      />
    </Space>
  );
};

export default SelectFilters;
