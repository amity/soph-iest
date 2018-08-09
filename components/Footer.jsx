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
              <h5 className="text-lowercase footer-head">Footer Content</h5>
              <p className="footer-text">
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            {/* Grid column */}

            <hr className="clearfix w-100 d-md-none pb-3" />

            {/* Grid column */}
            <div className="col-md-3 mb-md-0 mb-3">
              {/* Links */}
              <h5 className="text-lowercase footer-head">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a className="footer-link" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#!">
                    Link 3
                  </a>
                </li>
              </ul>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 mb-md-0 mb-3">
              {/* Links */}
              <h5 className="text-lowercase footer-head">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a className="footer-link" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#!">
                    Link 3
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
        <div className="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href="https://mdbootstrap.com/bootstrap-tutorial/">
            {" "}
            MDBootstrap.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
};

export default Footer;
