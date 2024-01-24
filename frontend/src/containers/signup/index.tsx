'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { bg } from '@/containers/signup/index.css';
import Birthyear from '@/containers/signup/Birthyear';
import Gender from '@/containers/signup/Gender';

import * as styles from './index.css';
import Header from '@/components/Header';

const Signup = () => {
  const [userYear, setUserYear] = useState<number | null>(null);

  return (
    <main className={styles.signupWrapper}>
      <Header title='회원 가입' />
      <div className={styles.signupComponentsWrapper}>
        {!userYear ? <Birthyear setUserYear={setUserYear} /> : <Gender userBirth={userYear} />}
        <Image src='/images/signup/bg.png' alt='bg' width={2560} height={340} className={bg} />
      </div>
    </main>
  );
};

export default Signup;
