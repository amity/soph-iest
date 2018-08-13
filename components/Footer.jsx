const Footer = () => {
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
                It is built with Next.js, and the multiple-languages versions
                are supported by react-i18next. <br />
                The full source code can be seen in{" "}
                <a href="https://github.com/NateNeumann/soph-iest">
                  the site repo.
                </a>
              </p>
            </div>
            {/* Grid column */}

            <hr className="clearfix w-100 d-md-none pb-3" />

            {/* Grid column */}
            <div className="col-md-3 mb-md-0 mb-3">
              {/* Links */}
              <h5 className="text-lowercase footer-head">pages</h5>

              <ul className="list-unstyled">
                <li>
                  <a className="footer-link" href="/about">
                    about
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="/projects">
                    projects
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="/resume">
                    résumé
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="/contact">
                    contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 mb-md-0 mb-3">
              {/* Links */}
              <h5 className="text-lowercase footer-head">social</h5>

              <ul className="list-unstyled">
                <li>
                  <a
                    className="footer-link"
                    href="https://www.github.com/NateNeumann"
                  >
                    github
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://www.linkedin.com/in/natejneumann/"
                  >
                    linkedin
                  </a>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="https://twitter.com/soph_iest"
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
          © 2018 Copyright:
          <a href="https://mdbootstrap.com/bootstrap-tutorial/">
            {" "}
            MDBootstrap.com
          </a>
        </div> */}
        {/* Copyright */}
      </footer>
    </div>
  );
};

export default Footer;
