import { BiSearchAlt } from "react-icons/bi";

import styles from "./Search.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

type Props = {
  value?: string;
  onChange?: () => void;
  placeholder?: string;
  border?: boolean;
  className?: string;
};

const Search = ({
  value,
  onChange,
  placeholder = "지도를 검색해보세요",
  border,
  className,
}: Props) => {
  return (
    <div className={cx("container", border && "border", className)}>
      <input placeholder={placeholder} value={value} onChange={onChange} />
      <BiSearchAlt className={cx("icon")} />
    </div>
  );
};

export default Search;
