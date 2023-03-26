import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { Place } from "../../common/types";
import MapView from "./Map.view";
import FloatingButton from "../../components/FloatingButton";
import { HiPlus } from "react-icons/hi";

import classnames from "classnames/bind";
import styles from "./ThemeDetail.module.scss";
import Modal from "../../components/Modal";
import SearchAddress from "./components/SearchAddress";
import { useState } from "react";
import SmallMapView from "./SmallMap";

const cx = classnames.bind(styles);

type ResPlace = Place & { description: string };

const res: ResPlace[] = [
  {
    description: "판교역과 지하로 이어져 있음",
    address_name: "경기 성남시 분당구 백현동 532",
    id: "1437795442",
    place_name: "카카오판교아지트",
    place_url: "http://place.map.kakao.com/1437795442",
    road_address_name: "경기 성남시 분당구 판교역로 166",
    x: "127.11036420512991",
    y: "37.39541713271851",
    phone: "010-1234-5678",
    category_name: "카테고리",
  },
  {
    description: "판교역과 지하로 이어져 있음",
    address_name: "경기 성남시 분당구 백현동 532",
    id: "1437795442",
    place_name: "카카오판교아지트",
    place_url: "http://place.map.kakao.com/1437795442",
    road_address_name: "경기 성남시 분당구 판교역로 166",
    x: "127.112119228848",
    y: "37.395455126629855",
    phone: "010-1234-5678",
    category_name: "카테고리",
  },
  {
    description: "판교역과 지하로 이어져 있음",
    address_name: "경기 성남시 분당구 백현동 532",
    id: "1437795442",
    place_name: "카카오판교아지트",
    place_url: "http://place.map.kakao.com/1437795442",
    road_address_name: "경기 성남시 분당구 판교역로 166",
    x: "127.1101250888609",
    y: "37.39407843730005",
    phone: "010-1234-5678",
    category_name: "카테고리",
  },
  {
    description: "판교역과 지하로 이어져 있음",
    address_name: "경기 성남시 분당구 백현동 532",
    id: "1437795442",
    place_name: "카카오판교아지트",
    place_url: "http://place.map.kakao.com/1437795442",
    road_address_name: "경기 성남시 분당구 판교역로 166",
    x: "127.10878160491359",
    y: "37.401377953592146",
    phone: "010-1234-5678",
    category_name: "카테고리",
  },
  {
    description: "판교역과 지하로 이어져 있음",
    address_name: "경기 성남시 분당구 백현동 532",
    id: "1437795442",
    place_name: "카카오판교아지트",
    place_url: "http://place.map.kakao.com/1437795442",
    road_address_name: "경기 성남시 분당구 판교역로 166",
    x: "127.108996408808",
    y: "37.4007470412071",
    phone: "010-1234-5678",
    category_name: "카테고리",
  },
  {
    description: "판교역과 지하로 이어져 있음",
    address_name: "경기 성남시 분당구 백현동 532",
    id: "1437795442",
    place_name: "카카오판교아지트",
    place_url: "http://place.map.kakao.com/1437795442",
    road_address_name: "경기 성남시 분당구 판교역로 166",
    x: "127.108662792918",
    y: "37.4020051732617",
    phone: "010-1234-5678",
    category_name: "카테고리",
  },
];

const ThemeDetail = () => {
  const { themeId } = useParams();
  const markerList = res.map(
    ({
      id,
      address_name,
      place_name,
      place_url,
      road_address_name,
      x,
      y,
      phone,
      category_name,
    }) => {
      return {
        id,
        address_name,
        place_name,
        place_url,
        road_address_name,
        x,
        y,
        phone,
        category_name,
      };
    }
  );
  const [showModal, setModal] = useState<boolean>(false);
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>();
  const [placeList, setPlaceList] = useState<Place[]>([]);
  const [selected, setSelected] = useState<Place | null>(null);
  const themeTitle = "테마 이름";

  const onClickMarker = (place: Place) => {
    setPlaceList([place]);
    setMapCenter({
      lat: parseFloat(place.y),
      lng: parseFloat(place.x),
    });
    setSelected(place);
  };

  const onClickSubmit = () => {
    alert("api 요청!");
    console.log(themeId, selected);
  };

  return (
    <div className={cx("container")}>
      <Header
        additionalIcons={[<div className={cx("name")}>{themeTitle}</div>]}
      />
      <MapView markerList={markerList} />
      <FloatingButton onClick={() => setModal(true)}>
        <HiPlus /> 장소 추가 하기
      </FloatingButton>
      <Modal
        isShow={showModal}
        title={`${themeTitle}에 장소 추가하기`}
        useDim
        onClose={() => setModal(false)}
      >
        <div className={cx("flex")}>
          <SearchAddress
            setPosition={setPlaceList}
            setMapCenter={setMapCenter}
          />
          <SmallMapView
            width="40%"
            height="500px"
            markerList={placeList}
            {...mapCenter}
            onClickMarker={onClickMarker}
          />
        </div>
        <button
          disabled={!selected}
          type="button"
          className={cx("submit")}
          onClick={onClickSubmit}
        >
          추가하기
        </button>
      </Modal>
    </div>
  );
};

export default ThemeDetail;
