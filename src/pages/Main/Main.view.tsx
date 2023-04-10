import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { RiRoadMapFill } from "react-icons/ri";
import Section from "./components/Section";

import styles from "./Main.module.scss";
import classnames from "classnames/bind";
import Search from "../../components/Search";
import { Suspense, useRef, useState } from "react";
import HotPlaceSection from "./components/HotPlaceSection";
import RecommendPlaceSection from "./components/RecommendPlaceSection";
import TrendPlaceSection from "./components/TrendPlaceSection";

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
  const inputRef = useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && keyword.length > 0) {
      navigate(`/map?keyword=${keyword}`);
      inputRef.current?.blur();
    }
  };

  return (
    <div className={cx("container")}>
      <section className={cx("section")}>
        <Search
          ref={inputRef}
          className={cx("search")}
          value={keyword}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button onClick={() => navigate("/map")} className={cx("button")}>
          <div>
            <RiRoadMapFill className={cx("icon")} />내 주변 장소 찾기
          </div>
        </button>
      </section>
      <Suspense fallback={<>LOADING</>}>
        <HotPlaceSection />
      </Suspense>
      <Suspense fallback={<>LOADING</>}>
        <RecommendPlaceSection />
      </Suspense>
      <Suspense fallback={<>LOADING</>}>
        <TrendPlaceSection />
      </Suspense>
    </div>
  );
};

export default MainView;
