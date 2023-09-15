export const Footer = () => {
  return (
    <div className="footer-one">
      <div className="container">
        <div className="inner-wrapper">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-3 footer-intro mb-15">
              <div className="logo mb-25">
                <a className="d-flex align-items-center" href="index.html">
                  <img
                    alt="logo"
                    width="119"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="assets/logo_047ea5.png?url=%2Fsrc%2Fassets%2Fstatic%2Fmedia%2Flogo_04.42350b2e.png&amp;w=256&amp;q=75"
                  />
                </a>
              </div>
              <a href="#" className="email fw-500">
                jobisupport@new.com
              </a>
              <img
                alt="shape"
                loading="lazy"
                width="53"
                height="53"
                decoding="async"
                data-nimg="1"
                className="lazy-img mt-50 sm-mt-30 sm-mb-20"
                style={{ color: "transparent" }}
                src="assets/media/shape_28.761e9e53.svg"
              />
            </div>
            <div className="col-lg-2 col-sm-4 mb-20">
              <h5 className="footer-title">Services​</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <a href="job-grid-v2.html">Browse Jobs</a>
                </li>
                <li>
                  <a href="company-v1.html">Companies</a>
                </li>
                <li>
                  <a href="candidates-v1.html">Candidates</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-4 mb-20">
              <h5 className="footer-title">Company</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <a href="about-us.html">About us</a>
                </li>
                <li>
                  <a href="blog-v2.html">Blogs</a>
                </li>
                <li>
                  <a href="faq.html">FAQ’s</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 mb-20">
              <h5 className="footer-title">Support</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <a href="contact.html">Terms of use</a>
                </li>
                <li>
                  <a href="contact.html">Terms &amp; conditions</a>
                </li>
                <li>
                  <a href="contact.html">Privacy</a>
                </li>
                <li>
                  <a href="contact.html">Cookie policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 order-lg-3 mb-15">
              <ul className="style-none d-flex order-lg-last justify-content-center justify-content-lg-end social-icon">
                <li>
                  <a href="#">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-google"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 order-lg-1 mb-15">
              <ul className="d-flex style-none bottom-nav justify-content-center justify-content-lg-start">
                <li>
                  <a href="contact.html">Privacy &amp; Terms.</a>
                </li>
                <li>
                  <a href="contact.html"> Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 order-lg-2">
              <p className="text-center mb-15">
                Copyright @ 2023 Talent trail inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
