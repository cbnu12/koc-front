import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { Place } from "../../common/types";
import MapView from "./Map.view";
import Detail from "../../components/Detail";
import { useState } from "react";
import Information from "../../components/Information";

import classnames from "classnames/bind";
import styles from "./PlaceDetail.module.scss";
import usePlaceDetailQuery from "../../common/query/place/usePlaceDetailQuery";

const cx = classnames.bind(styles);

const place: Place = {
  address_name: "경기 성남시 분당구 백현동 532",
  category_name: "서비스,산업 > 인터넷,IT",
  id: "18577297",
  phone: "1899-1326",
  place_name: "카카오",
  place_url: "http://place.map.kakao.com/18577297",
  road_address_name: "경기 성남시 분당구 판교역로 166",
  x: "127.1104335101161",
  y: "37.39570088983171",
};

const PlaceDetail = () => {
  const { placeId } = useParams();
  const [showModal, setModal] = useState<boolean>(false);

  const { data } = usePlaceDetailQuery({ id: placeId! });

  if (!data) {
    return <>Loading...</>;
  }

  return (
    <div className={cx("container")}>
      <Header />
      <MapView
        marker={{
          address_name: data.address,
          category_name: data.category,
          id: String(data.id),
          phone: data.tel,
          place_name: data.name,
          place_url: `http://place.map.kakao.com/${data.id}`,
          road_address_name: data.address,
          x: data.latitude,
          y: data.longitude,
        }}
      />
      <Detail
        {...{
          address_name: data.address,
          category_name: data.category,
          id: String(data.id),
          phone: data.tel,
          place_name: data.name,
          place_url: `http://place.map.kakao.com/${data.id}`,
          road_address_name: data.address,
          x: data.latitude,
          y: data.longitude,
        }}
        onClick={() => setModal(true)}
      />
      {showModal && (
        <Information
          place={{
            address_name: data.address,
            category_name: data.category,
            id: String(data.id),
            phone: data.tel,
            place_name: data.name,
            place_url: `http://place.map.kakao.com/${data.id}`,
            road_address_name: data.address,
            x: data.latitude,
            y: data.longitude,
          }}
          onClose={() => setModal(false)}
          useDim
        />
      )}
    </div>
  );
};

export default PlaceDetail;
