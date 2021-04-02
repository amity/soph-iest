let Carousel = props => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators indicators-top">
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
          <a
            className="carousel-item-link"
            href="https://github.com/amity/purrpl-api"
            target="blank"
          >
            <img className="d-block w-100" src={props.img1} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>purrpl: a self-care app featuring cats</h5>
              <p>
                Client created with React Native, API with Express and MongoDB
              </p>
            </div>
          </a>
        </div>
        <div className="carousel-item">
          <a
            className="carousel-item-link"
            href="https://github.com/amity/RoomKit"
            target="blank"
          >
            <img
              className="d-block w-100"
              src={props.img2}
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>
                MuseumTour: experimental live location-sensing implementation
                using Bluetooth beacons
              </h5>
              <p>Client built natively for Android devices</p>
            </div>
          </a>
        </div>
        <div className="carousel-item">
          <a
            className="carousel-item-link"
            href="https://www.github.com/amity"
            target="blank"
          >
            <img className="d-block w-100" src={props.img3} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Check out my GitHub to see my other projects!</h5>
              <p>Chrome extensions, Electron apps, tutorials, and more!</p>
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

export default Carousel;
