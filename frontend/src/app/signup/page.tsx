'use client';

import { useRecoilValue } from 'recoil';

import { api } from '@/services';
import { oauthIdState } from '@/states/auth';

const SignupPage = () => {
  // const oauthId = useRecoilValue(oauthIdState);

  const clicked = () => {
    api.post('/members/signup', { oauthId: 3287827161, birth: 1998, genderId: 2 }).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div>여기는 회원가입 페이지</div>
      <button type='button' onClick={clicked}>
        회원가입 해버리기
      </button>
    </>
  );
};

export default SignupPage;
