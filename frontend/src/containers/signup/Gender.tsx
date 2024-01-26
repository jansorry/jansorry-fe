'use client';

import { useState } from 'react';

import { signup } from '@/types/signup';
import { postBirthGender } from '@/services/signup';
import { genderMap } from '@/containers/signup/genderOptions';

import * as styles from './index.css';
import Button from '@/components/Button';
import { yearPickerWrapper } from './index.css';

interface Props {
  userBirth: number;
}
const Gender = ({ userBirth }: Props) => {
  const buttons = Array.from(genderMap)
    .filter(([key, _]) => key >= 1 && key <= 3)
    .map(([_, value]) => value);
  // 숫자로 사용할 데이터 따로 저장해야되지 않을까요? (관리 목적)
  const getGender = userBirth < 2024 - 14;
  const selectedInitial: number = 4;
  const [selected, setSelected] = useState<number>(selectedInitial);

  //  여기서 api 통신 및 다음 화면으로 전환...필요한데 가능?
  const postData = () => {
    const data: signup = {
      oauthId: '',
      birth: userBirth,
      genderId: selected,
    };
    //  로그인 처리작업 여기서 필요
    postBirthGender(data);
    //  데이터 확인을 위한 콘솔
    console.log(data);
  };
  return (
    <div className={styles.birthGenderWrapper}>
      <div>
        <div className={styles.signupText({ text: 'title' })}>성별을 알려주세요.</div>
        <div className={styles.signupText({ text: 'underAgeNotice', visible: getGender ? 'hidden' : 'show' })}>
          14세 이하는 성별 정보를 받지 않아요.
        </div>
      </div>
      <div className={styles.selectWrapper({ content: 'genderButtons' })}>
        {buttons.map((buttonText, index) => (
          <div key={buttonText}>
            <Button
              type='button'
              size='large'
              colorStyle='blue'
              filled={selected === index + 1 || (index === 2 && selected >= 4)}
              disabled={!getGender}
              onClick={() => setSelected(index + 1)}
            >
              {buttonText}
            </Button>
          </div>
        ))}
      </div>

      <div>
        <Button onClick={postData} type='submit' size='large' colorStyle='blue' filled>
          가입하기
        </Button>
      </div>
    </div>
  );
};

export default Gender;
