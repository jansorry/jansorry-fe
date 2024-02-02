'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import * as styles from './index.css';
import Button from '@/components/Button';

const NotFound = () => {
  const router = useRouter();
  return (
    <div className={styles.noAuthenticationWrapper}>
      <Image
        src='/images/error/401.png'
        alt='404Error'
        width={0}
        height={0}
        sizes='100vw'
        className={styles.noAuthenticationImage}
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
