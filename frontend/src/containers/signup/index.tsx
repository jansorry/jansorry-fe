'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

import Birthyear from '@/containers/signup/Birthyear';
import Gender from '@/containers/signup/Gender';
import { userBirthState } from '@/states/signup';

import * as styles from './index.css';
import Header from '@/components/Header';

const Signup = () => {
  const [userBirth, setUserBirth] = useRecoilState(userBirthState);

  return (
    <main className={styles.signupWrapper}>
      <Image
        src='/images/signup/bg.png'
        width={0}
        height={0}
        alt='home-bg'
        sizes='100vw'
        className={`${styles.signupBg}`}
      />
      <Header title='회원 가입' />
      <div className={styles.signupContentWrapper}>{!userBirth ? <Birthyear /> : <Gender />}</div>
    </main>
  );
};

export default Signup;
