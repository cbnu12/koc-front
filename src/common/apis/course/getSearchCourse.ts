import axios from "axios";
import { resultData } from "../../../configs/axios/helpers";
import apiUrls from "../urls";

export type GetSearchCourseResponse = {
  totalPages: number;
  totalElements: number;
  size: number;
  content: {
    name: string;
    owner: { nickname: string };
    places: {
      id: number;
      name: string;
      address: string;
      description: string[];
      latitude: string;
      longitude: string;
    }[];
    emoji: string;
    number: number;
    sort: { empty: boolean; sorted: boolean; unsorted: boolean };
    pageable: "INSTATNCE"; // TODO
    numberOfElements: number;
    last: boolean;
    first: boolean;
    empty: boolean;
  }[];
};

type GetSearchCourseQueries = {
  keyword: string;
};

export const getSearchCourse = ({ keyword }: GetSearchCourseQueries) => {
  return resultData<GetSearchCourseResponse>(
    axios.get(apiUrls.course.getSearchCourse(), { params: { keyword } })
  );
};
