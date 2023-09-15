import { useForm } from 'react-hook-form';
import '../Components/Styles/CreateJobStyles.css';
import { Select } from 'Components/Select/Select';

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

  return (
    <div className="bg-BG_GREEN h-screen text-left dashboard-body">
      <h2 className="main-title text-DARK_GREEN text-left">Post a New Job</h2>
      <>
        <div className="py-6  px-4 rounded-lg ">
          {/* <h4 className="text-xl mb-6">Job Details</h4> */}
          <form onSubmit={handleSubmit((data: any) => console.log(data))}>
            {/* <div className="dash-input-wrapper mb-30">
              <label htmlhtmlFor="title">Job Title</label>
              <input
                {...register('title')}
                placeholder="Ex: Producr Designer"
              />
            </div>
            <div className="dash-input-wrapper mb-30">
              <label htmlhtmlFor="title">Job Description</label>
              <textarea
                className="size-lg"
                {...register('title')}
                placeholder="Write about the job in details..."
              />
            </div>
            <div className="row align-items-end">
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlhtmlFor="">Job Category</label>
                  <Select name="category" options={JOB_CATEGORY_OPTIONS} />
                </div>
              </div>
            </div> */}
          </form>
          <div className="bg-white card-box border-20">
            <h4 className="dash-title-three">Job Details</h4>
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Job Title*</label>
              <input type="text" placeholder="Ex: Product Designer" />
            </div>
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Job Description*</label>
              <textarea
                className="size-lg"
                placeholder="Write about the job in details..."
              ></textarea>
            </div>
            <div className="row align-items-end">
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Job Category</label>
                  <div className="nice-select  false" role="button">
                    <span className="current">Designer</span>
                    <ul className="list" role="menubar">
                      <li
                        data-value="Designer"
                        className="option selected focus"
                        role="menuitem"
                      >
                        Designer
                      </li>
                      <li
                        data-value="It &amp; Development"
                        className="option false"
                        role="menuitem"
                      >
                        It &amp; Development
                      </li>
                      <li
                        data-value="Web &amp; Mobile Dev"
                        className="option false"
                        role="menuitem"
                      >
                        Web &amp; Mobile Dev
                      </li>
                      <li
                        data-value="Writing"
                        className="option false"
                        role="menuitem"
                      >
                        Writing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Job Type</label>
                  <div className="nice-select  false" role="button">
                    <span className="current">Full time</span>
                    <ul className="list" role="menubar">
                      <li
                        data-value="Full time"
                        className="option selected focus"
                        role="menuitem"
                      >
                        Full time
                      </li>
                      <li
                        data-value="Part time"
                        className="option false"
                        role="menuitem"
                      >
                        Part time
                      </li>
                      <li
                        data-value="Hourly-Contract"
                        className="option false"
                        role="menuitem"
                      >
                        Hourly-Contract
                      </li>
                      <li
                        data-value="Fixed-Price"
                        className="option false"
                        role="menuitem"
                      >
                        Fixed-Price
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Salary*</label>
                  <div className="nice-select  false" role="button">
                    <span className="current">Monthly</span>
                    <ul className="list" role="menubar">
                      <li
                        data-value="Monthly"
                        className="option selected focus"
                        role="menuitem"
                      >
                        Monthly
                      </li>
                      <li
                        data-value="Weekly"
                        className="option false"
                        role="menuitem"
                      >
                        Weekly
                      </li>
                    </ul>
                  </div>
                </div>
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
              <input type="text" placeholder="Add Skills" />
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
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Experience*</label>
                  <div className="nice-select  false" role="button">
                    <span className="current">Intermediate</span>
                    <ul className="list" role="menubar">
                      <li
                        data-value="Intermediate"
                        className="option selected focus"
                        role="menuitem"
                      >
                        Intermediate
                      </li>
                      <li
                        data-value="No-Experience"
                        className="option false"
                        role="menuitem"
                      >
                        No-Experience
                      </li>
                      <li
                        data-value="Expert"
                        className="option false"
                        role="menuitem"
                      >
                        Expert
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Location*</label>
                  <div className="nice-select  false" role="button">
                    <span className="current">Washington DC</span>
                    <ul className="list" role="menubar">
                      <li
                        data-value="Washington DC"
                        className="option selected focus"
                        role="menuitem"
                      >
                        Washington DC
                      </li>
                      <li
                        data-value="California, CA"
                        className="option false"
                        role="menuitem"
                      >
                        California, CA
                      </li>
                      <li
                        data-value="New York"
                        className="option false"
                        role="menuitem"
                      >
                        New York
                      </li>
                      <li
                        data-value="Miami"
                        className="option false"
                        role="menuitem"
                      >
                        Miami
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Industry*</label>
                  <div className="nice-select  false" role="button">
                    <span className="current">Select Industry</span>
                    <ul className="list" role="menubar">
                      <li
                        data-value="Select Industry"
                        className="option selected focus"
                        role="menuitem"
                      >
                        Select Industry
                      </li>
                      <li
                        data-value="Select Industry 2"
                        className="option false"
                        role="menuitem"
                      >
                        Select Industry 2
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">English Fluency</label>
                  <div className="nice-select  false" role="button">
                    <span className="current">Basic</span>
                    <ul className="list" role="menubar">
                      <li
                        data-value="Basic"
                        className="option selected focus"
                        role="menuitem"
                      >
                        Basic
                      </li>
                      <li
                        data-value="Conversational"
                        className="option false"
                        role="menuitem"
                      >
                        Conversational
                      </li>
                      <li
                        data-value="Fluent"
                        className="option false"
                        role="menuitem"
                      >
                        Fluent
                      </li>
                      <li
                        data-value="Native/Bilingual"
                        className="option false"
                        role="menuitem"
                      >
                        Native/Bilingual
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="dash-title-three pt-50 lg-pt-30">File Attachment</h4>
            <div className="dash-input-wrapper mb-20">
              <label htmlFor="">File Attachment*</label>
              <div className="attached-file d-flex align-items-center justify-content-between mb-15">
                <span>guidline&amp;requirments.doc</span>
                <a href="#" className="remove-btn">
                  <i className="bi bi-x"></i>
                </a>
              </div>
            </div>
            <div className="dash-btn-one d-inline-block position-relative me-3">
              <i className="bi bi-plus"></i>Upload File
              <input type="file" id="uploadCV" placeholder="" name="uploadCV" />
            </div>
            <small>Upload file .pdf, .doc, .docx</small>
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
                  <div className="nice-select  false" role="button">
                    <span className="current">Afghanistan</span>
                    <ul className="list" role="menubar">
                      <li
                        data-value="Afghanistan"
                        className="option selected focus"
                        role="menuitem"
                      >
                        Afghanistan
                      </li>
                      <li
                        data-value="Albania"
                        className="option false"
                        role="menuitem"
                      >
                        Albania
                      </li>
                      <li
                        data-value="Belgium"
                        className="option false"
                        role="menuitem"
                      >
                        Belgium
                      </li>
                      <li
                        data-value="Barbados"
                        className="option false"
                        role="menuitem"
                      >
                        Barbados
                      </li>
                      <li
                        data-value="Australia"
                        className="option false"
                        role="menuitem"
                      >
                        Australia
                      </li>
                      <li
                        data-value="Angola"
                        className="option false"
                        role="menuitem"
                      >
                        Angola
                      </li>
                      <li
                        data-value="Austria"
                        className="option false"
                        role="menuitem"
                      >
                        Austria
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">City*</label>
                  <div className="nice-select  false" role="button">
                    <span className="current">Sydney</span>
                    <ul className="list" role="menubar">
                      <li
                        data-value="Sydney"
                        className="option selected focus"
                        role="menuitem"
                      >
                        Sydney
                      </li>
                      <li
                        data-value="Tokyo"
                        className="option false"
                        role="menuitem"
                      >
                        Tokyo
                      </li>
                      <li
                        data-value="Delhi"
                        className="option false"
                        role="menuitem"
                      >
                        Delhi
                      </li>
                      <li
                        data-value="Shanghai"
                        className="option false"
                        role="menuitem"
                      >
                        Shanghai
                      </li>
                      <li
                        data-value="Mumbai"
                        className="option false"
                        role="menuitem"
                      >
                        Mumbai
                      </li>
                      <li
                        data-value="Bangalore"
                        className="option false"
                        role="menuitem"
                      >
                        Bangalore
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">State*</label>
                  <div className="nice-select  false" role="button">
                    <span className="current">Sydney</span>
                    <ul className="list" role="menubar">
                      <li
                        data-value="Sydney"
                        className="option selected focus"
                        role="menuitem"
                      >
                        Sydney
                      </li>
                      <li
                        data-value="Tokyo"
                        className="option false"
                        role="menuitem"
                      >
                        Tokyo
                      </li>
                      <li
                        data-value="Delhi"
                        className="option false"
                        role="menuitem"
                      >
                        Delhi
                      </li>
                      <li
                        data-value="Shanghai"
                        className="option false"
                        role="menuitem"
                      >
                        Shanghai
                      </li>
                      <li
                        data-value="Mumbai"
                        className="option false"
                        role="menuitem"
                      >
                        Mumbai
                      </li>
                      <li
                        data-value="Bangalore"
                        className="option false"
                        role="menuitem"
                      >
                        Bangalore
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Map Location*</label>
                  <div className="position-relative">
                    <input type="text" placeholder="XC23+6XC, Moiran, N105" />
                    <button className="location-pin tran3s">
                      <img
                        alt="icon"
                        loading="lazy"
                        width="17"
                        height="17"
                        decoding="async"
                        data-nimg="1"
                        className="lazy-img m-auto"
                        style={{ color: 'transparent' }}
                        src="/_next/static/media/icon_16.7e4bc712.svg"
                      />
                    </button>
                  </div>
                  <div className="map-frame mt-30">
                    <div className="gmap_canvas h-100 w-100">
                      <iframe
                        className="gmap_iframe h-100 w-100"
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=bass hill plaza medical centre&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      ></iframe>
                    </div>
                  </div>
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
