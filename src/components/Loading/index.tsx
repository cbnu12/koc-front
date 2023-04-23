import classnames from "classnames/bind";
import styles from "./Loading.module.scss";

const cx = classnames.bind(styles);

const Loading = () => {
  return (
    <section className={cx("container")}>
      <div className={cx("title")} />
      <div className={cx("subTitle")} />
      <div className={cx("content")} />
    </section>
  );
};

export default Loading;
