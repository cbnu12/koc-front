import styles from "./FloatingButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type Props = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const FloatingButton = ({ children, onClick }: Props) => {
  return (
    <div className={cx("container")}>
      <button className={cx("button")} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default FloatingButton;
