import { useState } from "react";
import Search from "./components/Search";
import MapView from "./Map.view";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdGpsFixed } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import styles from "./Map.module.scss";
import classnames from "classnames/bind";
import "./marker.css";

const cx = classnames.bind(styles);

const markerList = [
  {
    lat: 37.402056,
    lng: 127.108212,
    content: `<div class="marker">장소 이름</div>`,
  },
];

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
      <MapView {...position} markerList={markerList} />
    </>
  );
};

export default Map;
