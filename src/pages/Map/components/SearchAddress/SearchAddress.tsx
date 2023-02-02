import Search from "../../../../components/Search";

import styles from "./SearchAddress.module.scss";
import classnames from "classnames/bind";
import { useEffect, useState } from "react";

const cx = classnames.bind(styles);

type Place = {
  address_name: string;
  category_group_name: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
};

type Pagination = {};

type Props = {
  setPosition: (
    position: {
      lat: number;
      lng: number;
      content: string;
    }[]
  ) => void;
  setMapCenter: (center: { lat: number; lng: number }) => void;
  onClose: () => void;
};

const SearchAddress = ({ setPosition, setMapCenter, onClose }: Props) => {
  const [keyword, setKeyword] = useState<string>("");
  const [results, setResults] = useState<Place[]>([]);
  const ps = new kakao.maps.services.Places();

  const placesSearchCB = (
    data: Place[],
    status: string,
    pagination: Pagination
  ) => {
    if (status === kakao.maps.services.Status.OK) {
      console.log("검색결과", data);
      console.log(pagination, status);
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      // var bounds = new kakao.maps.LatLngBounds();

      // for (var i = 0; i < data.length; i++) {
      //   displayMarker(data[i]);
      //   bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      // }

      // // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      // map.setBounds(bounds);

      setResults(data);

      setPosition(
        data.map((place) => {
          return {
            lat: parseFloat(place.y),
            lng: parseFloat(place.x),
            content: `<div class="marker">${place.place_name}</div>`,
          };
        })
      );
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && keyword.length > 0) {
      ps.keywordSearch(keyword, placesSearchCB);
    }
  };

  return (
    <div className={cx("container")}>
      <div className={cx("background")} onClick={onClose} />
      <Search
        border
        className={cx("input")}
        value={keyword}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <section className={cx("resultSection")}>
        {results.map((result) => (
          <div
            className={cx("resultItem")}
            onClick={() => {
              setPosition([
                {
                  lat: parseFloat(result.y),
                  lng: parseFloat(result.x),
                  content: `<div class="marker">${result.place_name}</div>`,
                },
              ]);
              setMapCenter({
                lat: parseFloat(result.y),
                lng: parseFloat(result.x),
              });
              onClose();
            }}
          >
            <div className={cx("name")}>{result.place_name}</div>
            <div className={cx("address")}>{result.address_name}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SearchAddress;
