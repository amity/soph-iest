// import { translate } from "react-i18next";
// import i18n from "../i18n";
// import i18nConfig from "../i18nConfig";

import Layout from "../components/Layout";
import Home from "../components/Home";

import "../scss/app.scss";

const HomePage = () => (
  <Layout title="soph-iest" currentPage="/">
    <Home />
  </Layout>
);

// const Extended = translate(i18nConfig.ns, { i18n, wait: process.browser })(
//   HomePage
// );

// Extended.getInitialProps = async ({ req }) =>
//   req && !process.browser ? i18n.getInitialProps(req, i18nConfig.ns) : {};

// export default Extended;

export default HomePage;
