import { FC } from "react";

export const LoginPage: FC<{
  showLogin: boolean;
  setShowLogin: (show: boolean) => void;
}> = ({
  showLogin = false,
  setShowLogin,
}: {
  showLogin: boolean;
  setShowLogin: (show: boolean) => void;
}) => {
  return showLogin ? (
    <div
      className="modal fade show !block bg-black/[.4]"
      id="loginModal"
      tabIndex={-1}
      aria-modal
    >
      <div className="modal-dialog modal-fullscreen modal-dialog-centered">
        <div className="container">
          <div className="user-data-form modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setShowLogin(false)}
            ></button>
            <div className="text-center">
              <h2>Hi, Welcome !</h2>
              <p>
                Still do not have an account?
                <a href="/register">Sign up</a>
              </p>
            </div>
            <div className="form-wrapper m-auto">
              <form className="mt-10">
                <div className="row">
                  <div className="col-12">
                    <div className="input-group-meta position-relative mb-25">
                      <label>Email*</label>
                      <input
                        type="email"
                        placeholder="james@example.com"
                        name="email"
                      />
                      <div className="help-block with-errors">
                        <div style={{ color: "red" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group-meta position-relative mb-20">
                      <label>Password*</label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        className="pass_log_id"
                        name="password"
                      />
                      <span className="placeholder_icon">
                        <span className="passVicon">
                          <img
                            alt="icon"
                            loading="lazy"
                            width="24"
                            height="16"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            src="media/icon_60.3d29845b.svg"
                          />
                        </span>
                      </span>
                      <div className="help-block with-errors">
                        <div style={{ color: "red" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="agreement-checkbox d-flex justify-content-between align-items-center">
                      <div>
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Keep me logged in</label>
                      </div>
                      <a href="#">Forget Password?</a>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn-eleven fw-500 tran3s d-block mt-20"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>

              <p className="text-center mt-10">
                Do not have an account?
                <a className="fw-500" href="register.html">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
