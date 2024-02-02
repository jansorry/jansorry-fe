import { useEffect, useRef } from 'react';

export const useInfiniteObserver = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, callback]);

  return ref;
};
