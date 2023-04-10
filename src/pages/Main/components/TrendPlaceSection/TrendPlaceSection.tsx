import Section from "../Section";

const TrendPlaceSection = () => {
  return (
    <Section
      title="인기있는 코스"
      description="코스 따라 여행해보세요."
      itemList={HotPlaceList}
      direction="column"
      path="/course/detail"
    />
  );
};

export default TrendPlaceSection;
