const Project = ({ data, jp }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{jp ? data.github : data.github}</h2>
    </div>
  );
};

export default Project;
