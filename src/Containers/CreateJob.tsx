import { useForm } from 'react-hook-form';
import '../Components/Styles/CreateJobStyles.css';
import { Select } from 'Components/Select/Select';
import { useState } from 'react';

const CreateJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const JOB_CATEGORY_OPTIONS = [
    { id: 1, label: 'Designer' },
    { id: 2, label: 'Writer' },
  ];

  const JOB_TYPE_OPTIONS = [
    { id: 1, label: 'Full Time' },
    { id: 2, label: 'Part-Time' },
    { id: 2, label: 'Hourly Contract' },
  ];

  const EXPERIENCE_OPTIONS = [
    { id: 1, label: 'Expert(' },
    { id: 2, label: 'Intermediate' },
    { id: 2, label: 'Beginner' },
  ];

  const INDUSTRY_OPTIONS = [
    { id: 1, label: 'Information Technology' },
    { id: 2, label: 'Healthcare' },
    { id: 3, label: 'Finance' },
    { id: 4, label: 'Education' },
    { id: 5, label: 'Engineering' },
    { id: 6, label: 'Marketing' },
    { id: 7, label: 'Hospitality' },
    { id: 8, label: 'Retail' },
    { id: 9, label: 'Entertainment' },
    { id: 10, label: 'Manufacturing' },
    { id: 11, label: 'Agriculture' },
    { id: 12, label: 'Transportation' },
    { id: 13, label: 'Government' },
    { id: 14, label: 'Real Estate' },
    { id: 15, label: 'Legal' },
    { id: 16, label: 'Art and Design' },
    { id: 17, label: 'Non-profit' },
    { id: 18, label: 'Consulting' },
    { id: 19, label: 'Science' },
    { id: 20, label: 'Sports' },
  ];

  const FLUENCY_OPTIONS = [
    { id: 1, label: 'Beginner' },
    { id: 2, label: 'Intermediate' },
    { id: 3, label: 'Advanced' },
    { id: 4, label: 'Fluent' },
    { id: 5, label: 'Native' },
  ];

  const STATES = [
    [
      { id: 'AN', label: 'Andaman and Nicobar Islands' },
      { id: 'AP', label: 'Andhra Pradesh' },
      { id: 'AR', label: 'Arunachal Pradesh' },
      { id: 'AS', label: 'Assam' },
      { id: 'BR', label: 'Bihar' },
      { id: 'CG', label: 'Chhattisgarh' },
      { id: 'CH', label: 'Chandigarh' },
      { id: 'DN', label: 'Dadra and Nagar Haveli and Daman and Diu' },
      { id: 'DL', label: 'Delhi' },
      { id: 'GA', label: 'Goa' },
      { id: 'GJ', label: 'Gujarat' },
      { id: 'HP', label: 'Himachal Pradesh' },
      { id: 'HR', label: 'Haryana' },
      { id: 'JH', label: 'Jharkhand' },
      { id: 'JK', label: 'Jammu and Kashmir' },
      { id: 'KA', label: 'Karnataka' },
      { id: 'KL', label: 'Kerala' },
      { id: 'LA', label: 'Ladakh' },
      { id: 'LD', label: 'Lakshadweep' },
      { id: 'MH', label: 'Maharashtra' },
      { id: 'ML', label: 'Meghalaya' },
      { id: 'MN', label: 'Manipur' },
      { id: 'MP', label: 'Madhya Pradesh' },
      { id: 'MZ', label: 'Mizoram' },
      { id: 'NL', label: 'Nagaland' },
      { id: 'OR', label: 'Odisha' },
      { id: 'PB', label: 'Punjab' },
      { id: 'PY', label: 'Puducherry' },
      { id: 'RJ', label: 'Rajasthan' },
      { id: 'SK', label: 'Sikkim' },
      { id: 'TG', label: 'Telangana' },
      { id: 'TN', label: 'Tamil Nadu' },
      { id: 'TR', label: 'Tripura' },
      { id: 'TT', label: 'All India' },
      { id: 'UP', label: 'Uttar Pradesh' },
      { id: 'UT', label: 'Uttarakhand' },
      { id: 'WB', label: 'West Bengal' },
    ],
  ];

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div className="bg-BG_GREEN h-auto text-left dashboard-body">
      <h2 className="main-title text-DARK_GREEN text-left">Post a New Job</h2>
      <>
        <div className="py-6  px-4 rounded-lg ">
          <form
            onSubmit={handleSubmit((data: any) => console.log(data))}
          ></form>
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
                    {...register('jobCategory')}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Job Type</label>
                  <Select options={JOB_TYPE_OPTIONS} {...register('jobType')} />
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
              {/* <input type="text" placeholder="Add Skills" />
              <div className="skill-input-data d-flex align-items-center flex-wrap">
                <button>Design</button>
                <button>UI</button>
                <button>Digital</button>
                <button>Graphics</button>
                <button>Developer</button>
                <button>Product</button>
                <button>Microsoft</button>
                <button>Brand</button>
                <button>Photoshop</button>
                <button>Business</button>
                <button>IT &amp; Technology</button>
                <button>Marketing</button>
                <button>Article</button>
                <button>Engineer</button>
                <button>HTML5</button>
                <button>Figma</button>
                <button>Automobile</button>
                <button>Account</button>
              </div> */}
              <Select isMulti={true} />
              <Select options={options} {...register('skills')} />
            </div>
            <div className="row align-items-end">
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Experience*</label>
                  <Select
                    {...register('experience')}
                    options={EXPERIENCE_OPTIONS}
                  />
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
                  <Select {...register('fluency')} options={FLUENCY_OPTIONS} />
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
                    {...register('country')}
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
        </div>
      </>
    </div>
  );
};

export default CreateJob;
