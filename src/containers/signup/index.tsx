'use client';

import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import BirthyearPage from '@/containers/signup/BirthyearPage';
import GenderPage from '@/containers/signup/GenderPage';
import { defaultWrapper } from '@/styles/common.css';
import { contentWrapper } from '@/styles/wrapper.css';
import { kakaoNicknameState } from '@/states/auth';

import { userBirthState } from './store';
import * as styles from './index.css';
import Header from '@/components/Header';

const Signup = () => {
  const router = useRouter();
  const kakaoNickname = useRecoilValue(kakaoNicknameState);
  const userBirth = useRecoilValue(userBirthState);

  useEffect(() => {
    if (!kakaoNickname) {
      router.replace('/401');
    }
    if (kakaoNickname === '') {
      router.replace('/home');
    }
  }, [kakaoNickname]);

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
