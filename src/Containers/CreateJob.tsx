import { FormProvider, useForm } from 'react-hook-form';
import '../Components/Styles/CreateJobStyles.css';
import { Select } from 'Components/Select/Select';
import { useState } from 'react';
import {
  EXPERIENCE_OPTIONS,
  FLUENCY_OPTIONS,
  INDUSTRY_OPTIONS,
  JOB_CATEGORY_OPTIONS,
  JOB_TYPE_OPTIONS,
  SKILLS,
  STATES,
} from 'Components/admin/constants';

const CreateJob = () => {
  const formMethods = useForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  return (
    <div className="bg-BG_GREEN h-auto text-left dashboard-body">
      <h2 className="main-title text-DARK_GREEN text-left">Post a New Job</h2>
      <>
        <div className="py-6  px-4 rounded-lg ">
          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit((data: any) => console.log(data))}>
              <div className="bg-white card-box border-20">
                <h4 className="dash-title-three">Job Details</h4>
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Job Title*</label>
                  <input
                    type="text"
                    placeholder="Ex: Product Designer"
                    {...register('jobTitle')}
                  />
                </div>
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Job Description*</label>
                  <textarea
                    className="size-lg"
                    placeholder="Write about the job in details..."
                    {...register('jobDescription')}
                  ></textarea>
                </div>
                <div className="row align-items-end">
                  <div className="col-md-6">
                    <div className="dash-input-wrapper mb-30">
                      <label htmlFor="">Job Category</label>
                      <Select
                        options={JOB_CATEGORY_OPTIONS}
                        name="jobCategory"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="dash-input-wrapper mb-30">
                      <label htmlFor="">Job Type</label>
                      <Select options={JOB_TYPE_OPTIONS} name="jobType" />
                    </div>
                  </div>
                  <div className="dash-input-wrapper">
                    <label>Salary Range</label>
                  </div>
                  <div className="col-md-3">
                    <div className="dash-input-wrapper mb-30">
                      <input type="text" placeholder="Min" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="dash-input-wrapper mb-30">
                      <input type="text" placeholder="Max" />
                    </div>
                  </div>
                </div>
                <h4 className="dash-title-three pt-50 lg-pt-30">
                  Skills &amp; Experience
                </h4>
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Skills*</label>

                  <Select options={SKILLS} isMulti={true} name="skills" />
                </div>
                <div className="row align-items-end">
                  <div className="col-md-6">
                    <div className="dash-input-wrapper mb-30">
                      <label htmlFor="">Experience*</label>
                      <Select name="experience" options={EXPERIENCE_OPTIONS} />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="dash-input-wrapper mb-30">
                      <label htmlFor="">Industry*</label>
                      <Select
                        options={INDUSTRY_OPTIONS}
                        {...register('industry')}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="dash-input-wrapper mb-30">
                      <label htmlFor="">English Fluency</label>
                      <Select name="fluency" options={FLUENCY_OPTIONS} />
                    </div>
                  </div>
                </div>

                <h4 className="dash-title-three pt-50 lg-pt-30">
                  Address &amp; Location
                </h4>
                <div className="row">
                  <div className="col-12">
                    <div className="dash-input-wrapper mb-25">
                      <label htmlFor="">Address*</label>
                      <input
                        type="text"
                        placeholder="Cowrasta, Chandana, Gazipur Sadar"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="dash-input-wrapper mb-25">
                      <label htmlFor="">Country*</label>
                      <Select
                        name="country"
                        options={[{ id: 1, label: 'India' }]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="dash-input-wrapper mb-30">
                      <label htmlFor="">City</label>
                      <input
                        type="text"
                        placeholder="Enter city name"
                        {...register('city')}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="dash-input-wrapper mb-25">
                      <label htmlFor="">State*</label>
                      <Select {...register('state')} options={STATES} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-group d-inline-flex align-items-center mt-30">
                <button className="dash-btn-two tran3s me-3">Submit</button>
              </div>
            </form>
          </FormProvider>
        </div>
      </>
    </div>
  );
};

export default CreateJob;
