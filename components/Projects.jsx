import Carousel from "./common/Carousel";

const Projects = ({ jp }) => {
  return (
    <div className="projects-div">
      <h1 className="work-header"> {jp ? "プロジェクト" : "projects"} </h1>
      <Carousel
        img1={
          jp
            ? "../../static/img/purrpl-comp.png"
            : "../static/img/purrpl-comp.png"
        }
        img2={
          jp
            ? "../../static/img/museumtour-comp.jpg"
            : "../static/img/museumtour-comp.jpg"
        }
        img3={jp ? "../../static/img/github.png" : "../static/img/github.png"}
      />
    </div>
  );
};

export default Projects;
