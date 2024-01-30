'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import * as styles from '@/containers/receipt/Loading/index.css';

const AnimatedImage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [animationFinished, setAnimationFinished] = useState<boolean>(false);

  const imageUrls = [
    '/images/Loading/loadingReceipt0.png',
    '/images/Loading/loadingReceipt1.png',
    '/images/Loading/loadingReceipt2.png',
    '/images/Loading/loadingReceipt3.png',
    '/images/Loading/loadingReceipt4.png',
  ];

  useEffect(() => {
    if (!animationFinished) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          if (prevIndex >= imageUrls.length - 1) {
            clearInterval(interval);
            setAnimationFinished(true);
            return prevIndex;
          }
          return prevIndex + 1;
        });
      }, 600);

      return () => clearInterval(interval);
    }
    return undefined;
  }, [animationFinished]);

  return (
    <div>
      <Image
        src={imageUrls[currentImageIndex]}
        alt='Animated Photo'
        width={0}
        height={0}
        sizes='100vw'
        className={styles.receipt}
      />
    </div>
  );
};

export default AnimatedImage;
