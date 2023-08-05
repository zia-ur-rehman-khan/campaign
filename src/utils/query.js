import { useMutation, useQuery, useQueryClient } from "react-query";
import { axiosRequest } from "./webServices";

export const Key = {
  CampaignOverview: "CampaignOverview",
  users: "users",
  CampaignTrend: "CampaignTrend",
  CampaignStatistics: "CampaignStatistics",
  CampaignTrendStatistics: "CampaignTrendStatistics",
};

export const useGetCampaignOverview = (
  page,
  Search,
  users,
  providers,
  range,
  filter
) => {
  const params = new URLSearchParams();

  if (page) {
    params.append("page", page);
  }
  if (Search) {
    params.append("q", Search);
  }
  if (users?.length > 0) {
    users.forEach((user_id) => {
      params.append("user_ids", user_id);
    });
  }
  if (providers?.length > 0) {
    providers.forEach((provider) => {
      params.append("feed_providers", provider);
    });
  }
  if (range?.length > 0) {
    let sinceFormat = range[0].format("YYYY-MM-DD");
    let sinceuntil = range[1].format("YYYY-MM-DD");

    params.append("date_since", sinceFormat);
    params.append("date_until", sinceuntil);
  }

  if (filter?.sortBy) {
    params.append("sort_by", filter?.sortBy);
  }
  if (filter?.sort) {
    params.append("sort_order", filter?.sort);
  }

  return useQuery({
    queryKey: [Key.CampaignOverview],
    queryFn: () =>
      axiosRequest(
        "get",
        `api/v1/campaigns/overview?${params.toString()}`
      ).then((res) => res),
  });
};

export const useGetusers = () => {
  return useQuery({
    queryKey: [Key.users],
    queryFn: () => axiosRequest("get", "api/v1/users").then((res) => res),
  });
};

export const useGetCampaignTrend = (page, range, id, filter) => {
  const params = new URLSearchParams();

  if (page) {
    params.append("page", page);
  }

  if (range?.length > 0) {
    let sinceFormat = range[0].format("YYYY-MM-DD");
    let sinceuntil = range[1].format("YYYY-MM-DD");

    params.append("date_since", sinceFormat);
    params.append("date_until", sinceuntil);
  }

  if (filter?.sortBy) {
    params.append("sort_by", filter?.sortBy);
  }

  if (filter?.sort) {
    params.append("sort_order", filter?.sort);
  }
  return useQuery({
    queryKey: [Key.CampaignTrend],
    queryFn: () =>
      axiosRequest(
        "get",
        `api/v1/campaigns/${id}/trend?${params.toString()}`
      ).then((res) => res),
  });
};

export const useGetCampaignStatistics = (users, providers, range) => {
  console.log(
    "🚀 ~ file: query.js:97 ~ useGetCampaignStatistics ~ range:",
    range
  );
  const params = new URLSearchParams();

  if (users?.length > 0) {
    users.forEach((user_id) => {
      params.append("user_ids", user_id);
    });
  }
  if (providers?.length > 0) {
    providers.forEach((provider) => {
      params.append("feed_providers", provider);
    });
  }
  if (range?.length > 0) {
    let sinceFormat = range[0].format("YYYY-MM-DD");
    let sinceuntil = range[1].format("YYYY-MM-DD");

    params.append("date_since", sinceFormat);
    params.append("date_until", sinceuntil);
  }
  return useQuery({
    queryKey: [Key.CampaignStatistics],
    queryFn: () =>
      axiosRequest(
        "get",
        `api/v1/campaigns/statistics?${params.toString()}`
      ).then((res) => res),
  });
};

export const useGetCampaignTrendStatistics = (range, id) => {
  const params = new URLSearchParams();

  if (range?.length > 0) {
    let sinceFormat = range[0].format("YYYY-MM-DD");
    let sinceuntil = range[1].format("YYYY-MM-DD");

    params.append("date_since", sinceFormat);
    params.append("date_until", sinceuntil);
  }

  return useQuery({
    queryKey: [Key.CampaignTrendStatistics],
    queryFn: () =>
      axiosRequest(
        "get",
        `api/v1/campaigns/${id}/statistics?${params.toString()}`
      ).then((res) => res),
  });
};
