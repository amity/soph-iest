import Layout from "components/Layout";
import Projects from "components/Projects";

import "scss/app.scss";

const ProjectsPage = () => (
  <Layout jp={true} title="Projects" currentPage="/projects">
    <Projects jp={true} />
  </Layout>
);

export default ProjectsPage;
