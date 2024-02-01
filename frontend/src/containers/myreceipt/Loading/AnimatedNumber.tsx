'use client';

import { useEffect, useState } from 'react';

import * as styles from '@/containers/myreceipt/Loading/index.css';

const AnimatedNumber: React.FC = () => {
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const numberList: number[] = [0, 25, 50, 75, 100];

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
