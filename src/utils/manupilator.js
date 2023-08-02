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
      payload.spend = campaign?.spend === 0 ? "-" : `$${campaign?.spend}`;
      payload.clicks =
        campaign?.link_clicks === 0 ? "-" : campaign?.link_clicks;
      payload.revenue = campaign?.revenue === 0 ? "-" : `$${campaign?.revenue}`;
      payload.profit =
        campaign?.profit === 0
          ? "-"
          : campaign?.profit < 0
          ? `-$${Math.abs(campaign?.profit)}`
          : `$${campaign?.profit}`;
      payload.roi =
        campaign?.return_on_invest === 0
          ? "-"
          : `$${campaign?.return_on_invest}`;
      payload.conversions = campaign?.results === 0 ? "-" : campaign?.results;
      payload.cpr =
        campaign?.cost_per_result === 0 ? "-" : `$${campaign?.cost_per_result}`;
      payload.cvr =
        campaign?.conversion_rate === 0 ? "-" : campaign?.conversion_rate;
      payload.rpc =
        campaign?.revenue_per_click === 0
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

export function stocksdataManipulatorObject(campaign = {}) {
  try {
    if (Object.keys(campaign).length === 0) return {};

    const payload = {};

    payload.spend = campaign?.spend === 0 ? "-" : `$${campaign?.spend}`;
    payload.revenue = campaign?.revenue === 0 ? "-" : `$${campaign?.revenue}`;

    payload.profit =
      campaign?.profit === 0
        ? "-"
        : campaign?.profit < 0
        ? `-$${Math.abs(campaign?.profit)}`
        : `$${campaign?.profit}`;
    payload.roi =
      campaign?.return_on_invest === 0 ? "-" : `$${campaign?.return_on_invest}`;
    payload.rpc =
      campaign?.click_through_rate === 0
        ? "-"
        : `$${campaign?.click_through_rate}`;
    payload.ctr =
      campaign?.click_through_rate === 0
        ? "-"
        : `$${campaign?.click_through_rate}`;

    return payload;
  } catch (error) {
    console.error("singleStockNameManipulator error --->>> ", error);
  }
}
