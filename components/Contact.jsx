const Contact = ({ jp }) => {
  return (
    <div className="contact-div">
      <h1 className="work-header">contact</h1>
      <h4 className="resume-subheader">
        {jp ? "連絡したい方は、" : "for inquiries, please contact me at "}
        <a href="mailto:sophie.a.debs@gmail.com">sophie.a.debs@gmail.com</a>
        {jp
          ? " にメールしてください。"
          : ", and I'll get back to you as soon as I can."}
      </h4>
    </div>
  );
};

export default Contact;
