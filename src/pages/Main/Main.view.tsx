import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { RiRoadMapFill } from "react-icons/ri";
import Section from "./components/Section";

import styles from "./Main.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const HotPlaceList = [
  {
    name: "장소명1",
    address: "장소 어쩌구",
    characters: ["장소 특징1", "장소 특징2", "장소 특징3"],
    recommend: "많은 사람들이 저장했어요.",
  },
  {
    name: "장소명2",
    address: "장소 어쩌구",
    characters: ["장소 특징1", "장소 특징2", "장소 특징3"],
    recommend: "많은 사람들이 추천했어요.",
  },
  {
    name: "장소명3",
    address: "장소 어쩌구",
    characters: ["장소 특징1", "장소 특징2", "장소 특징3"],
    recommend: "많은 사람들이 클릭했어요.",
  },
];

type Props = {};

const MainView = ({}: Props) => {
  const navigate = useNavigate();

  return (
    <div className={cx("container")}>
      <section className={cx("section")}>
        <div className={cx("searchContainer")}>
          <input placeholder="지도를 검색해보세요" />
          <BiSearchAlt className={cx("icon")} />
        </div>
        <button onClick={() => navigate("/map")} className={cx("button")}>
          <div>
            <RiRoadMapFill className={cx("icon")} />내 주변 장소 찾기
          </div>
        </button>
      </section>
      <Section
        title="요즘 뜨는 장소들"
        description="사랑받는 장소들을 소개합니다."
        itemList={HotPlaceList}
        direction="row"
      />
      <Section
        title="추천 테마"
        description="사랑받는 장소들을 소개합니다."
        itemList={HotPlaceList}
        direction="column"
      />
    </div>
  );
};

export default MainView;
