import cn from 'classnames';
import { memo, useRef, useState } from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import styles from './Select.module.scss';
import { useOnClickOutside } from '@/shared/libs/hooks/useClickOutside';

export interface SelectOption {
  title: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps {
  className?: string;
  options: SelectOption[];
  defaultOption: SelectOption;
  value?: SelectOption;
  onChange?: (value: SelectOption) => void
}

export const Select = memo((props: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  const {
    className,
    options,
    defaultOption,
    value = defaultOption,
    onChange,
  } = props;

  const changeHandler = (option: SelectOption) => {
    if (option.disabled || !onChange || value === option) {
      return;
    }

    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={cn(className, { [styles.closed]: !isOpen }, styles.root)} ref={ref}>
      <div role="presentation" className={styles.title} onClick={() => setIsOpen((prevState) => !prevState)}>
        <span>{value.title}</span>
        <ChevronDoubleDownIcon className={cn('w-4 h-4', { 'rotate-180': isOpen })} />
      </div>
      <div className={cn(styles.options)}>
        <div
          className={cn(styles.option, { [styles.disabled]: defaultOption.disabled })}
        >
          {defaultOption.title}
        </div>
        {options.map((option) => (
          <div
            role="presentation"
            key={option.value}
            className={cn(
              styles.option,
              { [styles.disabled]: option.disabled, [styles.selected]: value.value === option.value },
            )}
            onClick={() => changeHandler(option)}
          >
            {option.title}
          </div>
        ))}
      </div>
    </div>
  );
});
