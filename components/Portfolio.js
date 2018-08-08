import { translate } from "react-i18next";

const Portfolio = ({ t }) => {
  return (
    <p>
      <h1> {t("portfolio:header")} This is the portfolio. </h1>
    </p>
  );
};

export default translate("portfolio")(Portfolio);
