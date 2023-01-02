import React, { useEffect, useRef } from "react";

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
  markerList?: { lat: number; lng: number; content: string }[];
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

  useEffect(() => {
    if (mapRef.current) {
      const options = {
        center: new kakao.maps.LatLng(lat, lng),
        level,
      };
      const map = new kakao.maps.Map(mapRef.current, options);

      const markerPoint = new kakao.maps.Marker({
        position: map.getCenter(),
      });

      if (markerList) {
        markerList.forEach((marker) => {
          const customOverlay = new kakao.maps.CustomOverlay({
            map,
            position: new kakao.maps.LatLng(marker.lat, marker.lng),
            content: marker.content,
            yAnchor: 0,
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

  return <div id="map" style={{ width, height }} ref={mapRef}></div>;
};

export default MapView;
