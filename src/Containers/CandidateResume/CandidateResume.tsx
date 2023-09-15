import { AddEdu } from 'Components/AddEdu/AddEdu';
import { AddExp } from 'Components/AddExp/AddExp';
import { FileUpload } from 'Components/FileUpload/FileUpload';
import { Select } from 'Components/Select/Select';
import { SKILLS } from 'Components/admin/constants';
import { useState } from 'react';

const CandidateResume = () => {
  const [eduCount, setEduCount] = useState(1);
  const [expCount, setExpCount] = useState(1);

  const renderNtimes = () => {
    const Element = [];
    for (let index = 0; index < eduCount; index++) {
      Element.push(<AddEdu />);
    }
    return <div>{Element}</div>;
  };

  const renderNtimesExp = () => {
    const Element = [];
    for (let index = 0; index < expCount; index++) {
      Element.push(<AddExp />);
    }
    return <div>{Element}</div>;
  };
  return (
    <div>
      <div className="dashboard-body !ml-0">
        <div className="position-relative">
          <h2 className="main-title">My Resume</h2>
          <div className="bg-white card-box border-20">
            <h4 className="dash-title-three">Resume Attachment</h4>

            <FileUpload />
          </div>
          <div className="bg-white card-box border-20 mt-40">
            <div className="dash-input-wrapper mb-30 mt-30  ">
              <h4 className="dash-title-three block">Personal Details</h4>
              <div className="flex space-x-9">
                <>
                  <div className="w-5/6">
                    <label htmlFor="">Name*</label>
                    <input
                      type="text"
                      placeholder="Enter name"
                      //   {...register('jobTitle')}
                    />
                  </div>
                </>
                <>
                  <div className="w-1/6">
                    <label htmlFor="">Age*</label>
                    <input
                      type="text"
                      placeholder="Age"
                      //   {...register('jobTitle')}
                    />
                  </div>
                </>
              </div>
            </div>
            <div className="dash-input-wrapper mb-30 mt-30 flex space-x-9 w-full">
              <>
                <div>
                  <label htmlFor="">Phone*</label>
                  <input
                    type="text"
                    placeholder="Phone"
                    //   {...register('jobTitle')}
                  />
                </div>
              </>
              <>
                <div className="w-3/6">
                  <label htmlFor="">Email*</label>
                  <input
                    type="text"
                    placeholder="Email"
                    //   {...register('jobTitle')}
                  />
                </div>
              </>
              <>
                <div className="w-1/6">
                  <label htmlFor="">Gender*</label>
                  <Select
                    placeholder="Gender"
                    options={[
                      { id: 1, label: 'M' },
                      { id: 2, label: 'F' },
                      { id: 3, label: 'Others' },
                    ]}
                  />
                </div>
              </>
            </div>
          </div>
          <div className="bg-white card-box border-20 mt-40">
            <h4 className="dash-title-three">Intro &amp; Overview</h4>
            <div className="dash-input-wrapper mb-35 md-mb-20">
              <label htmlFor="">Overview*</label>
              <textarea
                className="size-lg"
                placeholder="Write something interesting about you...."
              ></textarea>
              <div className="alert-text">
                Brief description for your resume.
              </div>
            </div>
          </div>

          <div className="bg-white card-box border-20 mt-40">
            <h4 className="dash-title-three">Education</h4>

            {renderNtimes()}
            {/* </Collapsible> */}
            <div className="flex justify-between">
              <button
                className="dash-btn-one "
                onClick={() => setEduCount(eduCount + 1)}
                disabled={eduCount === 3}
              >
                <i className="bi bi-plus"></i> Add more
              </button>
              {eduCount > 1 && (
                <button
                  className="bg-YELLOW_GREEN rounded-full py-2 px-3"
                  onClick={() => setEduCount(expCount - 1)}
                >
                  <i className="bi "></i> Delete
                </button>
              )}
            </div>
          </div>
          <div className="bg-white card-box border-20 mt-40">
            <h4 className="dash-title-three">Skills &amp; Experience</h4>

            <Select options={SKILLS} isMulti={true} />
            <div className="dash-input-wrapper mb-15 mt-3">
              <label htmlFor="">Add Work Experience*</label>
            </div>

            {renderNtimesExp()}
            <div className="flex justify-between">
              <button
                className="dash-btn-one"
                onClick={() => setExpCount(expCount + 1)}
              >
                <i className="bi bi-plus"></i> Add more
              </button>
              {expCount > 1 && (
                <button
                  className="bg-YELLOW_GREEN rounded-full py-2 px-3"
                  onClick={() => setExpCount(expCount - 1)}
                >
                  <i className="bi "></i> Delete
                </button>
              )}
            </div>
          </div>

          <div className="button-group d-inline-flex align-items-center mt-30">
            <a href="#" className="dash-btn-two tran3s me-3">
              Save
            </a>
            <a href="#" className="dash-cancel-btn tran3s">
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateResume;
