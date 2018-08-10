import { translate } from "react-i18next";
import Carousel from "./common/Carousel";

const Projects = ({ t }) => {
  return (
    <div className="projects-div">
      <h1 className="work-header"> {t("projects:header")} </h1>
      <Carousel
        img1="static/img/purrpl-comp.png"
        img2="static/img/museumtour-comp.jpg"
        img3="static/img/github.png"
      />
    </div>
  );
};

export default translate("projects")(Projects);
