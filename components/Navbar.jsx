import Link from "next/link";

const Navbar = ({ currentPage, jp }) => {
  function navItemCurrent(destination) {
    return destination == currentPage ? "active" : "";
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <Link href={jp ? "/jp" : "/"}>
        <a className="navbar-brand">soph-iest</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href={jp ? "/jp" : "/"}>
              <a className={"nav-link " + navItemCurrent("/")}>
                {jp ? "jphome" : "home"}
                <span className="sr-only">(current)</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={jp ? "/about/jp" : "/about"}>
              <a className={"nav-link " + navItemCurrent("/about")}>about</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects">
              <a className={"nav-link " + navItemCurrent("/projects")}>
                projects
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/resume">
              <a className={"nav-link " + navItemCurrent("/resume")}>résumé</a>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              external pages
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {/* <Link href="/page1">
                <a className="dropdown-item">Another Site</a>
              </Link> */}
              <a
                className="dropdown-item"
                href="https://journeys.dartmouth.edu/nneumann/"
              >
                data visualization <span /> <i className="far fa-chart-bar" />
              </a>
              <div className="dropdown-divider" />

              <a
                className="dropdown-item"
                href="https://github.com/NateNeumann/"
              >
                github <span />
                <i className="fab fa-github" />
              </a>
            </div>
          </li>
          {/* <li className="nav-item">
            <a
              className="nav-link lang-link active"
              href={t("navigation:switch-lang-link")}
            >
              {t("navigation:switch-lang")}
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
