import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { Place } from "../../common/types";
import MapView from "./Map.view";
import Detail from "../../components/Detail";

import classnames from "classnames/bind";
import styles from "./PlaceDetail.module.scss";

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
//   {
//     address_name: "경기 성남시 분당구 백현동 532",
//     category_name: "가정,생활 > 문구,사무용품 > 디자인문구 > 카카오프렌즈",
//     id: "143299114",
//     phone: "031-601-7225",
//     place_name: "카카오프렌즈 판교아지트점",
//     place_url: "http://place.map.kakao.com/143299114",
//     road_address_name: "경기 성남시 분당구 판교역로 166",
//     x: "127.11011277516864",
//     y: "37.395696683829094",
//   },
//   {
//     address_name: "경기 성남시 분당구 백현동 532",
//     category_name: "부동산 > 빌딩",
//     id: "1437795442",
//     phone: "",
//     place_name: "카카오판교아지트",
//     place_url: "http://place.map.kakao.com/1437795442",
//     road_address_name: "경기 성남시 분당구 판교역로 166",
//     x: "127.11036420512991",
//     y: "37.39541713271851",
//   },
// ];

const PlaceDetail = () => {
  const { placeId } = useParams();

  return (
    <div className={cx("container")}>
      <Header />
      <MapView marker={place} />
      <Detail {...place} />
    </div>
  );
};

export default PlaceDetail;
