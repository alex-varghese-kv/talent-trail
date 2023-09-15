export const ProfileInfo = () => {
  return (
    <section className="candidates-profile bg-color pt-40 lg-pt-70 pb-150 lg-pb-80">
      <div className="">
        <div className="row">
          <div className="col-xxl-9 col-lg-8">
            <div className="candidates-profile-details me-xxl-5 pe-xxl-4">
              <div className="inner-card mb-65 lg-mb-40">
                <h3 className="title">Overview</h3>
                <p>
                  Hello my name is Ariana Gande Connor and I’m a Financial
                  Supervisor from Netherlands, Rotterdam. In pharetra orci
                  dignissim, blandit mi semper, ultricies diam. Suspendisse
                  malesuada suscipit nunc non volutpat. Sed porta nulla id orci
                  laoreet tempor non consequat enim. Sed vitae aliquam velit.
                  Aliquam Integer vehicula rhoncus molestie. Morbi ornare ipsum
                  sed sem condimentum, et pulvinar tortor luctus. Suspendisse
                  condimentum lorem ut elementum aliquam.
                </p>
                <br />
                <p>
                  Mauris nec erat ut libero vulputate pulvinar. Aliquam ante
                  erat, blandit at pretium et, accumsan ac est. Integer vehicula
                  rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et
                  pulvinar tortor luctus. Suspendisse condimentum lorem ut
                  elementum aliquam. Mauris nec.
                </p>
              </div>

              <div className="inner-card mb-75 lg-mb-50">
                <h3 className="title">Education</h3>
                <div className="time-line-data position-relative pt-15">
                  <div className="info position-relative">
                    <div className="numb fw-500 rounded-circle d-flex align-items-center justify-content-center">
                      1
                    </div>
                    <div className="text_1 fw-500">University of Boston</div>
                    <h4>Bachelor Degree of Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus. Interdum primis
                    </p>
                  </div>
                  <div className="info position-relative">
                    <div className="numb fw-500 rounded-circle d-flex align-items-center justify-content-center">
                      2
                    </div>
                    <div className="text_1 fw-500">Design Collage</div>
                    <h4>UI/UX Design Course</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="inner-card mb-75 lg-mb-50">
                <h3 className="title">Skills</h3>
                <ul className="style-none skill-tags d-flex flex-wrap pb-25">
                  <li>Figma</li>
                  <li>HTML5</li>
                  <li>Illustrator</li>
                  <li>Adobe Photoshop</li>
                  <li>WordPress</li>
                  <li>jQuery</li>
                  <li>Web Design</li>
                  <li>Adobe XD</li>
                  <li>CSS</li>
                  <li className="more">3+</li>
                </ul>
              </div>
              <div className="inner-card mb-60 lg-mb-50">
                <h3 className="title">Work Experience</h3>
                <div className="time-line-data position-relative pt-15">
                  <div className="info position-relative">
                    <div className="numb fw-500 rounded-circle d-flex align-items-center justify-content-center">
                      1
                    </div>
                    <div className="text_1 fw-500">02/03/18 - 13/05/20</div>
                    <h4>Product Designer (Google)</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus. Interdum et malesuada fames ac ante
                      ipsum primis in faucibus.
                    </p>
                  </div>
                  <div className="info position-relative">
                    <div className="numb fw-500 rounded-circle d-flex align-items-center justify-content-center">
                      2
                    </div>
                    <div className="text_1 fw-500">02/07/20 - 13/09/22</div>
                    <h4>UI/UX Engineer (Adobe)</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin a ipsum tellus. Interdum primis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4">
            <div className="cadidate-profile-sidebar ms-xl-5 ms-xxl-0 md-mt-60">
              <div className="cadidate-bio bg-wrapper mb-60 md-mb-40">
                <ul className="style-none">
                  <li>
                    <span>Location: </span>
                    <div>Spain, Barcelona</div>
                  </li>
                  <li>
                    <span>Age: </span>
                    <div>28</div>
                  </li>
                  <li>
                    <span>Email: </span>
                    <div>
                      <a href="mailto:me@support.com">me@support.com</a>
                    </div>
                  </li>
                  <li>
                    <span>Qualification: </span>
                    <div>Master Degree</div>
                  </li>
                  <li>
                    <span>Gender: </span>
                    <div>Male</div>
                  </li>

                  <li>
                    <span>Social:</span>
                    <div>
                      <a href="#" className="me-3">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#" className="me-3">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="#" className="me-3">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn-ten fw-500 text-white w-100 text-center tran3s mt-15"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
