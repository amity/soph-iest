import { translate } from "react-i18next";
import i18n from "../i18n";
import i18nConfig from "../i18nConfig";

import Layout from "../components/Layout";
import Projects from "../components/Projects";

import "../scss/app.scss";

const ProjectsPage = () => (
  <Layout title="Projects" currentPage="/projects">
    <Projects />
  </Layout>
);

const Extended = translate(i18nConfig.ns, { i18n, wait: process.browser })(
  ProjectsPage
);

Extended.getInitialProps = async ({ req }) =>
  req && !process.browser ? i18n.getInitialProps(req, i18nConfig.ns) : {};

export default Extended;
