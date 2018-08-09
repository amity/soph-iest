import Link from "next/link";
import { translate } from "react-i18next";

const Home = ({ t }) => {
  return (
    <div>
      <p> {t("home:header")} </p>
      <Link href="/about">
        <a>About us!</a>
      </Link>

      <Link href="/pledge">
        <a>Sign the Pledge!</a>
      </Link>
    </div>
  );
};

export default translate("home")(Home);
