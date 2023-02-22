import { IoMdArrowRoundBack } from "react-icons/io";
import { MdGpsFixed } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import styles from "./Header.module.scss";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

type Props = {
  additionalIcons?: React.ReactNode[];
};

const Header = ({ additionalIcons }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={cx("header")}>
        <IoMdArrowRoundBack
          className={cx("button")}
          onClick={() => navigate(-1)}
        />
        <div className={cx("divider")} />
        <MdGpsFixed className={cx("button")} onClick={() => navigate(0)} />
        {additionalIcons?.map((icon) => (
          <>
            <div className={cx("divider")} />
            {icon}
          </>
        ))}
      </header>
    </>
  );
};

export default Header;
