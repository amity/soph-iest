const Resume = ({ jp }) => {
  return (
    <div className="resume-div">
      <h1 className="work-header">{jp ? "履歴書" : "résumé"}</h1>
      <h4 className="resume-subheader">
        {jp ? "連絡したい方は、" : "for inquiries, please contact me at "}
        <a href="mailto:sophie.a.debs@gmail.com">sophie.a.debs@gmail.com</a>
        {jp ? " にメールしてください。" : "."}
      </h4>
      <object
        className="pdf-object"
        data={"../../static/pdf/resume.pdf"}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <iframe
          src={"../static/pdf/resume.pdf"}
          width="100%"
          height="100%"
          style={{ border: "none" }}
        >
          This browser does not support PDFs. Please download the PDF to view
          it:&nbsp;
          <a href={"../../static/pdf/resume.pdf"}>Download PDF</a>
        </iframe>
      </object>
    </div>
  );
};

export default Resume;
