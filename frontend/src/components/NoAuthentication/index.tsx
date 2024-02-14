'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import * as styles from './index.css';
import Button from '@/components/Button';

const NoAuthentication = () => {
  const router = useRouter();
  return (
    <div className={styles.noAuthenticationWrapper}>
      <Image
        src='/images/error/401.webp'
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
        onClick={() => router.push('/')}
      >
        홈으로
      </Button>
    </div>
  );
};

export default NoAuthentication;
