import Layout from "components/Layout";
import Projects from "components/Projects";

import "scss/app.scss";

const ProjectsPage = () => (
  <Layout title="Projects" currentPage="/projects">
    <Projects />
  </Layout>
);

export default ProjectsPage;
