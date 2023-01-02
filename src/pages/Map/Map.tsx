import { useState } from "react";
import Search from "./components/Search";
import MapView from "./Map.view";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdGpsFixed } from "react-icons/md";

import styles from "./Map.module.scss";
import classnames from "classnames/bind";
import { useNavigate } from "react-router-dom";

const cx = classnames.bind(styles);

const Map = () => {
  const [position, setPosition] = useState<{ lat: number; lng: number }>();
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
      </header>
      <Search setPosition={setPosition} />
      <MapView {...position} />
    </>
  );
};

export default Map;
