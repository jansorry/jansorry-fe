import { useState, useEffect } from 'react';

const useDebounce = <T>(initValue: T, delay: number) => {
  const [value, setValue] = useState<T>(initValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValue(initValue);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [initValue, delay]);

  return value;
};

export default useDebounce;
