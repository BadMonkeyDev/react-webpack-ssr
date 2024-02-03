import { Dispatch, SetStateAction } from 'react';
import { SearchBar } from '@/shared/ui/SearchBar';
import { Select, SelectOption } from '@/shared/ui/Select';

export interface UsersFilterProps {
  className?: string;
  filterValue: string;
  setFilterValue: Dispatch<SetStateAction<string>>;
  selectedOption: SelectOption;
  setSelectedOption: Dispatch<SetStateAction<SelectOption>>;
  defaultOption: SelectOption;
}

const sortOptions: SelectOption[] = [
  {
    title: 'А - Я',
    value: 'asc',
  },
  {
    title: 'Я - А',
    value: 'desc',
  },
];

export const UsersFilter = (props: UsersFilterProps) => {
  const {
    className,
    filterValue,
    setFilterValue,
    selectedOption,
    setSelectedOption,
    defaultOption,
  } = props;

  return (
    <div className={className}>
      <SearchBar
        label="Пошук за username"
        value={filterValue}
        onChange={setFilterValue}
      />
      <Select
        className="w-[200px]"
        options={sortOptions}
        defaultOption={defaultOption}
        value={selectedOption}
        onChange={(option) => setSelectedOption(option)}
      />
    </div>
  );
};
