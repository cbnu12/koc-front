import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { GetTrendPlaceListResponse, getTrendPlaceList } from "../../apis/home";

const getTrendPlaceListQuery = (
  options?: Omit<UseQueryOptions<GetTrendPlaceListResponse>, "">
) => {
  return useQuery(["getTrendPlaceList"], ({}) => getTrendPlaceList(), options);
};

export default getTrendPlaceListQuery;
