const Resume = () => {
  return (
    <div className="resume-div">
      <h1 className="work-header">résumé</h1>
      <h4 className="resume-subheader">
        for inquiries, please contact me at
        <a href="mailto:sophie.a.debs@gmail.com">sophie.a.debs@gmail.com</a>.
      </h4>
      <object
        className="pdf-object"
        data="static/pdf/nathan-neumann-resume-eng.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <iframe
          src="static/pdf/nathan-neumann-resume-eng.pdf"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        >
          This browser does not support PDFs. Please download the PDF to view
          it:{" "}
          <a href="/static/pdf/nathan-neumann-resume-eng.pdf">Download PDF</a>
        </iframe>
      </object>
    </div>
  );
};

export default Resume;
