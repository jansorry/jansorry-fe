import { useEffect, useRef, useState } from 'react';

export const useObserver = (callback?: () => void) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsInViewport(true);
        if (callback) callback();
        return;
      }
      setIsInViewport(false);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, callback]);

  return { isInViewport, ref };
};
