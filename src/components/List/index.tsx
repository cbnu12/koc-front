import { FiExternalLink } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";

import classnames from "classnames/bind";
import styles from "./List.module.scss";

const cx = classnames.bind(styles);

const placeList = [
  {
    description: "판교역과 지하로 이어져 있음",
    address_name: "경기 성남시 분당구 백현동 532",
    id: "1437795442",
    place_name: "카카오판교아지트",
    place_url: "http://place.map.kakao.com/1437795442",
    road_address_name: "경기 성남시 분당구 판교역로 166",
    x: "127.11036420512991",
    y: "37.39541713271851",
  },
  {
    description: "판교역과 지하로 이어져 있음",
    address_name: "경기 성남시 분당구 백현동 532",
    id: "1437795442",
    place_name: "카카오판교아지트",
    place_url: "http://place.map.kakao.com/1437795442",
    road_address_name: "경기 성남시 분당구 판교역로 166",
    x: "127.11036420512991",
    y: "37.39541713271851",
  },
  {
    description: "판교역과 지하로 이어져 있음",
    address_name: "경기 성남시 분당구 백현동 532",
    id: "1437795442",
    place_name: "카카오판교아지트",
    place_url: "http://place.map.kakao.com/1437795442",
    road_address_name: "경기 성남시 분당구 판교역로 166",
    x: "127.11036420512991",
    y: "37.39541713271851",
  },
  {
    description: "판교역과 지하로 이어져 있음",
    address_name: "경기 성남시 분당구 백현동 532",
    id: "1437795442",
    place_name: "카카오판교아지트",
    place_url: "http://place.map.kakao.com/1437795442",
    road_address_name: "경기 성남시 분당구 판교역로 166",
    x: "127.11036420512991",
    y: "37.39541713271851",
  },
  {
    description: "판교역과 지하로 이어져 있음",
    address_name: "경기 성남시 분당구 백현동 532",
    id: "1437795442",
    place_name: "카카오판교아지트",
    place_url: "http://place.map.kakao.com/1437795442",
    road_address_name: "경기 성남시 분당구 판교역로 166",
    x: "127.11036420512991",
    y: "37.39541713271851",
  },
  {
    description: "판교역과 지하로 이어져 있음",
    address_name: "경기 성남시 분당구 백현동 532",
    id: "1437795442",
    place_name: "카카오판교아지트",
    place_url: "http://place.map.kakao.com/1437795442",
    road_address_name: "경기 성남시 분당구 판교역로 166",
    x: "127.11036420512991",
    y: "37.39541713271851",
  },
  {
    description: "판교역과 지하로 이어져 있음",
    address_name: "경기 성남시 분당구 백현동 532",
    id: "1437795442",
    place_name: "카카오판교아지트",
    place_url: "http://place.map.kakao.com/1437795442",
    road_address_name: "경기 성남시 분당구 판교역로 166",
    x: "127.11036420512991",
    y: "37.39541713271851",
  },
  {
    description: "판교역과 지하로 이어져 있음",
    address_name: "경기 성남시 분당구 백현동 532",
    id: "1437795442",
    place_name: "카카오판교아지트",
    place_url: "http://place.map.kakao.com/1437795442",
    road_address_name: "경기 성남시 분당구 판교역로 166",
    x: "127.11036420512991",
    y: "37.39541713271851",
  },
  {
    description: "판교역과 지하로 이어져 있음",
    address_name: "경기 성남시 분당구 백현동 532",
    id: "1437795442",
    place_name: "카카오판교아지트",
    place_url: "http://place.map.kakao.com/1437795442",
    road_address_name: "경기 성남시 분당구 판교역로 166",
    x: "127.11036420512991",
    y: "37.39541713271851",
  },
];

type Props = { className: string };

const List = ({ className }: Props) => {
  return (
    <div className={cx("container", className)}>
      {placeList.map((place) => (
        <section className={cx("item")} key={place.id}>
          <div className={cx("title")}>
            <div className={cx("name")}>{place.place_name}</div>
            <a className={cx("url")} href={place.place_url} target="_blank">
              <FiExternalLink size={22} />
            </a>
          </div>
          <div className={cx("information")}>
            <HiLocationMarker size={16} />
            <div className={cx("addressInformation")}>
              {place.road_address_name}
            </div>
          </div>
          <div className={cx("information")}>
            <AiFillHeart size={16} />
            <div className={cx("descriptionInformation")}>
              {place.description}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default List;
