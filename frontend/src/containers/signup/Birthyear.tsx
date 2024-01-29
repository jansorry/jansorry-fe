import React from 'react';
import { useRecoilState } from 'recoil';

import YearPicker from '@/containers/signup/YearPicker';
import * as styles from '@/containers/signup/index.css';
import { selectedYearState, userBirthState } from '@/states/signup';
import { contentWrapper } from '@/styles/wrapper.css';
import { birthGenderWrapper } from '@/containers/signup/index.css';

import Button from '@/components/Button';

const Birthyear = () => {
  const [selectedYear, setSelectedYear] = useRecoilState(selectedYearState);
  const [userBirth, setUserBirth] = useRecoilState(userBirthState);

  const setBirthOnClick = () => {
    setUserBirth(selectedYear);
  };
  return (
    <div className={birthGenderWrapper}>
      <div className={styles.signupText({ text: 'title' })}>출생년도를 알려주세요.</div>
      <div>
        <YearPicker />
      </div>
      <Button onClick={setBirthOnClick} type='button' size='large' colorStyle='blue' filled>
        다음버튼임
      </Button>
    </div>
  );
};

export default Birthyear;
