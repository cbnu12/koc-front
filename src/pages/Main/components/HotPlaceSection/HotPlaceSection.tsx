import useGetHotCourseListQuery from "../../../../common/query/home/useGetHotCourseListQuery";
import Section from "../Section";

const HotPlaceSection = () => {
  const { data } = useGetHotCourseListQuery();

  return (
    <>
      {data ? (
        <Section
          title="요즘 뜨는 장소들"
          description="사랑받는 장소들을 소개합니다."
          itemList={data.content.map(({ name, placeCount, emoji }) => ({
            name,
            address: `${placeCount}개의 장소`,
            characters: [],
            recommend: emoji,
          }))}
          direction="row"
          path="/place/detail"
        />
      ) : (
        <>데이터 없음</>
      )}
    </>
  );
};

export default HotPlaceSection;
