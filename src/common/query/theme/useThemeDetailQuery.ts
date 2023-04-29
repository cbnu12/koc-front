import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import {
  getThemeDetail,
  GetThemeDetailQueries,
  GetThemeDetailResponse,
} from "../../apis/theme";

const useThemeDetailQuery = (
  { keyword }: GetThemeDetailQueries,
  options?: Omit<UseQueryOptions<GetThemeDetailResponse>, "">
) => {
  return useQuery(
    ["getThemeDetail", keyword],
    ({}) => getThemeDetail({ keyword }),
    options
  );
};

export default useThemeDetailQuery;
