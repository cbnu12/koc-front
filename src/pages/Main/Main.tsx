import MainView from "./Main.view";

import styles from "./Main.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const Main = () => {
  return (
    <div className={cx("background")}>
      <header className={cx("header")}>
        <div className={cx("logo")}>방방콕콕</div>
        <div>
          <button className={cx("login")}>로그인</button>
        </div>
      </header>
      <MainView />
    </div>
  );
};

export default Main;
