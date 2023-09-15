import { useForm } from 'react-hook-form';
// import './style.css';
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
    <div className="bg-BG_GREEN h-full text-left">
      <h2 className="main-title text-DARK_GREEN text-left">Post a New Job</h2>
      <>
        <div className="py-6  px-4 rounded-lg bg-white">
          <h4 className="text-xl mb-6">Job Details</h4>
          <form onSubmit={handleSubmit((data: any) => console.log(data))}>
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="title">Job Title</label>
              <input
                {...register('title')}
                placeholder="Ex: Producr Designer"
              />
            </div>
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="title">Job Description</label>
              <textarea
                className="size-lg"
                {...register('title')}
                placeholder="Write about the job in details..."
              />
            </div>
            <div className="row align-items-end">
              <div className="col-md-6">
                <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Job Category</label>
                  <Select name="category" options={JOB_CATEGORY_OPTIONS} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default CreateJob;
