export const CandidateAboutUs = () => {
    return (
        <div  className="main-page-wrapper">
      <div  className="modal fade" id="loginModal" tabIndex={-1} aria-hidden="true">
        <div  className="modal-dialog modal-fullscreen modal-dialog-centered">
          <div  className="container">
            <div  className="user-data-form modal-content">
              <button
                type="button"
                 className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div  className="text-center">
                <h2>Hi, Welcome Back!</h2>
                <p>
                  Still do not have an account?
                  <a href="register.html">Sign up</a>
                </p>
              </div>
              <div  className="form-wrapper m-auto">
                <form  className="mt-10">
                  <div  className="row">
                    <div  className="col-12">
                      <div  className="input-group-meta position-relative mb-25">
                        <label>Email*</label
                        ><input
                          type="email"
                          placeholder="james@example.com"
                          name="email"
                        />
                        <div  className="help-block with-errors">
                          <div style={{color: "red"}}></div>
                        </div>
                      </div>
                    </div>
                    <div  className="col-12">
                      <div  className="input-group-meta position-relative mb-20">
                        <label>Password*</label
                        ><input
                          type="password"
                          placeholder="Enter Password"
                           className="pass_log_id"
                          name="password"
                        /><span  className="placeholder_icon"
                          ><span  className="passVicon"
                            ><img
                              alt="icon"
                              loading="lazy"
                              width="24"
                              height="16"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src="src/assets/static/media/icon_60.3d29845b.svg" /></span
                        ></span>
                        <div  className="help-block with-errors">
                          <div style={{color: "red"}}></div>
                        </div>
                      </div>
                    </div>
                    <div  className="col-12">
                      <div
                         className="agreement-checkbox d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <input type="checkbox" id="remember" /><label
                            htmlFor="remember"
                            >Keep me logged in</label
                          >
                        </div>
                        <a href="#">Forget Password?</a>
                      </div>
                    </div>
                    <div  className="col-12">
                      <button
                        type="submit"
                         className="btn-eleven fw-500 tran3s d-block mt-20"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
                <div  className="d-flex align-items-center mt-30 mb-10">
                  <div  className="line"></div>
                  <span  className="pe-3 ps-3">OR</span>
                  <div  className="line"></div>
                </div>
                <div  className="row">
                  <div  className="col-md-6">
                    <a
                      href="#"
                       className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10"
                      ><img
                        alt="google-img"
                        loading="lazy"
                        width="24"
                        height="25"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        srcSet="
                          /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle.7000043b.png&amp;w=32&amp;q=75 1x,
                          /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle.7000043b.png&amp;w=48&amp;q=75 2x
                        "
                        src="src/assets/google9313.png?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle.7000043b.png&amp;w=48&amp;q=75"
                      /><span  className="ps-2">Login with Google</span></a
                    >
                  </div>
                  <div  className="col-md-6">
                    <a
                      href="#"
                       className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10"
                      ><img
                        alt="facebook-img"
                        loading="lazy"
                        width="22"
                        height="23"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: "transparent" }}
                        srcSet="
                          /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Ffacebook.0b9411a9.png&amp;w=32&amp;q=75 1x,
                          /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Ffacebook.0b9411a9.png&amp;w=48&amp;q=75 2x
                        "
                        src="src/assets/facebookb710.png?url=%2F_next%2Fstatic%2Fmedia%2Ffacebook.0b9411a9.png&amp;w=48&amp;q=75"
                      /><span  className="ps-2">Login with Facebook</span></a
                    >
                  </div>
                </div>
                <p  className="text-center mt-10">
                  Do not have an account? 
                  <a  className="fw-500" href="register.html">Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div  className="inner-banner-one position-relative">
        <div  className="container">
          <div  className="position-relative">
            <div  className="row">
              <div  className="col-xl-6 m-auto text-center">
                <div  className="title-two">
                  <h2  className="text-white">About us</h2>
                </div>
                <ul
                   className="style-none d-flex justify-content-center page-pagination mt-15"
                >
                  <li><a href="index.html">Home</a></li>
                  <li><i  className="bi bi-chevron-right"></i></li>
                  <li>About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="shape"
          loading="lazy"
          width="83"
          height="94"
          decoding="async"
          data-nimg="1"
           className="lazy-img shapes shape_01"
          style={{ color: "transparent" }}
          src="src/assets/static/media/shape_02.e6196842.svg"
        /><img
          alt="shape"
          loading="lazy"
          width="141"
          height="57"
          decoding="async"
          data-nimg="1"
           className="lazy-img shapes shape_02"
          style={{ color: "transparent" }}
          src="src/assets/static/media/shape_03.746a3d0c.svg"
        />
      </div>
      <section
         className="text-feature-three position-relative pt-100 lg-pt-80 md-pt-50"
      >
        <div  className="container">
          <div  className="row">
            <div  className="col-xxl-11 m-auto">
              <div  className="row">
                <div  className="col-lg-5">
                  <div  className="title-one mt-30 md-mb-40">
                    <h2  className="fw-500">
                      We’ve been helping customer globally.
                    </h2>
                  </div>
                </div>
                <div  className="col-lg-6 ms-auto">
                  <div  className="wow fadeInRight">
                    <div
                       className="accordion accordion-style-one color-two ps-xxl-5 ms-xxl-4"
                      id="accordionOne"
                    >
                      <div  className="accordion-item">
                        <div  className="accordion-header" id="heading-one">
                          <button
                             className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse-one"
                            aria-expanded="true"
                            aria-controls="collapse-one"
                          >
                            Who we are?
                          </button>
                        </div>
                        <div
                          id="collapse-one"
                           className="accordion-collapse collapse show"
                          aria-labelledby="heading-one"
                          data-bs-parent="#accordionOne"
                        >
                          <div  className="accordion-body">
                            <p>
                              Our founders Dustin Moskovitz and Justin lorem
                              Rosenstein met while leading Engineering teams at
                              Facebook quesi. Lorem ipsum dolor sit, amet
                              consectetur adipisicing elit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div  className="accordion-item">
                        <div  className="accordion-header" id="heading-two">
                          <button
                             className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse-two"
                            aria-expanded="false"
                            aria-controls="collapse-two"
                          >
                            What’s our goal
                          </button>
                        </div>
                        <div
                          id="collapse-two"
                           className="accordion-collapse collapse"
                          aria-labelledby="heading-two"
                          data-bs-parent="#accordionOne"
                        >
                          <div  className="accordion-body">
                            <p>
                              Our founders Dustin Moskovitz and Justin lorem
                              Rosenstein met while leading Engineering teams at
                              Facebook quesi. Lorem ipsum dolor sit, amet
                              consectetur adipisicing elit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div  className="accordion-item">
                        <div  className="accordion-header" id="heading-three">
                          <button
                             className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse-three"
                            aria-expanded="false"
                            aria-controls="collapse-three"
                          >
                            Our vision
                          </button>
                        </div>
                        <div
                          id="collapse-three"
                           className="accordion-collapse collapse"
                          aria-labelledby="heading-three"
                          data-bs-parent="#accordionOne"
                        >
                          <div  className="accordion-body">
                            <p>
                              Our founders Dustin Moskovitz and Justin lorem
                              Rosenstein met while leading Engineering teams at
                              Facebook quesi. Lorem ipsum dolor sit, amet
                              consectetur adipisicing elit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                 className="video-post d-flex align-items-center justify-content-center mt-100 lg-mt-50 mb-50 lg-mb-30"
              >
                <a
                   className="fancybox rounded-circle video-icon tran3s text-center cursor-pointer"
                  ><i  className="bi bi-play"></i
                ></a>
              </div>
              <div  className="border-bottom pb-50 lg-pb-10">
                <div  className="row">
                  <div  className="col-sm-4">
                    <div
                       className="counter-block-one mt-25 text-center wow fadeInUp"
                    >
                      <h2  className="main-count fw-500">
                        <span  className="counter"
                          ><div
                             className="d-flex align-items-center justify-content-center"
                          >
                            <span></span><span><span>million</span></span>
                          </div></span
                        >
                      </h2>
                      <p  className="">Completed Jobs</p>
                    </div>
                  </div>
                  <div  className="col-sm-4">
                    <div
                       className="counter-block-one mt-25 text-center wow fadeInUp"
                    >
                      <h2  className="main-count fw-500">
                        <span  className="counter"
                          ><div
                             className="d-flex align-items-center justify-content-center"
                          >
                            <span></span><span><span>k+</span></span>
                          </div></span
                        >
                      </h2>
                      <p  className="">Worldwide Client</p>
                    </div>
                  </div>
                  <div  className="col-sm-4">
                    <div
                       className="counter-block-one mt-25 text-center wow fadeInUp"
                    >
                      <h2  className="main-count fw-500">
                        <span  className="counter"
                          ><div
                             className="d-flex align-items-center justify-content-center"
                          >
                            <span></span><span><span>billion</span></span>
                          </div></span
                        >
                      </h2>
                      <p  className="">Dollar Payout</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
         className="text-feature-one position-relative pt-180 xl-pt-150 lg-pt-100 md-pt-80 pb-180 xl-pb-150"
      >
        <div  className="container">
          <div  className="row">
            <div  className="col-lg-5 order-lg-last">
              <div  className="ps-xxl-4 wow fadeInRight">
                <div  className="title-one">
                  <h2>Get over 50.000+ talented experts in jobi.</h2>
                </div>
                <p  className="mt-40 md-mt-20 mb-40 md-mb-20">
                  A full hybrid workforce management tools are yours to use, as
                  well as access to our top 1% of talent. 
                </p>
                <ul  className="list-style-one style-none">
                  <li>Seamless searching</li>
                  <li>Get top 3% experts htmlFor your project</li>
                  <li>Protected payments system</li>
                </ul>
                <a  className="btn-one lg mt-50 md-mt-30" href="register.html"
                  >Post a Job</a
                >
              </div>
            </div>
            <div  className="col-lg-7 col-md-11 m-auto order-lg-first">
              <div  className="img-data position-relative pe-xl-5 me-xl-5 md-mt-50">
                <div  className="row">
                  <div  className="col-md-6 col-sm-8 col-10">
                    <img
                      alt="man img"
                      loading="lazy"
                      width="321"
                      height="197"
                      decoding="async"
                      data-nimg="1"
                       className="lazy-img img01"
                      style={{ color: "transparent" }}
                      srcSet="
                        /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_02.58610eb2.jpg&amp;w=384&amp;q=75 1x,
                        /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_02.58610eb2.jpg&amp;w=750&amp;q=75 2x
                      "
                      src="src/assets/img_02238a.jpg?url=%2F_next%2Fstatic%2Fmedia%2Fimg_02.58610eb2.jpg&amp;w=750&amp;q=75"
                    />
                  </div>
                </div>
                <div  className="row">
                  <div  className="col-md-4 col-5">
                    <img
                      alt="girl img"
                      loading="lazy"
                      width="195"
                      height="175"
                      decoding="async"
                      data-nimg="1"
                       className="lazy-img img02 mt-35"
                      style={{ color: "transparent" }}
                      srcSet="
                        /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_03.bfce9210.jpg&amp;w=256&amp;q=75 1x,
                        /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_03.bfce9210.jpg&amp;w=640&amp;q=75 2x
                      "
                      src="src/assets/img_03cadc.jpg?url=%2F_next%2Fstatic%2Fmedia%2Fimg_03.bfce9210.jpg&amp;w=640&amp;q=75"
                    />
                  </div>
                  <div  className="col-md-6 col-7">
                    <img
                      alt="man-img-2"
                      loading="lazy"
                      width="296"
                      height="323"
                      decoding="async"
                      data-nimg="1"
                       className="lazy-img img01 mt-35"
                      style={{ color: "transparent" }}
                      srcSet="
                        /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_04.cab1c569.jpg&amp;w=384&amp;q=75 1x,
                        /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_04.cab1c569.jpg&amp;w=640&amp;q=75 2x
                      "
                      src="src/assets/img_040a02.jpg?url=%2F_next%2Fstatic%2Fmedia%2Fimg_04.cab1c569.jpg&amp;w=640&amp;q=75"
                    />
                  </div>
                </div>
                <img
                  alt="screen_1-img"
                  loading="lazy"
                  width="503"
                  height="209"
                  decoding="async"
                  data-nimg="1"
                   className="lazy-img shapes screen01 wow fadeInRight"
                  style={{ color: "transparent" }}
                  srcSet="
                    /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen_01.2fd7c274.png&amp;w=640&amp;q=75  1x,
                    /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen_01.2fd7c274.png&amp;w=1080&amp;q=75 2x
                  "
                  src="src/assets/screen_0156b5.png?url=%2F_next%2Fstatic%2Fmedia%2Fscreen_01.2fd7c274.png&amp;w=1080&amp;q=75"
                /><img
                  alt="screen_2-img"
                  loading="lazy"
                  width="325"
                  height="182"
                  decoding="async"
                  data-nimg="1"
                   className="lazy-img shapes screen02 wow fadeInUp"
                  style={{ color: "transparent" }}
                  srcSet="
                    /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen_02.b6b52e0e.png&amp;w=384&amp;q=75 1x,
                    /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen_02.b6b52e0e.png&amp;w=750&amp;q=75 2x
                  "
                  src="src/assets/screen_022246.png?url=%2F_next%2Fstatic%2Fmedia%2Fscreen_02.b6b52e0e.png&amp;w=750&amp;q=75"
                /><img
                  alt="screen_3-img"
                  loading="lazy"
                  width="418"
                  height="250"
                  decoding="async"
                  data-nimg="1"
                   className="lazy-img shapes screen03 wow fadeInUp"
                  style={{ color: "transparent" }}
                  srcSet="
                    /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen_03.8790b4b7.png&amp;w=640&amp;q=75  1x,
                    /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen_03.8790b4b7.png&amp;w=1080&amp;q=75 2x
                  "
                  src="src/assets/screen_033759.png?url=%2F_next%2Fstatic%2Fmedia%2Fscreen_03.8790b4b7.png&amp;w=1080&amp;q=75"
                /><img
                  alt="shape"
                  loading="lazy"
                  width="47"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                   className="lazy-img shapes shape_01"
                  style={{ color: "transparent" }}
                  src="src/assets/static/media/shape_06.269d8f2d.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
         className="how-it-works position-relative bg-color pt-110 lg-pt-80 pb-110 lg-pb-70"
      >
        <div  className="container">
          <div
             className="title-one text-center mb-65 lg-mb-40 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <h2  className="text-white">
              How it’s 
              <span  className="position-relative"
                >work? 
                <img
                  alt="shape"
                  loading="lazy"
                  width="102"
                  height="74"
                  decoding="async"
                  data-nimg="1"
                   className="lazy-img shapes shape"
                  style={{ color: "transparent" }}
                  src="src/assets/static/media/shape_07.5d5a6cbd.svg"
              /></span>
            </h2>
          </div>
          <div  className="row justify-content-center">
            <div  className="col-xxl-3 col-lg-4 col-md-6">
              <div  className="card-style-two text-center mt-25 wow fadeInUp">
                <div
                   className="icon rounded-circle d-flex align-items-center justify-content-center m-auto"
                >
                  <img
                    alt="icon"
                    loading="lazy"
                    width="29"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                     className="lazy-img"
                    style={{ color: "transparent" }}
                    src="src/assets/static/media/icon_08.48144b82.svg"
                  />
                </div>
                <div  className="title fw-500 text-white">Create Account</div>
                <p>It’s very easy to open an account and start your journey.</p>
              </div>
            </div>
            <div  className="col-xxl-3 col-lg-4 col-md-6 m-auto">
              <div  className="card-style-two text-center mt-25 wow fadeInUp">
                <div
                   className="icon rounded-circle d-flex align-items-center justify-content-center m-auto"
                >
                  <img
                    alt="icon"
                    loading="lazy"
                    width="29"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                     className="lazy-img"
                    style={{ color: "transparent" }}
                    src="src/assets/static/media/icon_09.cc1ca8a6.svg"
                  />
                </div>
                <div  className="title fw-500 text-white">Complete your profile</div>
                <p>
                  Complete your profile with all the info to get attention of
                  client.
                </p>
              </div>
            </div>
            <div  className="col-xxl-3 col-lg-4 col-md-6">
              <div  className="card-style-two text-center mt-25 wow fadeInUp">
                <div
                   className="icon rounded-circle d-flex align-items-center justify-content-center m-auto"
                >
                  <img
                    alt="icon"
                    loading="lazy"
                    width="27"
                    height="30"
                    decoding="async"
                    data-nimg="1"
                     className="lazy-img"
                    style={{ color: "transparent" }}
                    src="src/assets/static/media/icon_10.0ccd7f8b.svg"
                  />
                </div>
                <div  className="title fw-500 text-white">Apply job or hire</div>
                <p>
                  Apply &amp; get your preferable jobs with all the requirements
                  and get it.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="shape"
          loading="lazy"
          width="102"
          height="74"
          decoding="async"
          data-nimg="1"
           className="lazy-img shapes shape_01"
          style={{ color: "transparent" }}
          src="src/assets/static/media/shape_07.5d5a6cbd.svg"
        /><img
          alt="shape"
          loading="lazy"
          width="102"
          height="74"
          decoding="async"
          data-nimg="1"
           className="lazy-img shapes shape_02"
          style={{ color: "transparent" }}
          src="src/assets/static/media/shape_07.5d5a6cbd.svg"
        />
      </section>
      <section
         className="feedback-section-one pt-180 xl-pt-150 lg-pt-100 pb-80 lg-pb-20"
      >
        <div  className="container position-relative">
          <div  className="row">
            <div  className="col-lg-5 col-md-6">
              <div
                 className="title-one text-center text-md-start mb-65 md-mb-50 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <h2  className="">Trusted by leading startups.</h2>
              </div>
            </div>
          </div>
          <div
             className="slick-slider row feedback-slider-one slick-initialized"
            dir="ltr"
          >
            <div  className="slick-list">
              <div  className="slick-track" style={{width: "400%", left: "-100%"}}>
                <div
                  data-index="-2"
                  tabIndex={-1}
                   className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{width: "12.5%"}}
                >
                  <div>
                    <div
                       className="item"
                      tabIndex={-1}
                      style={{width: "100%", display: "inline-block"}}
                    >
                      <div  className="feedback-block-one">
                        <div  className="logo">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="180"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_02.c3d91e99.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_02.c3d91e99.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_02c003.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_02.c3d91e99.png&amp;w=384&amp;q=75"
                          />
                        </div>
                        <blockquote
                           className="fw-500 mt-50 md-mt-30 mb-50 md-mb-30"
                        >
                          “Seattle opera simplifies Performance planning with
                          jobi eSignature.”
                        </blockquote>
                        <div  className="name text-dark">
                          <span  className="fw-500">Mark Joge ,</span
                          >Marketing Chief
                        </div>
                        <div
                           className="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center"
                        >
                          <div  className="text-md fw-500 text-dark">
                            4.8 
                             Awesome
                          </div>
                          <ul  className="style-none d-flex">
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="-1"
                  tabIndex={-1}
                   className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{width: "12.5%"}}
                >
                  <div>
                    <div
                       className="item"
                      tabIndex={-1}
                      style={{width: "100%", display: "inline-block"}}
                    >
                      <div  className="feedback-block-one">
                        <div  className="logo">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="213"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_01.fa200735.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_01.fa200735.png&amp;w=640&amp;q=75 2x
                            "
                            src="src/assets/media_010e73.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_01.fa200735.png&amp;w=640&amp;q=75"
                          />
                        </div>
                        <blockquote
                           className="fw-500 mt-50 md-mt-30 mb-50 md-mb-30"
                        >
                          “Seattle opera simplifies Performance planning with
                          jobi eSignature.”
                        </blockquote>
                        <div  className="name text-dark">
                          <span  className="fw-500">James Brower ,</span>Lead
                          Designer
                        </div>
                        <div
                           className="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center"
                        >
                          <div  className="text-md fw-500 text-dark">
                            4.8 
                             Excellent
                          </div>
                          <ul  className="style-none d-flex">
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="0"
                   className="slick-slide slick-active slick-current"
                  tabIndex={-1}
                  aria-hidden="false"
                  style={{outline: "none",width: "12.5%"}}
                >
                  <div>
                    <div
                       className="item"
                      tabIndex={-1}
                      style={{width: "100%", display: "inline-block"}}
                    >
                      <div  className="feedback-block-one">
                        <div  className="logo">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="213"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_01.fa200735.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_01.fa200735.png&amp;w=640&amp;q=75 2x
                            "
                            src="src/assets/media_010e73.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_01.fa200735.png&amp;w=640&amp;q=75"
                          />
                        </div>
                        <blockquote
                           className="fw-500 mt-50 md-mt-30 mb-50 md-mb-30"
                        >
                          “Seattle opera simplifies Performance planning with
                          jobi eSignature.”
                        </blockquote>
                        <div  className="name text-dark">
                          <span  className="fw-500">James Brower ,</span>Lead
                          Designer
                        </div>
                        <div
                           className="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center"
                        >
                          <div  className="text-md fw-500 text-dark">
                            4.5 
                             Excellent
                          </div>
                          <ul  className="style-none d-flex">
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="1"
                   className="slick-slide slick-active"
                  tabIndex={-1}
                  aria-hidden="false"
                  style={{outline: "none",width: "12.5%"}}
                >
                  <div>
                    <div
                       className="item"
                      tabIndex={-1}
                      style={{width: "100%", display: "inline-block"}}
                    >
                      <div  className="feedback-block-one">
                        <div  className="logo">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="180"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_02.c3d91e99.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_02.c3d91e99.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_02c003.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_02.c3d91e99.png&amp;w=384&amp;q=75"
                          />
                        </div>
                        <blockquote
                           className="fw-500 mt-50 md-mt-30 mb-50 md-mb-30"
                        >
                          “Seattle opera simplifies Performance planning with
                          jobi eSignature.”
                        </blockquote>
                        <div  className="name text-dark">
                          <span  className="fw-500">Mark Joge ,</span
                          >Marketing Chief
                        </div>
                        <div
                           className="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center"
                        >
                          <div  className="text-md fw-500 text-dark">
                            4.8 
                             Awesome
                          </div>
                          <ul  className="style-none d-flex">
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="2"
                   className="slick-slide"
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{outline: "none",width: "12.5%"}}
                >
                  <div>
                    <div
                       className="item"
                      tabIndex={-1}
                      style={{width: "100%", display: "inline-block"}}
                    >
                      <div  className="feedback-block-one">
                        <div  className="logo">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="213"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_01.fa200735.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_01.fa200735.png&amp;w=640&amp;q=75 2x
                            "
                            src="src/assets/media_010e73.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_01.fa200735.png&amp;w=640&amp;q=75"
                          />
                        </div>
                        <blockquote
                           className="fw-500 mt-50 md-mt-30 mb-50 md-mb-30"
                        >
                          “Seattle opera simplifies Performance planning with
                          jobi eSignature.”
                        </blockquote>
                        <div  className="name text-dark">
                          <span  className="fw-500">James Brower ,</span>Lead
                          Designer
                        </div>
                        <div
                           className="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center"
                        >
                          <div  className="text-md fw-500 text-dark">
                            4.8 
                             Excellent
                          </div>
                          <ul  className="style-none d-flex">
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="3"
                  tabIndex={-1}
                   className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{width: "12.5%"}}
                >
                  <div>
                    <div
                       className="item"
                      tabIndex={-1}
                      style={{width: "100%", display: "inline-block"}}
                    >
                      <div  className="feedback-block-one">
                        <div  className="logo">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="213"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_01.fa200735.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_01.fa200735.png&amp;w=640&amp;q=75 2x
                            "
                            src="src/assets/media_010e73.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_01.fa200735.png&amp;w=640&amp;q=75"
                          />
                        </div>
                        <blockquote
                           className="fw-500 mt-50 md-mt-30 mb-50 md-mb-30"
                        >
                          “Seattle opera simplifies Performance planning with
                          jobi eSignature.”
                        </blockquote>
                        <div  className="name text-dark">
                          <span  className="fw-500">James Brower ,</span>Lead
                          Designer
                        </div>
                        <div
                           className="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center"
                        >
                          <div  className="text-md fw-500 text-dark">
                            4.5 
                             Excellent
                          </div>
                          <ul  className="style-none d-flex">
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="4"
                  tabIndex={-1}
                   className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{width: "12.5%"}}
                >
                  <div>
                    <div
                       className="item"
                      tabIndex={-1}
                      style={{width: "100%", display: "inline-block"}}
                    >
                      <div  className="feedback-block-one">
                        <div  className="logo">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="180"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_02.c3d91e99.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_02.c3d91e99.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_02c003.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_02.c3d91e99.png&amp;w=384&amp;q=75"
                          />
                        </div>
                        <blockquote
                           className="fw-500 mt-50 md-mt-30 mb-50 md-mb-30"
                        >
                          “Seattle opera simplifies Performance planning with
                          jobi eSignature.”
                        </blockquote>
                        <div  className="name text-dark">
                          <span  className="fw-500">Mark Joge ,</span
                          >Marketing Chief
                        </div>
                        <div
                           className="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center"
                        >
                          <div  className="text-md fw-500 text-dark">
                            4.8 
                             Awesome
                          </div>
                          <ul  className="style-none d-flex">
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index="5"
                  tabIndex={-1}
                   className="slick-slide slick-cloned"
                  aria-hidden="true"
                  style={{width: "12.5%"}}
                >
                  <div>
                    <div
                       className="item"
                      tabIndex={-1}
                      style={{width: "100%", display: "inline-block"}}
                    >
                      <div  className="feedback-block-one">
                        <div  className="logo">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="213"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_01.fa200735.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_01.fa200735.png&amp;w=640&amp;q=75 2x
                            "
                            src="src/assets/media_010e73.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_01.fa200735.png&amp;w=640&amp;q=75"
                          />
                        </div>
                        <blockquote
                           className="fw-500 mt-50 md-mt-30 mb-50 md-mb-30"
                        >
                          “Seattle opera simplifies Performance planning with
                          jobi eSignature.”
                        </blockquote>
                        <div  className="name text-dark">
                          <span  className="fw-500">James Brower ,</span>Lead
                          Designer
                        </div>
                        <div
                           className="review pt-40 md-pt-20 mt-40 md-mt-30 d-flex justify-content-between align-items-center"
                        >
                          <div  className="text-md fw-500 text-dark">
                            4.8 
                             Excellent
                          </div>
                          <ul  className="style-none d-flex">
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star-fill"></i></a>
                            </li>
                            <li>
                              <a href="#"><i  className="bi bi-star"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul
             className="slider-arrows slick-arrow-one d-flex justify-content-center style-none sm-mt-30"
          >
            <li  className="prev_b slick-arrow"><i  className="bi bi-arrow-left"></i></li>
            <li  className="next_b slick-arrow">
              <i  className="bi bi-arrow-right"></i>
            </li>
          </ul>
          <div
             className="partner-logos border-0 pt-150 xl-pt-120 md-pt-80 sm-pt-40 pb-80 md-pb-40"
          >
            <div
               className="slick-slider partner-slider slick-initialized"
              dir="ltr"
            >
              <div  className="slick-list">
                <div
                   className="slick-track"
                  style={{width:" 333.33333333333337%", left: "-100.00000000000001%"}}
                >
                  <div
                    data-index="-6"
                    tabIndex={-1}
                     className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="180"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_04.7f511841.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_04.7f511841.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_048b61.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_04.7f511841.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-5"
                    tabIndex={-1}
                     className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="143"
                            height="34"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_05.201cef5e.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_05.201cef5e.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_05e0b0.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_05.201cef5e.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-4"
                    tabIndex={-1}
                     className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="141"
                            height="35"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_06.77a940e2.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_06.77a940e2.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_06e7cd.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_06.77a940e2.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-3"
                    tabIndex={-1}
                     className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="102"
                            height="40"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_07.4f9e5e95.png&amp;w=128&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_07.4f9e5e95.png&amp;w=256&amp;q=75 2x
                            "
                            src="src/assets/media_07dbb8.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_07.4f9e5e95.png&amp;w=256&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-2"
                    tabIndex={-1}
                     className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="140"
                            height="44"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_08.a7d0b3c1.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_08.a7d0b3c1.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_08b926.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_08.a7d0b3c1.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-1"
                    tabIndex={-1}
                     className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="143"
                            height="34"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_05.201cef5e.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_05.201cef5e.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_05e0b0.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_05.201cef5e.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="0"
                     className="slick-slide slick-active slick-current"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{outline: "none", width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="140"
                            height="59"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_03.6e960de5.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_03.6e960de5.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_031180.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_03.6e960de5.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="1"
                     className="slick-slide slick-active"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{outline: "none", width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="180"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_04.7f511841.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_04.7f511841.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_048b61.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_04.7f511841.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="2"
                     className="slick-slide slick-active"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{outline: "none", width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="143"
                            height="34"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_05.201cef5e.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_05.201cef5e.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_05e0b0.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_05.201cef5e.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="3"
                     className="slick-slide slick-active"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{outline: "none", width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="141"
                            height="35"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_06.77a940e2.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_06.77a940e2.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_06e7cd.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_06.77a940e2.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="4"
                     className="slick-slide slick-active"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{outline: "none", width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="102"
                            height="40"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_07.4f9e5e95.png&amp;w=128&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_07.4f9e5e95.png&amp;w=256&amp;q=75 2x
                            "
                            src="src/assets/media_07dbb8.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_07.4f9e5e95.png&amp;w=256&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="5"
                     className="slick-slide slick-active"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{outline: "none", width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="140"
                            height="44"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_08.a7d0b3c1.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_08.a7d0b3c1.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_08b926.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_08.a7d0b3c1.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="6"
                     className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{outline: "none", width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="143"
                            height="34"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_05.201cef5e.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_05.201cef5e.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_05e0b0.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_05.201cef5e.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="7"
                    tabIndex={-1}
                     className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="140"
                            height="59"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_03.6e960de5.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_03.6e960de5.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_031180.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_03.6e960de5.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="8"
                    tabIndex={-1}
                     className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="180"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_04.7f511841.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_04.7f511841.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_048b61.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_04.7f511841.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="9"
                    tabIndex={-1}
                     className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="143"
                            height="34"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_05.201cef5e.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_05.201cef5e.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_05e0b0.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_05.201cef5e.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="10"
                    tabIndex={-1}
                     className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="141"
                            height="35"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_06.77a940e2.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_06.77a940e2.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_06e7cd.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_06.77a940e2.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="11"
                    tabIndex={-1}
                     className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="102"
                            height="40"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_07.4f9e5e95.png&amp;w=128&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_07.4f9e5e95.png&amp;w=256&amp;q=75 2x
                            "
                            src="src/assets/media_07dbb8.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_07.4f9e5e95.png&amp;w=256&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="12"
                    tabIndex={-1}
                     className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="140"
                            height="44"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_08.a7d0b3c1.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_08.a7d0b3c1.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_08b926.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_08.a7d0b3c1.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="13"
                    tabIndex={-1}
                     className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{width: "5%"}}
                  >
                    <div>
                      <div
                         className="item"
                        tabIndex={-1}
                        style={{width: "100%", display: "inline-block"}}
                      >
                        <div  className="logo d-flex align-items-center">
                          <img
                            alt="logo"
                            loading="lazy"
                            width="143"
                            height="34"
                            decoding="async"
                            data-nimg="1"
                            style={{color:" transparent", height: "auto"}}
                            srcSet="
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_05.201cef5e.png&amp;w=256&amp;q=75 1x,
                              /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_05.201cef5e.png&amp;w=384&amp;q=75 2x
                            "
                            src="src/assets/media_05e0b0.png?url=%2F_next%2Fstatic%2Fmedia%2Fmedia_05.201cef5e.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section  className="job-portal-intro">
        <div  className="container">
          <div
             className="wrapper bottom-border top-border pt-100 lg-pt-80 md-pt-50 pb-65 md-pb-50"
          >
            <div  className="row align-items-center">
              <div  className="col-lg-7">
                <div
                   className="text-center text-lg-start wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <h2>Most complete job portal.</h2>
                  <p  className="text-md m0 md-pb-20">
                    Signup and start find your job or talents.
                  </p>
                </div>
              </div>
              <div  className="col-lg-5">
                <ul
                   className="btn-group style-none d-flex flex-wrap justify-content-center justify-content-lg-end"
                >
                  <li  className="me-2">
                    <a  className="btn-three" href="job-list-v1.html"
                      >Looking htmlFor job?</a
                    >
                  </li>
                  <li  className="ms-2">
                    <a  className="btn-four" href="register.html">Post a job</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div  className="footer-one">
        <div  className="container">
          <div  className="inner-wrapper">
            <div  className="row">
              <div  className="col-lg-2 col-md-3 footer-intro mb-15">
                <div  className="logo mb-15">
                  <a  className="d-flex align-items-center" href="index.html"
                    ><img
                      alt="logo"
                      width="119"
                      height="42"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      srcSet="
                        /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_03.c3596e56.png&amp;w=128&amp;q=75 1x,
                        /src/assets/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_03.c3596e56.png&amp;w=256&amp;q=75 2x
                      "
                      src="src/assets/logo_03ec82.png?url=%2F_next%2Fstatic%2Fmedia%2Flogo_03.c3596e56.png&amp;w=256&amp;q=75"
                  /></a>
                </div>
                <img
                  alt="shape"
                  loading="lazy"
                  width="53"
                  height="53"
                  decoding="async"
                  data-nimg="1"
                   className="lazy-img mt-80 sm-mt-30 sm-mb-20"
                  style={{ color: "transparent" }}
                  src="src/assets/static/media/shape_28.761e9e53.svg"
                />
              </div>
              <div  className="col-lg-2 col-md-3 col-sm-4 mb-20">
                <h5  className="footer-title">Services​</h5>
                <ul  className="footer-nav-link style-none">
                  <li><a href="job-grid-v2.html">Browse Jobs</a></li>
                  <li><a href="company-v1.html">Companies</a></li>
                  <li><a href="candidates-v1.html">Candidates</a></li>
                  <li><a href="pricing.html">Pricing</a></li>
                </ul>
              </div>
              <div  className="col-lg-2 col-md-3 col-sm-4 mb-20">
                <h5  className="footer-title">Company</h5>
                <ul  className="footer-nav-link style-none">
                  <li><a href="about-us.html">About us</a></li>
                  <li><a href="blog-v2.html">Blogs</a></li>
                  <li><a href="faq.html">FAQ’s</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>
              <div  className="col-lg-2 col-md-3 col-sm-4 mb-20">
                <h5  className="footer-title">Support</h5>
                <ul  className="footer-nav-link style-none">
                  <li><a href="contact.html">Terms of use</a></li>
                  <li><a href="contact.html">Terms &amp; conditions</a></li>
                  <li><a href="contact.html">Privacy</a></li>
                  <li><a href="contact.html">Cookie policy</a></li>
                </ul>
              </div>
              <div  className="col-lg-4 mb-20 footer-newsletter">
                <h5  className="footer-title">Newsletter</h5>
                <p  className="">Join &amp; get important new regularly</p>
                <form  className="d-flex" action="#">
                  <input type="email" placeholder="Enter your email*" /><button>
                    Send
                  </button>
                </form>
                <p  className="note">
                  We only send interesting and relevant emails.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div  className="bottom-footer undefined">
          <div  className="container">
            <div  className="row align-items-center">
              <div  className="col-lg-4 order-lg-3 mb-15">
                <ul
                   className="style-none d-flex order-lg-last justify-content-center justify-content-lg-end social-icon"
                >
                  <li>
                    <a href="#"><i  className="bi bi-whatsapp"></i></a>
                  </li>
                  <li>
                    <a href="#"><i  className="bi bi-dribbble"></i></a>
                  </li>
                  <li>
                    <a href="#"><i  className="bi bi-google"></i></a>
                  </li>
                  <li>
                    <a href="#"><i  className="bi bi-instagram"></i></a>
                  </li>
                </ul>
              </div>
              <div  className="col-lg-4 order-lg-1 mb-15">
                <ul
                   className="d-flex style-none bottom-nav justify-content-center justify-content-lg-start"
                >
                  <li><a href="contact.html">Privacy &amp; Terms.</a></li>
                  <li><a href="contact.html"> Contact Us</a></li>
                </ul>
              </div>
              <div  className="col-lg-4 order-lg-2">
                <p  className="text-center mb-15">
                  Copyright @ 2023 
                  jobi inc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}