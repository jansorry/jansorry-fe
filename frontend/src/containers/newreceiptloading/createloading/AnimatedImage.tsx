'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';

import * as styles from '@/containers/newreceiptloading/createloading/index.css';
import { animationFinishedState } from '@/containers/newreceiptloading/receiptAnimation';

const AnimatedImage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [animationFinished, setAnimationFinished] = useRecoilState(
    animationFinishedState,
  );

  const imageUrls = [
    '/images/loading/loadingReceipt0.png',
    '/images/loading/loadingReceipt1.png',
    '/images/loading/loadingReceipt2.png',
    '/images/loading/loadingReceipt3.png',
    '/images/loading/loadingReceipt4.png',
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
