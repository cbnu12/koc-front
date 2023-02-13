import React, { useEffect, useRef, useState } from "react";
import { Place } from "./types";
import { MdPhoneIphone } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";

import classnames from "classnames/bind";
import styles from "./Map.module.scss";

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
  // markerList: { lat: number; lng: number; content: string }[];
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
  const [detail, setDetail] = useState<Place | undefined>();

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
            if (detail) {
              setDetail(undefined);
            } else {
              setDetail(marker);
            }
          };
          const customOverlay = new kakao.maps.CustomOverlay({
            position: new kakao.maps.LatLng(marker.y, marker.x),
            content: markerElement,
            yAnchor: 0,
            clickable: true,
          });

          kakao.maps.event.addListener(customOverlay, "click", (e: any) => {
            console.log("!", e);
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
  }, [markerList]);

  return (
    <>
      <div id="map" style={{ width, height }} ref={mapRef}></div>
      {detail && (
        <div className={cx("container")}>
          <div className={cx("title")}>
            <div className={cx("titleSection")}>
              <div className={cx("name")}>{detail.place_name}</div>
              <div className={cx("category")}>{detail.category_name}</div>
            </div>
            <a className={cx("url")} href={detail.place_url} target="_blank">
              <FiExternalLink size={22} />
            </a>
          </div>
          <div className={cx("address")}>
            <HiLocationMarker size={20} />
            <div className={cx("addressInformation")}>
              {detail.road_address_name}
              <br />
              {detail.address_name}
            </div>
          </div>
          <div className={cx("phone")}>
            <MdPhoneIphone size={20} />
            <a href={`tel:${detail.phone}`}>{detail.phone}</a>
          </div>
        </div>
      )}
    </>
  );
};

export default MapView;
