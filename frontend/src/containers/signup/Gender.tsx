'use client';

import { useRecoilState, useResetRecoilState } from 'recoil';

import { genderMap } from '@/containers/signup/genderOptions';
import { userBirthState, userGenderState } from '@/states/signup';
import { oauthIdState } from '@/states/auth';
import { apiClient } from '@/services';
import { authResponse, signupRequest } from '@/types/auth';

import * as styles from './index.css';
import Button from '@/components/Button';
import { birthGenderWrapper, prevNextButton } from './index.css';

const Gender = () => {
  const [userBirth, setUserBirth] = useRecoilState(userBirthState);

  const buttons = Array.from(genderMap)
    .filter(([key, _]) => key >= 1 && key <= 3)
    .map(([_, value]) => value);

  const isGenderRequired: boolean = userBirth !== null && userBirth < 2024 - 14;
  const [userGender, setUserGender] = useRecoilState(userGenderState);
  const [oauthId] = useRecoilState(oauthIdState);
  const handleSignupRequest = async () => {
    const data: signupRequest = {
      oauthId,
      birth: userBirth,
      genderId: userGender,
    };

    //  api호출 로직 혹시 닉네임 recoil로 사용하게 되면 여기 response에서 수정
    const response = await apiClient.post<authResponse, signupRequest>(
      '/members/signup',
      data,
    );
  };
  const resetUserGender = useResetRecoilState(userGenderState);
  const handlePrevButton = () => {
    resetUserGender();
    setUserBirth(null);
  };

  return (
    <div className={birthGenderWrapper}>
      <div>
        <div className={styles.signupText({ text: 'title' })}>
          성별을 알려주세요.
        </div>
        <div
          className={styles.signupText({
            text: 'underAgeNotice',
            visible: isGenderRequired ? 'hidden' : 'show',
          })}
        >
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
              filled={
                userGender === index + 1 || (index === 2 && userGender >= 4)
              }
              disabled={!isGenderRequired}
              onClick={() => setUserGender(index + 1)}
            >
              {buttonText}
            </Button>
          </div>
        ))}
      </div>

      <div className={prevNextButton}>
        <Button
          onClick={handlePrevButton}
          type='submit'
          size='small'
          colorStyle='blue'
          filled={false}
        >
          이전으로
        </Button>
        <Button
          onClick={handleSignupRequest}
          type='submit'
          size='small'
          colorStyle='blue'
          filled
        >
          가입하기
        </Button>
      </div>
    </div>
  );
};

export default Gender;
