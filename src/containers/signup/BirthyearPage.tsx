'use client';

import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';

import YearPicker from '@/containers/signup/YearPicker';
import * as styles from '@/containers/signup/index.css';
import {
  birthGenderWrapper,
  prevNextButton,
} from '@/containers/signup/index.css';

import { selectedYearState, userBirthState } from './store';
import Button from '@/components/Button';

const BirthyearPage = () => {
  const router = useRouter();
  const selectedYear = useRecoilValue(selectedYearState);
  const setUserBirth = useSetRecoilState(userBirthState);

  const setBirthOnClick = () => {
    setUserBirth(selectedYear);
  };

  const handlePrevButton = () => {
    setUserBirth(null);
    router.replace('/');
  };

  return (
    <div className={birthGenderWrapper}>
      <div className={styles.signupText({ text: 'title' })}>
        출생년도를 알려주세요.
      </div>
      <div>
        <YearPicker />
      </div>

      <div className={prevNextButton}>
        <Button
          type='submit'
          size='small'
          colorStyle='blue'
          filled={false}
          onClick={handlePrevButton}
        >
          이전으로
        </Button>

        <Button
          onClick={setBirthOnClick}
          type='button'
          size='small'
          colorStyle='blue'
          filled
        >
          다음으로
        </Button>
      </div>
    </div>
  );
};

export default BirthyearPage;
