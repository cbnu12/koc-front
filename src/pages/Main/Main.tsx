import MainView from "./Main.view";

import styles from "./Main.module.scss";
import classnames from "classnames/bind";
import MainHeader from "../../common/layout/MainHeader";

const cx = classnames.bind(styles);

const Main = () => {
  return (
    <div className={cx("background")}>
      <MainHeader />
      <MainView />
    </div>
  );
};

export default Main;
