import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getHotCourseList, GetHotCourseListResponse } from "../../apis/home";

const useGetHotCourseListQuery = (
  options?: Omit<UseQueryOptions<GetHotCourseListResponse>, "">
) => {
  return useQuery(["getHotCourseList"], ({}) => getHotCourseList(), options);
};

export default useGetHotCourseListQuery;
