import { useEffect } from 'react';

type UseBodyOverflowOptions = {
  condition: boolean;
}

export const useBodyOverflow = ({ condition }: UseBodyOverflowOptions) => {
  useEffect(() => {
    if (condition) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'initial';
    }
  }, [condition]);
};
