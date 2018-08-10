import { translate } from "react-i18next";
import Link from "next/link";

const Navbar = ({ currentPage, t }) => {
  function navItemCurrent(destination) {
    return destination == currentPage ? "active" : "";
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <Link href="/">
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
            <Link href="/">
              <a className={"nav-link " + navItemCurrent("/")}>
                {t("navigation:home")}
                <span className="sr-only">(current)</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className={"nav-link " + navItemCurrent("/about")}>
                {t("navigation:about")}
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects">
              <a className={"nav-link " + navItemCurrent("/projects")}>
                {t("navigation:projects")}
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/resume">
              <a className={"nav-link " + navItemCurrent("/resume")}>
                {t("navigation:resume")}
              </a>
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
              {t("navigation:other")}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {/* <Link href="/page1">
                <a className="dropdown-item">Another Site</a>
              </Link> */}
              <a
                className="dropdown-item"
                href="https://journeys.dartmouth.edu/nneumann/"
              >
                {t("navigation:data")} <span />{" "}
                <i className="far fa-chart-bar" />
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
          <li className="nav-item">
            <a
              className="nav-link lang-link active"
              href={t("navigation:switch-lang-link")}
            >
              {t("navigation:switch-lang")}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default translate("navigation")(Navbar);
