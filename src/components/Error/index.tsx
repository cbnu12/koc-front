import classnames from "classnames/bind";
import styles from "./Error.module.scss";

const cx = classnames.bind(styles);

const Error = () => {
  return <section className={cx("container")}>에러가 발생하였습니다.</section>;
};

export default Error;
