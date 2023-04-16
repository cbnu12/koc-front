const apiUrls = {
  home: {
    getHotCourseList: () => {
      console.log(
        "1",
        process.env.REACT_APP_API_URL || "",
        "2",
        process.env.REACT_APP_API_URL ?? ""
      );
      return `${process.env.REACT_APP_API_URL || ""}/home/hot-courses`;
    },
    getRecommendThemeList: () =>
      `${process.env.REACT_APP_API_URL || ""}/home/recommend-themes`,
    getTrendPlaceList: () =>
      `${process.env.REACT_APP_API_URL || ""}/home/trend-places`,
  },
};

export default apiUrls;
