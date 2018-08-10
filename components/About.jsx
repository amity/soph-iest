import { translate } from "react-i18next";

const About = ({ t }) => {
  return (
    <div className="about">
      <div id="about-who-section" className="about-section">
        <h3 className="about-section-header"> {t("about:who-header")} </h3>
        <p>
          {t("about:who-1")}
          <br />
          {t("about:who-2")}
        </p>
      </div>
      <hr />
      <div id="about-where-section" className="about-section">
        <h3 className="about-section-header"> {t("about:where-header")} </h3>
        <p>
          {t("about:where-1A")}
          <a href="https://www.theguardian.com/cities/2018/jul/05/meet-the-numtots-the-millennials-who-find-fixing-public-transit-sexy-urbanist-memes">
            {t("about:where-numtot")}
          </a>
          {t("about:where-1B")}
        </p>
      </div>
      <hr />
      <div id="about-why-section" className="about-section">
        <h3 className="about-section-header"> {t("about:why-header")} </h3>
        <p>
          {t("about:why-1A")}
          <a href="https://www.codechrysalis.io">{t("about:why-cc")}</a>
          {t("about:why-1B")}
          <br />
          {t("about:why-2")}
        </p>
      </div>
      <hr />
      <div id="about-what-section" className="about-section bg-medium">
        <h3 className="about-section-header"> {t("about:what-header")} </h3>
        <p>
          {t("about:what-1A")}
          <a href="https://open.spotify.com/user/1239082952">
            {t("about:what-music")}
          </a>
          {t("about:what-1B")}
          <br />
          {t("about:what-2A")}
          <a href="https://www.overbuff.com/players/pc/FollowUpTheQ-1691">
            {t("about:what-ow")}
          </a>
          {t("about:what-and")}
          <a href="http://www.lolking.net/summoner/na/37986965/FULLCOMMUNISMUSA">
            {t("about:what-league")}
          </a>
          {t("about:what-2B")}
        </p>
      </div>
    </div>
  );
};

export default translate("about")(About);
