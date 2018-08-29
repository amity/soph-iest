import Layout from "components/Layout";
import Home from "components/Home";

import "scss/app.scss";

const HomePage = () => (
  <Layout jp={true} title="soph-iest" currentPage="/">
    <Home jp={true} />
  </Layout>
);

export default HomePage;
