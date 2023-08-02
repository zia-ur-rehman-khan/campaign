import { formatNumWithPrecision } from "./helper";

export function campaignManupilator(list = []) {
  try {
    if (list.length === 0) {
      return [];
    }

    const campaignList = [];
    for (const campaign of list) {
      const payload = {};
      payload.id = campaign?.id ?? "-";
      payload.day = campaign?.day ?? "-";
      payload.campaign = campaign?.name === "" ? "-" : campaign?.name;
      payload.spend = !campaign?.spend ? "-" : `$${campaign?.spend}`;
      payload.clicks = !campaign?.link_clicks ? "-" : campaign?.link_clicks;
      payload.revenue = !campaign?.revenue ? "-" : `$${campaign?.revenue}`;
      payload.profit = !campaign?.profit
        ? "-"
        : campaign?.profit < 0
        ? `-$${Math.abs(campaign?.profit)}`
        : `$${campaign?.profit}`;
      payload.roi = !campaign?.return_on_invest
        ? "-"
        : `${campaign?.return_on_invest}%`;
      payload.conversions = !campaign?.results ? "-" : campaign?.results;
      payload.cpr = !campaign?.cost_per_result
        ? "-"
        : `$${campaign?.cost_per_result}`;
      payload.cvr = !campaign?.conversion_rate
        ? "-"
        : `${campaign?.conversion_rate}%`;
      payload.rpc = !campaign?.revenue_per_click
        ? "-"
        : `$${campaign?.revenue_per_click}`;
      payload.bid = "-";
      payload.color = campaign?.profit < 0 ? "red" : "green";

      payload && campaignList.push(payload);
    }

    return campaignList;
  } catch (error) {
    console.error("campaignManupilator error --->>>> ", error);
    return [];
  }
}

export function selectManupilator(list = []) {
  try {
    if (list.length === 0) {
      return [];
    }

    const options = [];
    for (const select of list) {
      const payload = {};

      payload.label = select.name;
      payload.value = select.id;

      payload && options.push(payload);
    }

    return options;
  } catch (error) {
    console.error("selectManupilator error --->>>> ", error);
    return [];
  }
}

export function statisticsdataManipulatorObject(campaign = {}) {
  try {
    if (Object.keys(campaign).length === 0) return {};

    const payload = {};

    payload.spend = {
      amount: !campaign?.spend ? "-" : `$${campaign?.spend}`,
      per:
        campaign?.spend === null || campaign?.spend_before === null
          ? ""
          : `${formatNumWithPrecision(
              Math.abs((campaign?.spend / campaign?.spend_before) * 100),
              1
            )}%`,
      color: campaign?.spend < 0 ? "red" : "green",
      label: "Spend",
    };

    payload.revenue = {
      amount: !campaign?.revenue ? "-" : `$${campaign?.revenue}`,
      per:
        campaign?.revenue === null || campaign?.revenue_before === null
          ? ""
          : `${formatNumWithPrecision(
              Math.abs((campaign?.revenue / campaign?.revenue_before) * 100),
              1
            )}%`,
      color:
        (campaign?.revenue / campaign?.revenue_before) * 100 < 0
          ? "red"
          : "green",
      label: "Revenue",
    };

    payload.profit = {
      amount: !campaign?.profit
        ? "-"
        : campaign?.profit < 0
        ? `-$${Math.abs(campaign?.profit)}`
        : `$${campaign?.profit}`,
      per:
        campaign?.profit === null || campaign?.profit_before === null
          ? ""
          : `${formatNumWithPrecision(
              Math.abs((campaign?.profit / campaign?.profit_before) * 100),
              1
            )}%`,
      color:
        (campaign?.profit / campaign?.profit_before) * 100 < 0
          ? "red"
          : "green",
      label: "Profit",
    };

    payload.roi = {
      amount: !campaign?.return_on_invest
        ? "-"
        : `${campaign?.return_on_invest}%`,
      per:
        campaign?.return_on_invest === null ||
        campaign?.return_on_invest_before === null
          ? ""
          : `${formatNumWithPrecision(
              Math.abs(
                (campaign?.return_on_invest /
                  campaign?.return_on_invest_before) *
                  100
              ),
              1
            )}%`,
      color:
        (campaign?.return_on_invest / campaign?.return_on_invest_before) * 100 <
        0
          ? "red"
          : "green",
      label: "ROI",
    };

    payload.rpc = {
      amount: !campaign?.revenue_per_click
        ? "-"
        : `$${campaign?.revenue_per_click}`,
      per:
        campaign?.revenue_per_click === null ||
        campaign?.revenue_per_click_before === null
          ? ""
          : `${formatNumWithPrecision(
              Math.abs(
                (campaign?.revenue_per_click /
                  campaign?.revenue_per_click_before) *
                  100
              ),
              1
            )}%`,
      color:
        (campaign?.revenue_per_click / campaign?.revenue_per_click_before) *
          100 <
        0
          ? "red"
          : "green",
      label: "RPC",
    };

    payload.ctr = {
      amount: !campaign?.click_through_rate
        ? "-"
        : `${campaign?.click_through_rate}%`,
      per:
        campaign?.click_through_rate === null ||
        campaign?.click_through_rate_before === null
          ? ""
          : `${formatNumWithPrecision(
              Math.abs(
                (campaign?.click_through_rate /
                  campaign?.click_through_rate_before) *
                  100
              ),
              1
            )}%`,
      color:
        (campaign?.click_through_rate / campaign?.click_through_rate_before) *
          100 <
        0
          ? "red"
          : "green",
      label: "CTR",
    };

    return payload;
  } catch (error) {
    console.error("singleStockNameManipulator error --->>> ", error);
  }
}
