import { translate } from "react-i18next";
import Carousel from "./common/Carousel";

const Portfolio = ({ t }) => {
  return (
    <div className="portfolio-div">
      <h1> {t("portfolio:header")} </h1>
      <Carousel img1="" img2="" img3="" />
    </div>
  );
};

export default translate("portfolio")(Portfolio);
