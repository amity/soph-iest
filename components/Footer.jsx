const Footer = ({ jp }) => {
  return (
    <div>
      <footer className="page-footer font-small navbar-dark bg-dark pt-4">
        <div className="container-fluid text-center text-md-left">
          {/* Grid row */}
          <div className="row">
            {/* Grid column */}
            <div className="col-md-6 mt-md-0 mt-3">
              {/* Content */}
              <h5 className="text-lowercase footer-head">soph-iest</h5>
              <p className="footer-text">
                Please excuse the mess, this site is a work in progress, and
                I&apos;m not a designer by trade. <br />
                It is built with Next.js, and the internationalization is
                supported by a translation-friendly structure for static sites I
                developed for personal use. <br />
                The full source code can be seen in{" "}
                <a href="https://github.com/amity/soph-iest">
                  the site repo.
                </a>
              </p>
            </div>
            {/* Grid column */}

            <hr className="clearfix w-100 d-md-none pb-3" />

            {/* Grid column */}
            <div className="col-md-3 mb-md-0 mb-3">
              {/* Links */}
              <h5 className="text-lowercase footer-head">
                {jp ? "ページ" : "pages"}
              </h5>

              <ul className="list-unstyled">
                <li>
                  <a className="footer-link" href="/about">
                    {jp ? "私について" : "about"}
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="/projects">
                    {jp ? "プロジェクト" : "projects"}
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="/resume">
                    {jp ? "履歴書" : "résumé"}
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="/contact">
                    {jp ? "お問い合わせ" : "contact"}
                  </a>
                </li>
              </ul>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 mb-md-0 mb-3">
              {/* Links */}
              <h5 className="text-lowercase footer-head">
                {jp ? "sns" : "social"}
              </h5>

              <ul className="list-unstyled">
                <li>
                  <a
                    className="footer-link"
                    href="https://www.github.com/amity"
                  >
                    github
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://www.linkedin.com/in/soph-iest/"
                  >
                    linkedin
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://youtu.be/dQw4w9WgXcQ"
                  >
                    twitter
                  </a>
                </li>
              </ul>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Footer Links */}

        {/* Copyright */}
        {/* <div className="footer-copyright text-center py-3">
          © 2018 Copyleft:
          <a href="">
            soph-iest
          </a>
        </div> */}
        {/* Copyright */}
      </footer>
    </div>
  );
};

export default Footer;
