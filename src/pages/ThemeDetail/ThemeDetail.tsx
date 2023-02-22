import { useParams } from "react-router-dom";

const ThemeDetail = () => {
  const { themeId } = useParams();
  return <>{themeId}</>;
};

export default ThemeDetail;
