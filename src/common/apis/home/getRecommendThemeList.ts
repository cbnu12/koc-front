import axios from "axios";
import { resultData } from "../../../configs/axios/helpers";
import apiUrls from "../urls";

export type GetRecommendThemeListResponse = {
  content: {
    name: string;
    placesCount: number;
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

export const getRecommendThemeList = () => {
  return resultData<GetRecommendThemeListResponse>(
    axios.get(apiUrls.home.getRecommendThemeList())
  );
};
