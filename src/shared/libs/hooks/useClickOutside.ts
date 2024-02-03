import { useEffect, RefObject } from 'react';

type EventListener = (event: MouseEvent) => void;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  onClickOutside: EventListener,
): void {
  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClickOutside, ref]);
}

export { useOnClickOutside };
