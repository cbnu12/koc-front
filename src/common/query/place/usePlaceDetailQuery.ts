import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import {
  getPlaceDetail,
  GetPlaceDetailQueries,
  GetPlaceDetailResponse,
} from "../../apis/place";

const usePlaceDetailQuery = (
  { id }: GetPlaceDetailQueries,
  options?: Omit<UseQueryOptions<GetPlaceDetailResponse>, "">
) => {
  return useQuery(
    ["getPlaceDetail", id],
    ({}) => getPlaceDetail({ id }),
    options
  );
};

export default usePlaceDetailQuery;
