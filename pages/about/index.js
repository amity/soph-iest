import Layout from "components/Layout";
import About from "components/About";

import "scss/app.scss";

const AboutPage = () => (
  <Layout title="About" currentPage="/about">
    <About />
  </Layout>
);

export default AboutPage;
