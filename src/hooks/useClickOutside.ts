import { useEffect } from 'react';

const useClickOutside = (ref: any, onClickOutside: () => void): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref?.current?.contains(event.target as Node) === false) {
        onClickOutside();
      }
    };

    document.addEventListener('mouseup', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

export default useClickOutside;
