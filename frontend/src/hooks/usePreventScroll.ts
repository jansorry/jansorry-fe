import { useEffect } from 'react';

const usePreventScroll = (open: boolean) => {
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden';
    }
    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [open]);
};

export default usePreventScroll;
