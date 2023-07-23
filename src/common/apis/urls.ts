const BASE_URL = process.env.REACT_APP_API_URL ?? "";

const apiUrls = {
  home: {
    getHotCourseList: () => `${BASE_URL}/home/hot-courses`,
    getRecommendThemeList: () => `${BASE_URL}/home/recommend-themes`,
    getTrendPlaceList: () => `${BASE_URL}/home/trend-places`,
  },
  place: {
    getPlaceDetail: (id: string) => `${BASE_URL}/place/${id}`,
  },
  map: {
    getAroundPlaceList: () => `${BASE_URL}/map`,
  },
  course: {
    getCourseDetail: (id: string) => `${BASE_URL}/course/${id}`,
    getSearchCourse: () => `${BASE_URL}/course/search}`,
  },
  theme: {
    getThemeDetail: () => `${BASE_URL}/theme`,
  },
  login: {
    getKakaoLoginUrl: () => `${BASE_URL}/auth/kakao-login-url`,
  },
};

export default apiUrls;
