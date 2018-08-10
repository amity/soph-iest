import Link from "next/link";
import { translate } from "react-i18next";

const Home = ({ t }) => {
  return (
    <div>
      <h1 className="home-header home-header-1"> {t("home:header")} </h1>
      <Link href="/projects">
        <a>
          <h1 className="home-header home-header-2">{t("home:heading-2")}</h1>
        </a>
      </Link>

      <a href="https://journeys.dartmouth.edu/nneumann/">
        <h1 className="home-header home-header-3">{t("home:heading-3")}</h1>
      </a>

      <Link href="/about">
        <a>
          <h1 className="home-header home-header-4">{t("home:heading-4")}</h1>
        </a>
      </Link>

      <Link href="/contact">
        <a>
          <h4 className="home-header home-header-5">
            {t("home:subheading-5")}
          </h4>
        </a>
      </Link>
    </div>
  );
};

export default translate("home")(Home);
