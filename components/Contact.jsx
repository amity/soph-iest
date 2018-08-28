const Contact = props => {
  // const pageText = () => {
  //   return props.jp ? { section1: "jp" } : { section1: "english" };
  // };
  // const pageText = props.jp ? { section1: "jp" } : { section1: "english" };
  const pageText = props.jp;

  return (
    <div className="contact-div">
      <h1 className="work-header">contact</h1>
      <h4 className="resume-subheader">
        {pageText ? "jp" : "english"}
        For inquiries, please contact me at&nbsp;
        <a href="mailto:sophie.a.debs@gmail.com">
          sophie.a.debs@gmail.com
        </a>, <br />
        and I&apos;ll get back to you as soon as I can.
      </h4>
      <br />
      <h5 className="greyscale-3">
        If you want to see my garbage video game posts, you can also follow me
        on twitter at&nbsp;
        <a href="https://twitter.com/soph_iest">@soph_iest</a>, but I&apos;ll
        warn you that it&apos;s not very interesting.
      </h5>
    </div>
  );
};

export default Contact;
