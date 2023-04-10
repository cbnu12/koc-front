import Section from "../Section";

const RecommendPlaceSection = () => {
  return (
    <Section
      title="추천 테마"
      description="사랑받는 장소들을 소개합니다."
      itemList={HotPlaceList}
      direction="column"
      path="/theme/detail"
    />
  );
};

export default RecommendPlaceSection;
