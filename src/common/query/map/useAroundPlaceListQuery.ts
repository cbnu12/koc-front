import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";
import {
  getAroundPlaceList,
  GetAroundPlacelistQueries,
  GetAroundPlaceListResponse,
} from "../../apis/map";

const useAroundPlaceListQuery = (
  { latitude, longitude }: GetAroundPlacelistQueries,
  options?: Omit<UseInfiniteQueryOptions<GetAroundPlaceListResponse>, "">
) => {
  return useInfiniteQuery(
    ["getAroundPlaceList"],
    () => getAroundPlaceList({ latitude, longitude }),
    options
  );
};

export default useAroundPlaceListQuery;
