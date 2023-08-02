import { useMutation, useQuery, useQueryClient } from "react-query";
import { axiosRequest } from "./webServices";

export const Key = {
  CampaignOverview: "CampaignOverview",
  users: "users",
  CampaignTrend: "CampaignTrend",
  CampaignStatistics: "CampaignStatistics",
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
    params.append("date_since", range[0]);
    params.append("date_until", range[1]);
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

export const useGetCampaignTrend = (page, range, id,filter) => {
  const params = new URLSearchParams();

  if (page) {
    params.append("page", page);
  }

  if (range?.length > 0) {
    params.append("date_since", range[0]);
    params.append("date_until", range[1]);
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
    params.append("date_since", range[0]);
    params.append("date_until", range[1]);
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
