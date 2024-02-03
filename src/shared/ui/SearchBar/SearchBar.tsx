import cn from 'classnames';
import { ChangeEvent } from 'react';

export interface SearchBarProps {
  classes?: {
    root?: string;
  };
  label: string;
  placeholder?: string;
  value: string;
  onChange?: (value: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const {
    classes,
    label,
    placeholder = 'Пошук',
    value,
    onChange,
  } = props;

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <form className={cn(classes?.root, 'flex items-center')} autoComplete="off">
      <input autoComplete="false" name="hidden" type="text" className="hidden" />
      <label htmlFor="search" className="sr-only">{label}</label>
      <div className="relative w-full">
        <input
          type="text"
          id="search"
          className={cn(
            'rounded block w-full px-4 py-2.5 border-2 border-solid border-gray-500 outline-0',
            'bg-gray-50 text-gray-900',
          )}
          placeholder={placeholder}
          onChange={changeHandler}
          value={value}
        />
      </div>
    </form>
  );
};
