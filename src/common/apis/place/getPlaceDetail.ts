import axios from "axios";
import { resultData } from "../../../configs/axios/helpers";
import apiUrls from "../urls";

export type GetPlaceDetailResponse = {
  id: number;
  name: string;
  address: string;
  tel: string;
  category: string;
  description: string[];
  latitude: string;
  longitude: string;
};

export type GetPlaceDetailQueries = {
  id: string;
};

export const getPlaceDetail = ({ id }: GetPlaceDetailQueries) => {
  return resultData<GetPlaceDetailResponse>(
    axios.get(apiUrls.place.getPlaceDetail(id))
  );
};
