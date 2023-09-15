// type Props = {
//   isOpen: boolean;
//   SetIsOpen: any;
// };

import BasicDatePicker from 'Components/BasicDatePicker/BasicDatePicker';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const AddExp = ({ name }: { name: string }) => {
  const { register } = useFormContext();
  const [isOpen, setOpenCollapsible] = useState(false);

  return (
    <div className="border my-3 rounded-lg p-3">
      <button
        type="button"
        className="cursor-pointer text-left"
        onClick={() => setOpenCollapsible(!isOpen)}
      >
        <div>
          <span className="font-medium"> Add Experience </span>
        </div>
      </button>
      {isOpen && (
        <div className="content">
          <div className="dash-input-wrapper mb-30 mt-30">
            <label htmlFor="">Job Title*</label>
            <input
              type="text"
              placeholder="Ex: Product Designer"
              {...register(`${[name]}.title`)}
            />
          </div>
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Company*</label>
            <input
              type="text"
              placeholder="Enter college name"
              {...register(`${[name]}.company`)}
            />
          </div>
          <div className="flex space-x-9">
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">From*</label>
              <BasicDatePicker />
            </div>
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">To*</label>
              <BasicDatePicker />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
