import axios from "axios";
import { CURRENT_USER_LOCAL_STORAGE_KEY } from "./constant";
import { useQueryClient } from "react-query";

export const APIEndpoint = "http://54.67.36.132";

export const useGetCurrentData = (name) => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData(name);
};

export const axiosRequest = async (method, urlPath, data) => {
  // const userJson = localStorage?.getItem(CURRENT_USER_LOCAL_STORAGE_KEY);
  // const user = userJson && JSON?.parse(userJson);

  const username = "admin";
  const password = "MZhOTOOwY3ZDTNW2DUFcYh0ilNzd";

  const axiosInstance = axios.create({
    baseURL: APIEndpoint,
    timeout: 50000,

    headers: {
      accept: `application/json`,
      "Content-Type": "multipart/form-data",
      // Authorization: user?.token ? `Bearer ${user.token}` : "",
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
  });

  try {
    const res = await axiosInstance({
      method,
      url: urlPath,
      data,
    });
    return res.data;
  } catch (err) {
    throw err.message;
  }
};
