import Layout from "components/Layout";
import Project from "components/common/Project";

import "scss/app.scss";

const Purrpl = () => {
  let purrplData = {
    name: "purrpl",
    github: "https://github.com/soph-iest/purrpl-api"
  };
  return (
    <Layout jp={true} title="purrpl" currentPage="/projects">
      <Project jp={true} data={purrplData} />
    </Layout>
  );
};

export default Purrpl;
