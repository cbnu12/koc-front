import { useEffect, useRef, useState } from "react";
import { Place } from "../../common/types";

import classnames from "classnames/bind";
import styles from "./Map.module.scss";
import Detail from "../../components/Detail";

const cx = classnames.bind(styles);

declare global {
  interface Window {
    kakao: any;
  }
  const kakao: any;
}

type Props = {
  lat?: number;
  lng?: number;
  width?: string;
  height?: string;
  level?: number;
  markerList: Place[];
  setMapCenter: (center: { lat: number; lng: number }) => void;
};

const MapView = ({
  lat = 37.402056,
  lng = 127.108212,
  width = "100vw",
  height = "100vh",
  level = 3,
  markerList,
  setMapCenter,
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
      mapRef.current.innerHTML = "";

      const setting = (currentPosition: any) => {
        const options = {
          center: currentPosition ?? new kakao.maps.LatLng(lat, lng),
          level,
        };
        const map = new kakao.maps.Map(mapRef.current, options);

        const markerPoint = new kakao.maps.Marker({
          position: map.getCenter(),
          clickable: true,
        });

        if (markerList.length > 0) {
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
      };

      if (navigator.geolocation) {
        let currentPosition;

        navigator.geolocation.getCurrentPosition(function (position) {
          const lat = position.coords.latitude; // 위도
          const lng = position.coords.longitude; // 경도

          currentPosition = new kakao.maps.LatLng(lat, lng); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

          setMapCenter({ lat, lng });
          setting(currentPosition);
        });
      }
    }
  }, [markerList]);

  return (
    <div className={cx("container")}>
      <div id="map" style={{ width, height }} ref={mapRef}></div>
      {detail && <Detail {...detail} />}
    </div>
  );
};

export default MapView;
