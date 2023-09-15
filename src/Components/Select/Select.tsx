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
}) => {
  const customStye: StylesConfig<Option, boolean> = {
    control: (base) => {
      return {
        ...base,
        height: '55px',
      };
    },
    valueContainer: (base) => ({
      ...base,
      // width: 'max-content',
      height: '55px',
      padding: '0px',
      // ...valueContainerStyles,
    }),
    option: (base) => {
      return {
        ...base,
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
    />
  );
};
