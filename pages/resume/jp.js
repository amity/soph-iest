import Layout from "components/Layout";
import Resume from "components/Resume";

import "scss/app.scss";

const ResumePage = () => (
  <Layout jp={true} title="résumé" currentPage="/resume">
    <Resume jp={true} />
  </Layout>
);

export default ResumePage;
