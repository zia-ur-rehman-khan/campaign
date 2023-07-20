import { Space } from "antd";
import CommonTextField from "components/common/TextField";
import React from "react";
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

const MENU_LIST = [
  {
    title: "Campaign",
    src: <FontAwesomeIcon icon={faHome} />,
    route: HOME_ROUTE,
  },
  {
    title: "Analytic & insights",
    src: <FontAwesomeIcon icon={faChartSimple} />,
    route: ANAYLTICS_ROUTE,
  },
  {
    title: "Offers",
    src: <FontAwesomeIcon icon={faNewspaper} />,
    route: ANAYLTICS_ROUTE,
  },
  {
    title: "Campaign creator",
    src: <FontAwesomeIcon icon={faCalendar} />,
    route: ANAYLTICS_ROUTE,
  },
  {
    title: "Settings",
    src: <FontAwesomeIcon icon={faGear} />,
    route: ANAYLTICS_ROUTE,
  },
  {
    title: "Affiliate manager",
    src: <FontAwesomeIcon icon={faUserGroup} />,
    route: ANAYLTICS_ROUTE,
  },
];

const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <div className="sidebar-main">
      <Space direction="vertical" className="w-100">
        {MENU_LIST?.map((t, i) => (
          <Space
            className={`sidebar-list-item c-pointer ${
              pathname === t.route ? "active" : ""
            }`}
            key={i}
            onClick={() => changeRoute(t?.route)}
          >
            {t.src}
            <CommonTextField text={t.title} />
          </Space>
        ))}
      </Space>
    </div>
  );
};

export default Sidebar;
