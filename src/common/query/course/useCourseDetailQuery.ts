import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import {
  getCourseDetail,
  GetCourseDetailResponse,
  GetCourseDetailQueries,
} from "../../apis/course";

const useCourseDetailQuery = (
  { id }: GetCourseDetailQueries,
  options?: Omit<UseQueryOptions<GetCourseDetailResponse>, "">
) => {
  return useQuery(
    ["getCourseDetail", id],
    ({}) => getCourseDetail({ id }),
    options
  );
};

export default useCourseDetailQuery;
