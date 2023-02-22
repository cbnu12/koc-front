import { useState } from "react";
import SearchAddress from "./components/SearchAddress";
import MapView from "./Map.view";
import { useLocation } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import queryString from "query-string";
import { Place } from "../../common/types";
import Header from "../../common/componenents/Header";

import styles from "./Map.module.scss";
import classnames from "classnames/bind";
import "./marker.css";

const cx = classnames.bind(styles);

const Map = () => {
  const { search } = useLocation();
  const { keyword } = queryString.parse(search);

  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>();
  const [markerList, setMarkerList] = useState<Place[]>([]);
  const [showSearch, setShowSearch] = useState<boolean>(!!keyword);

  return (
    <>
      <Header
        additionalIcons={[
          <BiSearchAlt
            className={cx("button")}
            onClick={() => setShowSearch(!showSearch)}
          />,
        ]}
      />
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
