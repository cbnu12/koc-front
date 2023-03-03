import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { Place } from "../../common/types";
import MapView from "./Map.view";
import List from "../../components/List";

import classnames from "classnames/bind";
import styles from "./ThemeDetail.module.scss";

const cx = classnames.bind(styles);

const markerList: Place[] = [];

const ThemeDetail = () => {
  const { themeId } = useParams();

  return (
    <>
      <Header />
      <MapView markerList={markerList} />
      <List className={cx("list")} />
    </>
  );
};

export default ThemeDetail;
