// import { useQueryClient } from "react-query";

// return the user data from the session storage
export const getUser = () => {
  const userStr = sessionStorage?.getItem("user");
  if (userStr) return JSON?.parse(userStr);
  else return null;
};

// return the token from the session storage
export const getToken = () => {
  return sessionStorage?.getItem("token") || null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage?.removeItem("token");
  sessionStorage?.removeItem("user");
};

// set the token and user from the session storage
export const setUserSession = (token, user) => {
  sessionStorage?.setItem("token", token);
  sessionStorage?.setItem("user", JSON?.stringify(user));
};

// export const APIEndpoint = "http://161.35.62.226:8000";

//get current api data just pass the key

// export const getCurrentData = (name) => {
//   const queryClient = useQueryClient();

//   return queryClient.getQueryData(name);
// };

//common api call
