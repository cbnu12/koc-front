import getTrendPlaceListQuery from "../../../../common/query/home/getTrendPlaceListQuery";
import Section from "../Section";

const TrendPlaceSection = () => {
  const { data } = getTrendPlaceListQuery();

  return (
    <>
      {data ? (
        <Section
          title="인기있는 코스"
          description="코스 따라 여행해보세요."
          itemList={data.content.map(
            ({ name, address, descriptions, category }) => ({
              name,
              address,
              characters: descriptions,
              recommend: category,
            })
          )}
          direction="column"
          path="/course/detail"
        />
      ) : (
        <>데이터 없음</>
      )}
    </>
  );
};

export default TrendPlaceSection;
