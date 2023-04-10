import getRecommendThemeListQuery from "../../../../common/query/home/getRecommendThemeListQuery";
import Section from "../Section";

const RecommendPlaceSection = () => {
  const { data } = getRecommendThemeListQuery();

  return (
    <>
      {data ? (
        <Section
          title="추천 테마"
          description="사랑받는 장소들을 소개합니다."
          itemList={data.content.map(({ name, placesCount, emoji }) => ({
            name,
            address: emoji,
            characters: [],
            recommend: `${placesCount}개의 장소`,
          }))}
          direction="column"
          path="/theme/detail"
        />
      ) : (
        <>데이터 없음</>
      )}
    </>
  );
};

export default RecommendPlaceSection;
