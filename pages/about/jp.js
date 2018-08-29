import Layout from "components/Layout";
import About from "components/About";

import "scss/app.scss";

const AboutPage = () => (
  <Layout jp={true} title="About" currentPage="/about">
    <About jp={true} />
  </Layout>
);

export default AboutPage;
