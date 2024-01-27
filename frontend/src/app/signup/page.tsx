'use client';

import { useRecoilState } from 'recoil';

import { oauthIdState } from '@/states/auth';
import { postSignup } from '@/services/auth';

const SignupPage = () => {
  const [oauthId, setOauthId] = useRecoilState(oauthIdState);

  const clicked = async () => {
    const data = await postSignup({ oauthId, birth: 1998, genderId: 1 });
    setOauthId('');
    console.log(data);
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
