'use client';

import { useState } from 'react';

import { signup } from '@/types/signup';
import { postBirthGender } from '@/services/signup';
import { genderStyle } from '@/containers/signup/index.css';

import Button from '@/components/Button';

interface Props {
  userBirth: number;
}
const Gender = ({ userBirth }: Props) => {
  const buttons = ['남자', '여자', '비공개'];
  const [selected, setSelected] = useState<number>(3);

  // 숫자로 사용할 데이터 따로 저장해야되지 않을까요? (관리 목적)
  const canSelect = userBirth > 2024 - 14;

  const postData = () => {
    const data: signup = {
      oauthId: '',
      birth: userBirth,
      genderId: selected + 1,
    };
    //  로그인 처리작업 여기서 필요
    postBirthGender(data);
  };
  return (
    <div className={genderStyle.genderWrapper}>
      <div className={genderStyle.gendertext}>성별을 알려주세요</div>

      {buttons.map((buttonText, index) => (
        <div key={buttonText} className={genderStyle.genderButtons}>
          <Button
            key={buttonText}
            type='button'
            size='large'
            colorStyle='blue'
            filled={selected === index}
            onClick={() => setSelected(index)}
            disabled={canSelect}
          >
            {buttonText}
          </Button>
        </div>
      ))}
      <div />

      <div className={genderStyle.submitButtons}>
        <Button onClick={postData} type='submit' size='large' colorStyle='blue' filled>
          가입하기
        </Button>
      </div>
    </div>
  );
};

export default Gender;
