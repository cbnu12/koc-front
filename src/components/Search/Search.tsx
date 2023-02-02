import { BiSearchAlt } from "react-icons/bi";

import styles from "./Search.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

type Props = {
  value?: string;
  onChange?: () => void;
  placeholder?: string;
  border?: boolean;
};

const Search = ({
  value,
  onChange,
  placeholder = "지도를 검색해보세요",
  border,
}: Props) => {
  return (
    <div className={cx("container", border && "border")}>
      <input placeholder={placeholder} value={value} onChange={onChange} />
      <BiSearchAlt className={cx("icon")} />
    </div>
  );
};

export default Search;
