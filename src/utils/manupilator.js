export function campaignManupilator(list = []) {
  try {
    if (list.length === 0) {
      return [];
    }

    const campaignList = [];
    for (const campaign of list) {
      const payload = {};
      payload.id = campaign?.id ?? "";
      payload.day = campaign?.day ?? "";
      payload.campaign = campaign?.name ?? "";
      payload.spend = `$${campaign?.spend ?? 0}`;
      payload.clicks = campaign?.link_clicks ?? 0;
      payload.revenue = `$${campaign?.revenue ?? 0}`;
      payload.profit =
        campaign?.profit < 0
          ? `-$${Math.abs(campaign?.profit)}`
          : `$${campaign?.profit}`;
      payload.roi = `$${campaign?.return_on_invest ?? 0}`;
      payload.conversions = campaign?.results ?? 0;
      payload.cpr = `$${campaign?.cost_per_result ?? 0}`;
      payload.cvr = campaign?.conversion_rate ?? 0;
      payload.rpc = `$${campaign?.revenue_per_click ?? 0}`;
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
