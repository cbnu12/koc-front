import styles from "./Information.module.scss";
import classNames from "classnames/bind";
import { Place } from "../../common/types";
import Modal from "../Modal";
import MapView from "../MapView";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

type Props = {
  useDim?: boolean;
  place: Place;
  onClose: () => void;
};

const Information = ({ place, useDim, onClose }: Props) => {
  const navigate = useNavigate();

  const commentList = ["볼게 많아요!", "역이랑 바로 이어져 있어서 좋아요~"];
  const themeList = [
    "혼자 노트북 작업하기 좋은 곳",
    "좋은 노래 많이 나오는 곳",
    "뷰가 좋은 곳",
  ];
  const courseList = ["맵찔이를 위한 코스", "맵부심을 위한 코스"];

  return (
    <Modal
      isShow
      useDim={useDim}
      title={place.place_name}
      description={place.road_address_name}
      onClose={onClose}
    >
      <MapView markerList={[place]} width="100%" height="200px" level={4} />
      <div className={cx("container")}>
        <section className={cx("section")}>
          <div className={cx("subtitle")}>말말말💬</div>
          {commentList.map((comment) => (
            <div key={comment} className={cx("item")}>
              {comment}
            </div>
          ))}
        </section>
        <section className={cx("section")}>
          <div className={cx("subtitle")}>특징✨</div>
          {themeList.map((theme) => (
            <div
              key={theme}
              className={cx("item", "hover")}
              onClick={() => navigate(`/theme/detail/id`)}
            >
              {theme}
            </div>
          ))}
        </section>
        <section className={cx("section")}>
          <div className={cx("subtitle")}>추천👍🏻</div>
          {courseList.map((course) => (
            <div
              key={course}
              className={cx("item", "hover")}
              onClick={() => navigate(`/course/detail/id`)}
            >
              {course}
            </div>
          ))}
        </section>
      </div>
    </Modal>
  );
};

export default Information;
