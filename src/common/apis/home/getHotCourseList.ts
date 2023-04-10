import axios from "axios";
import { resultData } from "../../../configs/axios/helpers";
import apiUrls from "../urls";

export type GetHotCourseListResponse = {
  content: {
    name: string;
    createdBy: {
      id: number;
      nickName: string;
    };
    placeCount: number;
    emoji: string;
  }[];
  pageable: "INSTANCE"; // TODO
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};

export const getHotCourseList = () => {
  return resultData<GetHotCourseListResponse>(
    axios.get(apiUrls.home.getHotCourseList())
  );
};
