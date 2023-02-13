import { useState } from "react";
import SearchAddress from "./components/SearchAddress";
import MapView from "./Map.view";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdGpsFixed } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import queryString from "query-string";

import styles from "./Map.module.scss";
import classnames from "classnames/bind";
import "./marker.css";
import { Place } from "./types";

const cx = classnames.bind(styles);

const Map = () => {
  const { search } = useLocation();
  const { keyword } = queryString.parse(search);

  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>();
  const [markerList, setMarkerList] = useState<Place[]>([]);
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState<boolean>(!!keyword);

  return (
    <>
      <header className={cx("header")}>
        <IoMdArrowRoundBack
          className={cx("button")}
          onClick={() => navigate(-1)}
        />
        <div className={cx("divider")} />
        <MdGpsFixed className={cx("button")} onClick={() => navigate(0)} />
        <div className={cx("divider")} />
        <BiSearchAlt
          className={cx("button")}
          onClick={() => setShowSearch(!showSearch)}
        />
      </header>
      {showSearch && (
        <SearchAddress
          setMapCenter={setMapCenter}
          setPosition={setMarkerList}
          onClose={() => setShowSearch(false)}
          queryKeyword={keyword as string}
        />
      )}
      <MapView {...mapCenter} markerList={markerList} />
    </>
  );
};

export default Map;
