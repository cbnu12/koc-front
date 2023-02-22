import { useParams } from "react-router-dom";
import Header from "../../common/componenents/Header";
import { Place } from "../../common/types";
import MapView from "./Map.view";

const markerList: Place[] = [];

const ThemeDetail = () => {
  const { themeId } = useParams();

  return (
    <>
      <Header />
      <MapView markerList={markerList} />
    </>
  );
};

export default ThemeDetail;
