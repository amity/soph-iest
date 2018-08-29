import Layout from "components/Layout";
import Project from "components/common/Project";

import "scss/app.scss";

const Purrpl = () => {
  let purrplData = {
    name: "purrpl",
    github: "https://github.com/NateNeumann/purrpl-api"
  };
  return (
    <Layout title="purrpl" currentPage="/projects">
      <Project data={purrplData} />
    </Layout>
  );
};

export default Purrpl;
