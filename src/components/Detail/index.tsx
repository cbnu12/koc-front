import { MdPhoneIphone } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";

import classnames from "classnames/bind";
import styles from "./Detail.module.scss";
import { Place } from "../../common/types";

const cx = classnames.bind(styles);

type Props = {
  className?: string;
  onClick?: () => void;
};

const Detail = ({
  place_name,
  category_name,
  place_url,
  road_address_name,
  address_name,
  phone,
  className,
  onClick,
}: Props & Place) => {
  return (
    <div className={cx("container", className)} onClick={onClick}>
      <div className={cx("title")}>
        <div className={cx("titleSection")}>
          <div className={cx("name")}>{place_name}</div>
          <div className={cx("category")}>{category_name}</div>
        </div>
        {place_url && (
          <a
            className={cx("url")}
            href={place_url}
            target="_blank"
            onClick={(e) => {
              console.log("wjrld");
              e.stopPropagation();
            }}
          >
            <FiExternalLink size={22} />
          </a>
        )}
      </div>
      <div className={cx("address")}>
        <HiLocationMarker size={18} />
        <div className={cx("addressInformation")}>
          {road_address_name}
          <br />
          {address_name}
        </div>
      </div>
      {phone && (
        <div className={cx("phone")}>
          <MdPhoneIphone size={18} />
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
      )}
    </div>
  );
};

export default Detail;
