import { useEffect, useRef } from 'react';

export const useObserver = (
  navNumber: number,
  setNavNumber: React.Dispatch<React.SetStateAction<number>>,
) => {
  const options = { rootMargin: '-50% 0% -50% 0%' };
  const refElement = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, ob) => {
      if (entries[0].isIntersecting) {
        setNavNumber(navNumber);
      }
    }, options);

    if (refElement.current) {
      observer.observe(refElement.current);
    }

    return () => observer.disconnect();
  }, []);

  return refElement;
};
