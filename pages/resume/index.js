import Layout from "../../components/Layout";
import Resume from "../../components/Resume";

import "../scss/app.scss";

const ResumePage = () => (
  <Layout title="résumé" currentPage="/resume">
    <Resume />
  </Layout>
);

export default ResumePage;
