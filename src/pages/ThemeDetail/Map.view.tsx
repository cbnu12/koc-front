import { useEffect, useRef, useState } from "react";
import { Place } from "../../common/types";

import classnames from "classnames/bind";
import styles from "./ThemeDetail.module.scss";

const cx = classnames.bind(styles);

type Props = {
  lat?: number;
  lng?: number;
  width?: string;
  height?: string;
  level?: number;
  markerList: Place[];
};

const MapView = ({
  lat = 37.402056,
  lng = 127.108212,
  width = "100vw",
  height = "100vh",
  level = 3,
  markerList,
}: Props) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [detail, setDetail] = useState<Place | null>(null);

  const onClickMarker = (marker: Place) => {
    if (detail) {
      setDetail(null);
    } else {
      setDetail({ ...marker });
    }
  };

  useEffect(() => {
    if (mapRef.current) {
      const options = {
        center: new kakao.maps.LatLng(lat, lng),
        level,
      };
      const map = new kakao.maps.Map(mapRef.current, options);

      const markerPoint = new kakao.maps.Marker({
        position: map.getCenter(),
        clickable: true,
      });

      if (markerList) {
        markerList.forEach((marker) => {
          const markerElement = document.createElement("div");

          markerElement.className = "marker";
          markerElement.innerHTML = marker.place_name;
          markerElement.onclick = () => {
            onClickMarker(marker);
          };
          const customOverlay = new kakao.maps.CustomOverlay({
            position: new kakao.maps.LatLng(marker.y, marker.x),
            content: markerElement,
            yAnchor: 0,
            clickable: true,
          });

          customOverlay.setMap(map);
        });
      } else {
        markerPoint.setMap(map);
      }

      kakao.maps.event.addListener(map, "click", (e: any) => {
        var latlng = e.latLng;
        markerPoint.setPosition(latlng);
      });
    }
  }, []);

  return (
    <>
      <div id="map" style={{ width, height }} ref={mapRef}></div>
    </>
  );
};

export default MapView;
