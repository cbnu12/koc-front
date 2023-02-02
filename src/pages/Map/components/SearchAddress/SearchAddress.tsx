import Search from "../../../../components/Search";

import styles from "./SearchAddress.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

type Props = {
  setPosition: (position: { lat: number; lng: number }) => void;
  onClose: () => void;
};

const SearchAddress = ({ setPosition, onClose }: Props) => {
  return (
    <div className={cx("container")}>
      <div className={cx("background")} onClick={onClose} />
      <Search border className={cx("input")} />
    </div>
  );
};

export default SearchAddress;
