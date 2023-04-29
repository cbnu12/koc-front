import axios from "axios";
import { resultData } from "../../../configs/axios/helpers";
import apiUrls from "../urls";

export type GetThemeDetailResponse = {
  totalPages: number;
  totalElements: number;
  size: number;
  content: {
    name: string;
    places: {
      id: number;
      name: string;
      address: string;
      description: string[];
      latitude: string;
      longtitude: string;
    }[];
  }[];
  number: number;
  sort: { empty: boolean; sorted: boolean; unsorted: boolean };
  pageable: "INSTANCE"; // TODO
  numberOfElements: number;
  last: boolean;
  first: boolean;
  empty: boolean;
};

type GetThemeDetailQueries = {
  keyword: string;
};

export const getThemeDetail = ({ keyword }: GetThemeDetailQueries) => {
  return resultData<GetThemeDetailResponse>(
    axios.get(apiUrls.theme.getThemeDetail(), { params: { keyword } })
  );
};
