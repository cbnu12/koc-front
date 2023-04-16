const apiUrls = {
  home: {
    getHotCourseList: () =>
      `${process.env.REACT_APP_BASE_URL ?? ""}/home/hot-courses`,
    getRecommendThemeList: () =>
      `${process.env.REACT_APP_BASE_URL ?? ""}/home/recommend-themes`,
    getTrendPlaceList: () =>
      `${process.env.REACT_APP_BASE_URL ?? ""}/home/trend-places`,
  },
};

export default apiUrls;
