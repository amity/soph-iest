// import { translate } from "react-i18next";
// import i18n from "../i18n";
// import i18nConfig from "../i18nConfig";

import Layout from "../components/Layout";
import Resume from "../components/Resume";

import "../scss/app.scss";

const ResumePage = () => (
  <Layout title="résumé" currentPage="/resume">
    <Resume />
  </Layout>
);

// const Extended = translate(i18nConfig.ns, { i18n, wait: process.browser })(
//   ResumePage
// );

// Extended.getInitialProps = async ({ req }) =>
//   req && !process.browser ? i18n.getInitialProps(req, i18nConfig.ns) : {};

// export default Extended;
export default ResumePage;
