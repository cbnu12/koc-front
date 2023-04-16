// const BASE_URL = "http://121.167.132.221:9090";
const BASE_URL = "";

const apiUrls = {
  home: {
    getHotCourseList: () => `${BASE_URL}/home/hot-courses`,
    getRecommendThemeList: () => `${BASE_URL}/home/recommend-themes`,
    getTrendPlaceList: () => `${BASE_URL}/home/trend-places`,
  },
};

export default apiUrls;
