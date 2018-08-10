import { translate } from "react-i18next";

let Carousel = props => {
  let t = props.t;
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={props.img1} alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>{t("projects:carousel-header-1")}</h5>
            <p>{t("projects:carousel-descrip-1")}</p>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={props.img2} alt="Second slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>{t("projects:carousel-header-2")}</h5>
            <p>{t("projects:carousel-descrip-2")}</p>
          </div>
        </div>
        <div className="carousel-item">
          <a
            className="carousel-item-link"
            href="https://www.github.com/NateNeumann"
            target="blank"
          >
            <img className="d-block w-100" src={props.img3} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>{t("projects:carousel-header-3")}</h5>
              <p>{t("projects:carousel-descrip-3")}</p>
            </div>
          </a>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <div className="carousel-control-button">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </div>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <div className="carousel-control-button">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </div>
      </a>
    </div>
  );
};

export default translate("projects")(Carousel);
