import { translate } from "react-i18next";

const About = ({ t }) => {
  return (
    <div>
      <h1>{t("about:header")}</h1>
      <p>Sophie Debs, also known as Nate Neumann, is me.</p>
    </div>
  );
};

export default translate("about")(About);
