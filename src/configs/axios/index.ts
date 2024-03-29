import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

/**
 * 토큰이 필요한 요청인데 토큰이 없는 경우,
 * 잘못된 요청이라는 안내 메세지 노출
 *
 * 해당 요청을 취소하고, 로그인 페이지로 안내
 */
const requestOnFullFilled = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  // TODO: axios에 토큰이 필요한데 토큰이 없는 경우, 에러 발생 시키기
  // 토큰이 필요 없는 경우, 로그인, 회원가입, 비밀번호 찾기
  if (config.headers) {
    const token = config.headers["Authorization"];
    if (!token) {
      // TODO: 에러 제어 위치 수정
      // throw new Error("인증 시간 만료로 인해 재 로그인을 진행해주세요.");
    }
  }
  return config;
};

/**
 * 1. 토큰을 새로 발급하라는 에러가 내려온 경우,
 * 토큰 리프레쉬 요청을 보내고, 새로 발급 받은 토큰으로
 * 기존 재요청 수행
 *
 * 2. response.data.result 값을 기준으로 AxiosError 발생
 */
const responseOnFullFilled = async (
  response: AxiosResponse
): Promise<AxiosResponse> => {
  // TODO: 토큰 새로 발급이 필요한 경우 처리 로직 케이스 추가
  if (response.status === 200) {
    console.log("API SUCCESS", response);
    return { ...response, data: response.data };
  } else {
    console.log("API ERROR", response);
    throw new AxiosError(
      response.data.error.message,
      response.data.error.code,
      response.config,
      response.request,
      response
    );
  }
};

/**
 * 여기에 감지 되는 에러는
 * 서버에서 의도적으로 발생시킨 에러가 아니라
 * 예상하지 못한 에러일 경우.
 *
 * GlobalErrorBoundary에서 처리할 에러 발생
 */
const responseOnRejected = async (error: AxiosError): Promise<AxiosError> => {
  return error;
};

const initAxios = () => {
  axios.defaults.headers["Authorization"] = localStorage.getItem("accessToken");

  axios.interceptors.request.use(requestOnFullFilled);
  axios.interceptors.response.use(responseOnFullFilled, responseOnRejected);
};

export default initAxios;
