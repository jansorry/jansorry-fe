import React, { useState } from 'react';

import YearPicker from '@/containers/signup/YearPicker';
import { birthyearWrapper, yearPickerStyle } from '@/containers/signup/index.css';

import Button from '@/components/Button';

interface Props {
  setUserYear: React.Dispatch<React.SetStateAction<number | null>>;
}
const Birthyear = ({ setUserYear }: Props) => {
  const [getYearFromPicker, setGetYearFromPicker] = useState<number>(0);
  const chck = () => {
    setUserYear(getYearFromPicker);
  };
  return (
    <div className={birthyearWrapper}>
      <div>
        <div>출생년도를 알려주세요.</div>
        <div className={yearPickerStyle.yearPickerWrapper}>
          <YearPicker temp={setGetYearFromPicker} />
        </div>
        <Button onClick={chck} type='button' size='large' colorStyle='blue' filled>
          다음버튼임
        </Button>
      </div>
    </div>
  );
};

export default Birthyear;
