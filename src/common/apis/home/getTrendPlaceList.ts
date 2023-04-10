import axios from "axios";
import { resultData } from "../../../configs/axios/helpers";
import apiUrls from "../urls";

export type GetTrendPlaceListResponse = {
  content: {
    name: string;
    address: string;
    descriptions: string[];
    category: string;
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

export const getTrendPlaceList = () => {
  return resultData<GetTrendPlaceListResponse>(
    axios.get(apiUrls.home.getTrendPlaceList())
  );
};
