'use client';

import Image from 'next/image';
import { useRecoilValue } from 'recoil';

import BirthyearPage from '@/containers/signup/BirthyearPage';
import GenderPage from '@/containers/signup/GenderPage';
import { userBirthState } from '@/states/signup';
import { defaultWrapper } from '@/styles/common.css';
import { contentWrapper } from '@/styles/wrapper.css';

import * as styles from './index.css';
import Header from '@/components/Header';

const Signup = () => {
  const userBirth = useRecoilValue(userBirthState);

  return (
    <main className={defaultWrapper({ width: 'max', height: 'max' })}>
      <Image
        src='/images/signup/bg.png'
        width={0}
        height={0}
        alt='home-bg'
        sizes='100vw'
        className={`${styles.signupBg}`}
      />
      <Header title='회원 가입' />
      <div
        className={`${contentWrapper({ contentArea: 'headerOnly', heightStyle: 'max' })}`}
      >
        {!userBirth ? <BirthyearPage /> : <GenderPage />}
      </div>
    </main>
  );
};

export default Signup;
