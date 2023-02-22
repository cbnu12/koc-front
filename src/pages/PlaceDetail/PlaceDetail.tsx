import { useParams } from "react-router-dom";

const PlaceDetail = () => {
  const { placeId } = useParams();

  return <>{placeId}</>;
};

export default PlaceDetail;
