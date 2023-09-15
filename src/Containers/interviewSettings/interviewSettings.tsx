import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const InterviewSettings = () => {
  const { register, handleSubmit, watch } = useForm({
    // defaultValues: {
    //   rounds: 1,
    //   roundNo: {},
    // },
  });
  // console.log(watch());
  useEffect(() => {
    setRoundsCount(watch('rounds'));
  }, [watch('rounds')]);

  const [roundsCount, setRoundsCount] = useState(1);

  const renderNtimesExp = () => {
    const Element = [];
    for (let index = 0; index < roundsCount; index++) {
      Element.push(
        <>
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Round {index + 1}</label>
            <input
              type="text"
              placeholder="Title"
              {...register(`roundTitle.${[index]}`)}
            />
            <textarea
              className="size-sm mt-3"
              placeholder="Decription"
              {...register(`roundDescription.${[index]}`)}
            ></textarea>
          </div>
        </>
      );
    }
    return <div>{Element}</div>;
  };
  return (
    <>
      <div className="bg-BG_GREEN h-auto text-left dashboard-body">
        <h2 className="main-title text-DARK_GREEN text-left">
          Interview Settings
        </h2>
        <div className="bg-white card-box border-20">
          <form onSubmit={handleSubmit((data: any) => console.log(data))}>
            <h4 className="dash-title-three">Update interview details</h4>
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">No. Of Rounds</label>
              <input type="text" placeholder="Ex: 2" {...register('rounds')} />
            </div>
            {renderNtimesExp()}
            <div className="button-group d-inline-flex align-items-center mt-30">
              <button className="dash-btn-two tran3s me-3">Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InterviewSettings;
