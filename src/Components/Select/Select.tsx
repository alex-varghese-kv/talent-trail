import { hover } from '@testing-library/user-event/dist/hover';
import { FC, ReactNode } from 'react';
import ReactSelect, {
  components,
  DropdownIndicatorProps,
  MenuListProps,
  OptionProps,
  StylesConfig,
  ThemeConfig,
} from 'react-select';

type Props = {
  name?: string;
  label?: string;
  options?: any;
  placeholder?: string;
  selectedValue?: any;
  isSearchable?: boolean;
  value?: any;
  isMulti?: boolean;
};
export interface Option {
  value: any;
  label?: string;
  divider?: boolean;
  subOption?: ReactNode;
  [index: string]: any;
}

export const Select: FC<Props> = ({
  name,
  label,
  options,
  placeholder,
  selectedValue,
  isSearchable = false,
  value,
  isMulti = false,
}) => {
  const VALUE_LIMIT = 4;
  const MultiValue = (props: any) => {
    const { index, getValue } = props;
    const hiddenLength = getValue().length - VALUE_LIMIT;

    return index < VALUE_LIMIT ? (
      <components.MultiValue {...props} />
    ) : index === VALUE_LIMIT ? (
      <div className="option-label bg-BG_GREEN rounded-full ml-3 mt-2 text-sm p-2">{`+${hiddenLength} selected`}</div>
    ) : null;
  };

  const customStye: StylesConfig<OptionProps, false> = {
    control: (base) => {
      return {
        ...base,
        height: '55px',
        cursor: 'pointer',
        // border: '#e5e5e5',
        border: '1px solid  #e5e5e5',
        borderWidth: '1px',
        // outline: 'none',
      };
    },
    multiValue: (base) => {
      return {
        ...base,
        backgroundColor: '#F0F5F3',
        marginTop: '15px',
        borderRadius: '30px',
        color: '#244034',
      };
    },
    valueContainer: (base) => ({
      ...base,
      height: '55px',
      padding: '0px 25px 0px 20px',
    }),

    indicatorSeparator: (base) => ({
      ...base,
      display: 'none',
    }),
    option: (base, state) => {
      return {
        ...base,
        backgroundColor: state.isSelected
          ? '#FFFFFF'
          : state.isFocused
          ? '#F0F5F3'
          : '#FFFFFF',
        color: '#000000',
        ':hover': {
          backgroundColor: '#F0F5F3',
        },
      };
    },
  };

  return (
    <ReactSelect
      name={name}
      options={options}
      placeholder={placeholder}
      styles={customStye}
      isSearchable={isSearchable}
      value={value}
      isMulti={isMulti as any}
      components={{ MultiValue }}
      closeMenuOnSelect={false}

      // isMulti={true}
    />
  );
};
