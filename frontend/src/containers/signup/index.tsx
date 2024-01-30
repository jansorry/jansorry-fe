'use client';

import Image from 'next/image';
import { useRecoilValue } from 'recoil';

import Birthyear from '@/containers/signup/Birthyear';
import Gender from '@/containers/signup/Gender';
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
      <div className={contentWrapper({ contentArea: 'headerOnly' })}>{!userBirth ? <Birthyear /> : <Gender />}</div>
    </main>
  );
};

export default Signup;
