'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const KakaoLoginButton = () => {
  const searchParams = useSearchParams();
  const authCode = searchParams.get('code'); // 인가 코드가 저장되는 변수

  const loginHandler = async (code: string | string[]) => {
    console.log('로그인 핸들러 동작');
    await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/oauth/login/kakao?code=${code}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => console.log(data)); // 여기서 분기처리를 해준다. (data 에 따라서 로그인, 회원 토큰 발급)

    // console.log('data returned from api: ', res); // 데이터 잘 받아오는지 확인용 로그
  };

  // 인가 코드가 저장될 수 있도록 하는 useEffect 훅
  useEffect(() => {
    if (authCode) {
      // 인가 코드가 있을 때만 POST 요청을 보낸다.
      loginHandler(authCode);
    }
  }, [authCode]); // 의존성으로 인가 코드가 저장되는 변수를 사용한다.

  return <div>page</div>;
};
export default KakaoLoginButton;
