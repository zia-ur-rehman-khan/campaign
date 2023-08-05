export const HOME_ROUTE = "/";
export const ANAYLTICS_ROUTE = "/anaytics";
export const CURRENT_USER_LOCAL_STORAGE_KEY = "user";
import Image from "next/image";
import fb from "../../public/fb.png";

export const OPTIONS = [
  {
    value: "tonic",
    label: "Tonic",
    iconUrl: "https://publisher.tonic.com/favicon.ico",
  },
  {
    value: "system1",
    label: "System 1",
    iconUrl: "https://partner.system1.com/favicon.ico",
  },
];

export const SOCIAL_OPTION = [
  {
    value: "Facebook",
    label: "Facebook",
    icon: <Image src={fb} width={20} height={20} alt="icon" />,
  },
];

export const CARD_LIST = [
  {
    name: "Spend",
    amount: "$5306.29",
    chg: "1.3%",
    color: "red",
  },
  {
    name: "Revenue",
    amount: "$6489.77",
    chg: "5.3%",
    color: "green",
  },
  {
    name: "Profit",
    amount: "$1183.57",
    chg: "2.3%",
    color: "green",
  },
  {
    name: "ROI",
    amount: "$122.30",
    chg: "1.2%",
    color: "green",
  },
  {
    name: "RPC",
    amount: "$0.0621",
    chg: "2.3%",
    color: "green",
  },
  {
    name: "CTR",
    amount: "$31.2%",
    chg: "1.1%",
    color: "green",
  },
];

export const SORT_BY = [
  {
    label: "Campaign",
    value: "name",
  },
  {
    label: "Status",
    value: "status",
  },
  {
    label: "Spend",
    value: "spend",
  },
  {
    label: "Results",
    value: "results",
  },
  {
    label: "Link Clicks",
    value: "link_clicks",
  },
  {
    label: "Clicks",
    value: "clicks",
  },
  {
    label: "Impressions",
    value: "impressions",
  },
  {
    label: "Reach",
    value: "reach",
  },
  {
    label: "Conversions",
    value: "conversions",
  },
  {
    label: "Revenue",
    value: "revenue",
  },
  {
    label: "Profit",
    value: "profit",
  },
  {
    label: "Return On Invest",
    value: "return_on_invest",
  },
  {
    label: "Cost Per Result",
    value: "cost_per_result",
  },
  {
    label: "Conversion Rate",
    value: "conversion_rate",
  },
  {
    label: "Revenue Per Click",
    value: "revenue_per_click",
  },
  {
    label: "Click Through Rate",
    value: "click_through_rate",
  },
];

export const DATE_OPTIONS = ["Today", "Yesterday", "Last 7 days"];
