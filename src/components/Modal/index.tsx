import styles from "./Modal.module.scss";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

type Props = {
  isShow: boolean;
  title?: string;
  description?: string;
  useDim?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  size?: "large" | "small";
};

const Modal = ({
  onClose,
  isShow,
  useDim,
  title,
  description,
  children,
  size = "large",
}: Props) => {
  if (!isShow) {
    return <></>;
  }

  return (
    <>
      {useDim && <div className={cx("dim")} />}
      <div className={cx("container", size)}>
        {onClose && (
          <button onClick={onClose} type="button" className={cx("closeButton")}>
            ✖️
          </button>
        )}
        {title && <div className={cx("title")}>{title}</div>}
        {description && <div className={cx("description")}>{description}</div>}
        {children && <div className={cx("content")}>{children}</div>}
      </div>
    </>
  );
};

export default Modal;
