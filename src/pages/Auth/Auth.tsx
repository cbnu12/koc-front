import queryString from "query-string";
import { useEffect } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { getKakaoToken } from "../../common/apis/login";
import { PageRouts } from "../../configs/paths";

const Auth = () => {
  const navigation = useNavigate();
  const { search } = useLocation();
  const { code } = queryString.parse(search);

  const getToken = async () => {
    const data = await getKakaoToken({ code: code as string });

    localStorage.setItem("token", data);
    navigation(PageRouts.main);
  };

  useEffect(() => {
    getToken();
  }, []);

  return null;
};

export default Auth;
