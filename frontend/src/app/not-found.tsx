'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import * as styles from './not-found.css';
import Button from '@/components/Button';

const NotFound = () => {
  const router = useRouter();
  return (
    <div className={styles.notFoundWrapper}>
      <Image
        src='/images/error/404.png'
        alt='404Error'
        width={0}
        height={0}
        sizes='100vw'
        className={styles.notFoundImage}
      />
      <Button
        type='button'
        size='small'
        colorStyle='blue'
        filled={false}
        onClick={() => router.back()}
      >
        이전으로
      </Button>
    </div>
  );
};

export default NotFound;
