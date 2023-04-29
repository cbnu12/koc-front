import axios from "axios";
import { resultData } from "../../../configs/axios/helpers";
import apiUrls from "../urls";

export type GetCourseDetailResponse = {
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
};

export type GetCourseDetailQueries = {
  id: string;
};

export const getCourseDetail = ({ id }: GetCourseDetailQueries) => {
  return resultData<GetCourseDetailResponse>(
    axios.get(apiUrls.course.getCourseDetail(id))
  );
};
