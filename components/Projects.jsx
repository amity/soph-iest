import Carousel from "./common/Carousel";

const Projects = () => {
  return (
    <div className="projects-div">
      <h1 className="work-header"> projects </h1>
      <Carousel
        img1="../static/img/purrpl-comp.png"
        img2="../static/img/museumtour-comp.jpg"
        img3="../static/img/github.png"
      />
    </div>
  );
};

export default Projects;
