import React, { useEffect, useRef, useState } from "react";
import { MdPhoneIphone } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";

import classnames from "classnames/bind";
import styles from "./Detail.module.scss";
import { Place } from "../../common/types";

const cx = classnames.bind(styles);

type Props = {};

const Detail = ({
  place_name,
  category_name,
  place_url,
  road_address_name,
  address_name,
  phone,
}: Props & Place) => {
  return (
    <div className={cx("container")}>
      <div className={cx("title")}>
        <div className={cx("titleSection")}>
          <div className={cx("name")}>{place_name}</div>
          <div className={cx("category")}>{category_name}</div>
        </div>
        <a className={cx("url")} href={place_url} target="_blank">
          <FiExternalLink size={22} />
        </a>
      </div>
      <div className={cx("address")}>
        <HiLocationMarker size={20} />
        <div className={cx("addressInformation")}>
          {road_address_name}
          <br />
          {address_name}
        </div>
      </div>
      <div className={cx("phone")}>
        <MdPhoneIphone size={20} />
        <a href={`tel:${phone}`}>{phone}</a>
      </div>
    </div>
  );
};

export default Detail;