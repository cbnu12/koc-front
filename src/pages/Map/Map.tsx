import { useState } from "react";
import Search from "./components/Search";
import MapView from "./Map.view";

const Map = () => {
  const [position, setPosition] = useState<{ lat: number; lng: number }>();

  return (
    <>
      <Search setPosition={setPosition} />
      <MapView {...position} />
    </>
  );
};

export default Map;
