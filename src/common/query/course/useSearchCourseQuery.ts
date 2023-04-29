import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import {
  getSearchCourse,
  GetSearchCourseResponse,
  GetSearchCourseQueries,
} from "../../apis/course";

const useSearchCourseQuery = (
  { keyword }: GetSearchCourseQueries,
  options?: Omit<UseQueryOptions<GetSearchCourseResponse>, "">
) => {
  return useQuery(
    ["getSearchCourse", keyword],
    ({}) => getSearchCourse({ keyword }),
    options
  );
};

export default useSearchCourseQuery;
