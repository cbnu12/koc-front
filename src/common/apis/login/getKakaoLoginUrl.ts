import axios from "axios";
import { resultData } from "../../../configs/axios/helpers";
import apiUrls from "../urls";

export type GetKakaoLoginUrlResponse = string;

export const getKakaoLoginUrl = () => {
  return resultData<GetKakaoLoginUrlResponse>(
    axios.get(apiUrls.login.getKakaoLoginUrl())
  );
};
