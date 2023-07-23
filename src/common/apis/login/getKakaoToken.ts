import axios from "axios";
import { resultData } from "../../../configs/axios/helpers";
import apiUrls from "../urls";

export type GetKakaoTokenResponse = string;

export type GetKakaoTokenParams = {
  code: string;
};

export const getKakaoToken = ({ code }: GetKakaoTokenParams) => {
  return resultData<GetKakaoTokenResponse>(
    axios.get(apiUrls.login.getKakaoToken(), { params: { code } })
  );
};
