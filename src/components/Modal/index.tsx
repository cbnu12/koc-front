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
};

const Modal = ({
  onClose,
  isShow,
  useDim,
  title,
  description,
  children,
}: Props) => {
  if (!isShow) {
    return <></>;
  }

  return (
    <>
      {useDim && <div className={cx("dim")} />}
      <div className={cx("container")}>
        {onClose && (
          <button onClick={onClose} type="button" className={cx("closeButton")}>
            닫기
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
