import { FiExternalLink } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";

import classnames from "classnames/bind";
import styles from "./List.module.scss";

const cx = classnames.bind(styles);

type Props = {
  placeList: {
    id: string;
    place_name: string;
    place_url: string;
    address_name: string;
    road_address_name: string;
    description: string;
    x: string;
    y: string;
  }[];
  className: string;
  onClickItem?: (id: string) => void;
};

const List = ({ placeList, className, onClickItem }: Props) => {
  return (
    <div className={cx("container", className)}>
      {placeList.map((place) => (
        <button
          className={cx("item")}
          key={place.id}
          onClick={() => onClickItem?.(place.id)}
        >
          <div className={cx("title")}>
            <div className={cx("name")}>{place.place_name}</div>
            <a href={place.place_url} target="_blank">
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
        </button>
      ))}
    </div>
  );
};

export default List;
