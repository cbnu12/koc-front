import styles from "./NotFound.module.scss";
import classnames from "classnames/bind";
import { useNavigate } from "react-router-dom";

const cx = classnames.bind(styles);

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={cx("background")}>
      <div className={cx("text")}>잘못된 주소입니다.😢</div>
      <button className={cx("button")} onClick={() => navigate("/")}>
        홈으로 가기
      </button>
    </div>
  );
};

export default NotFound;
