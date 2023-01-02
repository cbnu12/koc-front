import React, { useEffect } from "react";

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
  marker?: { lat: number; lng: number };
};

const MapView = ({
  lat = 37.365264512305174,
  lng = 127.10676860117488,
  width = "100vw",
  height = "100vh",
  level = 3,
  marker,
}: Props) => {
  useEffect(() => {
    const container = document.getElementById("map") as HTMLElement;
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level,
    };
    const map = new kakao.maps.Map(container, options);

    const markerPoint = new kakao.maps.Marker({
      position: map.getCenter(),
    });

    if (marker) {
      const check = new kakao.maps.LatLng(marker.lat, marker.lng);
      markerPoint.setPosition(check);
    } else {
      markerPoint.setMap(map);
    }

    kakao.maps.event.addListener(map, "click", (e: any) => {
      var latlng = e.latLng;

      markerPoint.setPosition(latlng);
    });
  }, []);

  return <div id="map" style={{ width, height }}></div>;
};

export default MapView;
