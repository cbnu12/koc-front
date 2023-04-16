import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import {
  GetRecommendThemeListResponse,
  getRecommendThemeList,
} from "../../apis/home";

const useGetRecommendThemeListQuery = (
  options?: Omit<UseQueryOptions<GetRecommendThemeListResponse>, "">
) => {
  return useQuery(
    ["getRecommendThemeList"],
    ({}) => getRecommendThemeList(),
    options
  );
};

export default useGetRecommendThemeListQuery;
