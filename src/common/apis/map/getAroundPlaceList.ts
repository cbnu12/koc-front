import axios from "axios";
import { resultData } from "../../../configs/axios/helpers";
import apiUrls from "../urls";

export type GetAroundPlaceListResponse = {
  totalPages: number;
  totalElements: number;
  size: number;
  content: {
    id: number;
    name: string;
    address: string;
    description: string[];
    latitude: string;
    longtitude: string;
  }[];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  pageable: "INSTANCE"; // TODO
  numberOfElements: number;
  last: boolean;
  first: boolean;
  empty: boolean;
};

type GetAroundPlacelistQueries = {
  latitude: string;
  longitude: string;
};

export const getAroundPlaceList = ({
  latitude,
  longitude,
}: GetAroundPlacelistQueries) => {
  return resultData<GetAroundPlaceListResponse>(
    axios.get(apiUrls.map.getAroundPlaceList(), {
      params: { latitude, longitude },
    })
  );
};
