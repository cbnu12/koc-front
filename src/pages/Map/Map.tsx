import { useState } from "react";
import SearchAddress from "./components/SearchAddress";
import MapView from "./Map.view";
import { useLocation } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import queryString from "query-string";
import { Place } from "../../common/types";
import Header from "../../components/Header";

import styles from "./Map.module.scss";
import classnames from "classnames/bind";
import "./marker.css";
import useAroundPlaceListQuery from "../../common/query/map/useAroundPlaceListQuery";

const cx = classnames.bind(styles);

const Map = () => {
  const { search } = useLocation();
  const { keyword } = queryString.parse(search);

  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>({
    lat: 37.402056,
    lng: 127.108212,
  });
  const [markerList, setMarkerList] = useState<Place[]>([]);
  const [showSearch, setShowSearch] = useState<boolean>(!!keyword);

  const { data } = useAroundPlaceListQuery(
    {
      latitude: String(mapCenter.lat),
      longitude: String(mapCenter.lng),
    },
    {
      onSuccess: ({ pages }) => {
        if (pages[0].content.length > 0) {
          setShowSearch(true);
        }
      },
    }
  );

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
      <MapView
        {...mapCenter}
        markerList={markerList}
        setMapCenter={setMapCenter}
      />
    </>
  );
};

export default Map;
