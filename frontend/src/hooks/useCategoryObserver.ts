import { useEffect, useRef } from 'react';

export const useCategoryObserver = (
  navNumber: number,
  setNavNumber: React.Dispatch<React.SetStateAction<number>>,
) => {
  const refElement = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setNavNumber(navNumber);
        }
      },
      { rootMargin: '-50% 0% -50% 0%' },
    );

    if (refElement.current) {
      observer.observe(refElement.current);
    }

    return () => observer.disconnect();
  }, [navNumber, setNavNumber]);

  return refElement;
};
