import { useNavigate } from "react-router-dom";
import { RiRoadMapFill } from "react-icons/ri";
import Search from "../../components/Search";
import { Suspense, useRef, useState } from "react";
import HotPlaceSection from "./components/HotPlaceSection";
import RecommendPlaceSection from "./components/RecommendPlaceSection";
import TrendPlaceSection from "./components/TrendPlaceSection";
import { ErrorBoundary } from "react-error-boundary";

import styles from "./Main.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

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

      <ErrorBoundary FallbackComponent={() => <>에러가 발생하였습니다.</>}>
        <Suspense fallback={<>LOADING</>}>
          <HotPlaceSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={() => <>에러가 발생하였습니다.</>}>
        <Suspense fallback={<>LOADING</>}>
          <RecommendPlaceSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={() => <>에러가 발생하였습니다.</>}>
        <Suspense fallback={<>LOADING</>}>
          <TrendPlaceSection />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default MainView;
