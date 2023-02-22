import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { Place } from "../../common/types";
import MapView from "./Map.view";

const markerList: Place[] = [];

const PlaceDetail = () => {
  const { placeId } = useParams();

  return (
    <>
      <Header />
      <MapView markerList={markerList} />
    </>
  );
};

export default PlaceDetail;
