import axios from "axios";
import { resultData } from "../../../configs/axios/helpers";
import apiUrls from "../urls";

export type GetRecommendListResponse = {
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
  return resultData<GetRecommendListResponse>(
    axios.get(apiUrls.home.getRecommendThemeList())
  );
};
