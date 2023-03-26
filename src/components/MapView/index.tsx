import { useEffect, useRef } from "react";
import { Place } from "../../common/types";

type Props = {
  lat?: number;
  lng?: number;
  width?: string;
  height?: string;
  level?: number;
  markerList: Place[];
  onClickMarker?: (place: Place) => void;
};

const MapView = ({
  lat = 37.402056,
  lng = 127.108212,
  width = "100vw",
  height = "100vh",
  level = 5,
  markerList,
  onClickMarker,
}: Props) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.innerHTML = "";

      const options = {
        center: new kakao.maps.LatLng(lat, lng),
        level,
      };
      const map = new kakao.maps.Map(mapRef.current, options);

      const markerPoint = new kakao.maps.Marker({
        position: map.getCenter(),
        clickable: true,
      });

      if (markerList.length > 0) {
        let bounds = new kakao.maps.LatLngBounds();

        markerList.forEach((marker) => {
          const markerElement = document.createElement("div");

          markerElement.className = "marker";
          markerElement.innerHTML = marker.place_name;
          markerElement.onclick = () => {
            onClickMarker?.(marker);
          };

          const position = new kakao.maps.LatLng(marker.y, marker.x);
          const customOverlay = new kakao.maps.CustomOverlay({
            position,
            content: markerElement,
            yAnchor: 0,
            clickable: true,
          });

          bounds.extend(position);

          customOverlay.setMap(map);
        });

        map.setBounds(bounds, 50, 50, 50, 50);
      }
    }
  }, [markerList]);

  return <div id="map" style={{ width, height }} ref={mapRef} />;
};

export default MapView;
