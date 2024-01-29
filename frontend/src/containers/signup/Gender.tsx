'use client';

import { useRecoilState } from 'recoil';

import { genderMap } from '@/containers/signup/genderOptions';
import { userBirthState, userGenderState } from '@/states/signup';
import { oauthIdState } from '@/states/auth';
import { apiClient } from '@/services';
import { authResponse, signupRequest } from '@/types/auth';
import { contentWrapper } from '@/styles/wrapper.css';

import * as styles from './index.css';
import Button from '@/components/Button';
import { birthGenderWrapper } from './index.css';

const Gender = () => {
  const [userBirth] = useRecoilState(userBirthState);
  const buttons = Array.from(genderMap)
    .filter(([key, _]) => key >= 1 && key <= 3)
    .map(([_, value]) => value);

  const getGender = userBirth !== null && userBirth < 2024 - 14;
  const [userGender, setUserGender] = useRecoilState(userGenderState);

  const [oauthId] = useRecoilState(oauthIdState);
  const postData = async () => {
    //  여기서 userBirth가 null 등 잘못된 값이면 예외처리 해줘야 되는데 어떻게 처리할까 합의 필요
    const data: signupRequest = {
      oauthId,
      birth: userBirth ?? 0,
      genderId: userGender,
    };

    //  api호출 로직 혹시 닉네임 recoil로 사용하게 되면 여기 response에서 수정
    const response = await apiClient.post<authResponse, signupRequest>('/members/signup', data);
  };
  return (
    <div className={birthGenderWrapper}>
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
              filled={userGender === index + 1 || (index === 2 && userGender >= 4)}
              disabled={!getGender}
              onClick={() => setUserGender(index + 1)}
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
