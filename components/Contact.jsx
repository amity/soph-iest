const Contact = ({ jp }) => {
  return (
    <div className="contact-div">
      <h1 className="work-header">contact</h1>
      <h4 className="resume-subheader">
        {jp ? "連絡したい方は、" : "for inquiries, please contact me at "}
        <a href="mailto:nn.20@dartmouth.edu">nn.20@dartmouth.edu</a>
        {jp
          ? " にメールしてください。"
          : ", and I'll get back to you as soon as I can."}
      </h4>
      <br />
      <h5 className="greyscale-3">
        {jp
          ? "もし興味あれば、Twitterで"
          : "If you want to see my garbage nerd posts, you can also follow me　on twitter at　"}
        <a href="https://twitter.com/soph_iest">@soph_iest</a>
        {jp
          ? "をフォローできる。"
          : ", but Ill　warn you that it's not very interesting."}
      </h5>
    </div>
  );
};

export default Contact;
