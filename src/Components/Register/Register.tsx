import React, { FC, useState } from "react";
import cx from "classnames";

import { useNavigate } from "react-router";
import { pagePaths } from "config/pages";
import { useForm } from "react-hook-form";
import {  SignUp } from "service/hooks/auth.hooks";
export const RegisterPage: FC = () => {
  const [registerType, setRegisterType] = useState("emp");
  const [submitSignup] = SignUp({
    fetchPolicy: "network-only",
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const submitData = {
      name: data?.name,
      age: Number(data?.age),
      email: data?.email,
      phone: data?.phone,
      password: data?.password,
    };
    console.log("data", submitData, data);
    submitSignup({
      variables: {
        ...submitData,
      },
      onCompleted: (data: any) => {
        console.log(">>>", data);
        if (data?.email) {
          navigate(pagePaths?.login);
        }
      },
    });
  };
  return (
    <>
      <div className="inner-banner-one position-relative">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-xl-6 m-auto text-center">
                <div className="title-two">
                  <h2 className="text-white">Register</h2>
                </div>
                <p className="text-lg text-white mt-30 lg-mt-20">
                  Create an account &amp; Start posting or hiring talents
                </p>
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
          style={{ color: " transparent" }}
          src="media/shape_02.e6196842.svg"
        />
        <img
          alt="shape"
          loading="lazy"
          width="141"
          height="57"
          decoding="async"
          data-nimg="1"
          className="lazy-img shapes shape_02"
          style={{ color: " transparent" }}
          src="/media/shape_03.746a3d0c.svg"
        />
      </div>
      <section className="registration-section position-relative pt-100 lg-pt-80 pb-150 lg-pb-80">
        <div className="container">
          <div className="user-data-form">
            <div className="text-center">
              <h2>Create Account</h2>
            </div>
            <div className="form-wrapper m-auto">
              <ul className="nav nav-tabs border-0 w-100 mt-30" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={cx("nav-link ", {
                      active: registerType === "can",
                    })}
                    data-bs-toggle="tab"
                    data-bs-target="#fc1"
                    role="tab"
                    aria-selected="true"
                    tabIndex={-1}
                    onClick={() => setRegisterType("can")}
                  >
                    Candidates
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={cx("nav-link ", {
                      active: registerType === "emp",
                    })}
                    data-bs-toggle="tab"
                    data-bs-target="#fc2"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                    onClick={() => setRegisterType("emp")}
                  >
                    Employer
                  </button>
                </li>
              </ul>
              <div className="tab-content mt-40">
                <div
                  className="tab-pane fade show active"
                  role="tabpanel"
                  id="fc1"
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-12">
                        <div className="input-group-meta position-relative mb-25">
                          <label>Name*</label>
                          <input
                            type="text"
                            placeholder="James Brower"
                            {...register("name")}
                          />
                          <div className="help-block with-errors">
                            <div style={{ color: "red" }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-group-meta position-relative mb-25">
                          <label>Phone*</label>
                          <input
                            type="number"
                            placeholder="james@example.com"
                            {...register("phone")}
                          />
                          <div className="help-block with-errors">
                            <div style={{ color: "red" }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-group-meta position-relative mb-25">
                          <label>Age*</label>
                          <input
                            type="number"
                            min={18}
                            max={100}
                            placeholder="james@example.com"
                            {...register("age")}
                          />
                          <div className="help-block with-errors">
                            <div style={{ color: "red" }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-group-meta position-relative mb-25">
                          <label>Email*</label>
                          <input
                            type="email"
                            placeholder="james@example.com"
                            {...register("email")}
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
                            {...register("password")}
                          />
                          <span className="placeholder_icon">
                            <span className="passVicon">
                              <img
                                alt="pass-icon"
                                loading="lazy"
                                width="24"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: "transparent" }}
                                src="/media/icon_60.3d29845b.svg"
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
                            <input type="checkbox" name="remember" />
                            <label htmlFor="remember">
                              By hitting the Register button, you agree to the
                              <a href="#">Terms conditions</a> &amp;
                              <a href="#">Privacy Policy</a>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn-eleven fw-500 tran3s d-block mt-20"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade" role="tabpanel" id="fc2">
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <div className="input-group-meta position-relative mb-25">
                          <label>Name*</label>
                          <input
                            type="text"
                            placeholder="James Brower"
                            name="name"
                          />
                          <div className="help-block with-errors">
                            <div style={{ color: "red" }}></div>
                          </div>
                        </div>
                      </div>
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
                                alt="pass-icon"
                                loading="lazy"
                                width="24"
                                height="16"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: "transparent" }}
                                src="/media/icon_60.3d29845b.svg"
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
                            <input type="checkbox" name="remember" />
                            <label htmlFor="remember">
                              By hitting the Register button, you agree to the
                              <a href="#">Terms conditions</a> &amp;
                              <a href="#">Privacy Policy</a>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn-eleven fw-500 tran3s d-block mt-20"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <p className="text-center mt-10">
                Have an account?
                <a
                  href="#"
                  className="fw-500"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
