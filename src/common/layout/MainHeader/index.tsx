import styles from "./MainHeader.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const MainHeader = () => {
  return (
    <header className={cx("header")}>
      <div className={cx("logo")}>방방콕콕</div>
      <div>
        <button className={cx("login")} onClick={() => alert("로그인")}>
          로그인
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
