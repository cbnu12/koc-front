import Section from "../Section";

const HotPlaceSection = () => {
  return (
    <Section
      title="요즘 뜨는 장소들"
      description="사랑받는 장소들을 소개합니다."
      itemList={HotPlaceList}
      direction="row"
      path="/place/detail"
    />
  );
};

export default HotPlaceSection;
