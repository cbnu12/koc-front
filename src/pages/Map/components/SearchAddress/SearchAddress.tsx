import Search from "../../../../components/Search";

import styles from "./SearchAddress.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

type Props = {
  setPosition: (position: { lat: number; lng: number }) => void;
};

const SearchAddress = ({ setPosition }: Props) => {
  return (
    <div className={cx("container")}>
      <Search border />
    </div>
  );
};

export default SearchAddress;
