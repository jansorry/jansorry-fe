'use client';

import { useEffect, useState } from 'react';

import * as styles from '@/containers/loading/AnimatedNumber/index.css';

const numberList = [0, 25, 50, 75, 100];

const AnimatedNumber: React.FC = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const animate = () => {
      if (currentIndex < numberList.length - 1) {
        const nextIndex = currentIndex + 1;
        const nextNumber = numberList[nextIndex];

        if (currentNumber < nextNumber) {
          setTimeout(() => setCurrentNumber(nextNumber), 600);
        } else {
          setCurrentIndex(nextIndex);
        }
      }
    };

    animate();
  }, [currentNumber, currentIndex]);

  return <div className={styles.numberStyle}>{currentNumber}%</div>;
};

export default AnimatedNumber;
