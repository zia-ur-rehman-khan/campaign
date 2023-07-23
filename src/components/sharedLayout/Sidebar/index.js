import { Space } from "antd";
import CommonTextField from "components/common/TextField";
import React, { useState } from "react";
import { ANAYLTICS_ROUTE, HOME_ROUTE } from "constant";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import {
  faHome,
  faNewspaper,
  faCalendar,
  faGear,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Layout } from "antd";
import { Menu } from "antd";

const MENU_LIST = [
  {
    label: "Campaign",
    key: "1",
    icon: <FontAwesomeIcon icon={faHome} />,
    route: HOME_ROUTE,
  },
  {
    label: "Analytic & insights",
    key: "2",
    icon: <FontAwesomeIcon icon={faChartSimple} />,
    route: ANAYLTICS_ROUTE,
  },
  {
    label: "Offers",
    key: "3",
    icon: <FontAwesomeIcon icon={faNewspaper} />,
    route: ANAYLTICS_ROUTE,
  },
  {
    label: "Campaign creator",
    key: "4",
    icon: <FontAwesomeIcon icon={faCalendar} />,
    route: ANAYLTICS_ROUTE,
  },
  {
    label: "Settings",
    key: "5",
    icon: <FontAwesomeIcon icon={faGear} />,
    route: ANAYLTICS_ROUTE,
  },
  {
    label: "Affiliate manager",
    key: "6",
    icon: <FontAwesomeIcon icon={faUserGroup} />,
    route: ANAYLTICS_ROUTE,
  },
];

const Sidebar = ({ show }) => {
  const { pathname } = useRouter();
  const [collapsed, setCollapsed] = useState(true);
  const { Sider } = Layout;

  return (
    <Sider
      className="web-slider"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      trigger={!show && null}
    >
      <Menu defaultSelectedKeys={["1"]} mode="inline" items={MENU_LIST} />
    </Sider>
  );
};

export default Sidebar;
