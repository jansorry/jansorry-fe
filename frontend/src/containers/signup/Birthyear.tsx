import React, { useState } from 'react';

import YearPicker from '@/containers/signup/YearPicker';
import * as styles from '@/containers/signup/index.css';

import Button from '@/components/Button';

interface Props {
  setBirth: React.Dispatch<React.SetStateAction<number | null>>;
}
const Birthyear = ({ setBirth }: Props) => {
  const [selectedBirth, setSelectedBirth] = useState<number>(0);
  const setBirthOnClick = () => {
    setBirth(selectedBirth);
  };
  return (
    <div className={styles.birthGenderWrapper}>
      <div className={styles.signupText({ text: 'title' })}>출생년도를 알려주세요.</div>
      <div>
        <YearPicker selected={setSelectedBirth} />
      </div>
      <Button onClick={setBirthOnClick} type='button' size='large' colorStyle='blue' filled>
        다음버튼임
      </Button>
    </div>
  );
};

export default Birthyear;
