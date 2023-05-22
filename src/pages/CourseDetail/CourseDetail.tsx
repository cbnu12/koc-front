import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { Place } from "../../common/types";
import MapView from "./Map.view";
import List from "../../components/List";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { useState } from "react";
import Information from "../../components/Information";

import classnames from "classnames/bind";
import styles from "./CourseDetail.module.scss";
import useCourseDetailQuery from "../../common/query/course/useCourseDetailQuery";

const cx = classnames.bind(styles);

const CourseDetail = () => {
  const { themeId } = useParams();
  const [liked, setLiked] = useState<boolean>(false);
  const [selected, setSelected] = useState<Place | null>(null);

  const { data } = useCourseDetailQuery({ id: themeId! });

  const markerList =
    data?.places.map(({ id, address, name, latitude, longitude }) => {
      return {
        id: String(id),
        address_name: address,
        category_name: "",
        phone: "",
        place_name: name,
        place_url: `http://place.map.kakao.com/${id}`,
        road_address_name: "",
        x: longitude,
        y: latitude,
      };
    }) ?? [];

  if (!data) {
    return <>TODO: Loading...</>;
  }

  return (
    <div className={cx("container")}>
      <Header
        additionalIcons={[
          <div className={cx("name")}>{data.name}</div>,
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
      <div className={cx("owner")}>made by {data.owner.nickname}</div>
      <List
        className={cx("list")}
        placeList={data.places.map(
          ({ id, address, name, description, latitude, longitude }) => {
            return {
              id: String(id),
              place_name: name,
              place_url: `http://place.map.kakao.com/${id}`,
              address_name: address,
              road_address_name: address,
              description: description.join(", "),
              x: latitude,
              y: longitude,
            };
          }
        )}
        onClickItem={(id) => {
          setSelected(markerList.find((marker) => marker.id === id)!);
        }}
      />
      {selected && (
        <Information
          place={selected}
          onClose={() => setSelected(null)}
          useDim
        />
      )}
    </div>
  );
};

export default CourseDetail;
