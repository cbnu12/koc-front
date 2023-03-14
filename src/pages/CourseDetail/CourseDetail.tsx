import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { Place } from "../../common/types";
import MapView from "./Map.view";
import List from "../../components/List";
import { BsHeartFill, BsHeart } from "react-icons/bs";

import classnames from "classnames/bind";
import styles from "./CourseDetail.module.scss";
import { useState } from "react";

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

const CourseDetail = () => {
  const { themeId } = useParams();
  const [liked, setLiked] = useState<boolean>(false);
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

  return (
    <div className={cx("container")}>
      <Header
        additionalIcons={[
          <div className={cx("name")}>코스 이름</div>,
          <div className={cx("liked")}>
            {liked ? (
              <BsHeartFill onClick={() => setLiked(false)} />
            ) : (
              <BsHeart onClick={() => setLiked(true)} />
            )}
            <div className={cx("count")}>{liked ? 21 : 20}</div>
          </div>,
        ]}
      />
      <MapView markerList={markerList} />
      <List className={cx("list")} placeList={res} onClickItem={(id) => {}} />
    </div>
  );
};

export default CourseDetail;
