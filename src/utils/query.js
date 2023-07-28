import { useMutation, useQuery, useQueryClient } from "react-query";
import { axiosRequest } from "./webServices";

const Key = {
  getCategories: "getCategories",
  askQuestion: "askQuestion",
  getQuestions: "getQuestions",
  getCategoriesDetail: "getCatedoriesDetail",
  getQuestionDetailes: "getQuestionDetailes",
};

export const useGetCategories = () =>
  useQuery({
    queryKey: Key.getCategories,
    queryFn: () =>
      axiosRequest("get", "/private/api/social-forum/categories/").then(
        (res) => res
      ),
  });
