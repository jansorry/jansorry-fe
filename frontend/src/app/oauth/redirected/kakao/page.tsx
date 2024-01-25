'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { getKakaoLogin } from '@/services/auth';
import { authResponse } from '@/types/auth';

import Loading from '@/components/Loading';

const KakaoOauth = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const authCode = searchParams.get('code') ?? '';

  const loginHandler = (code: string) =>
    getKakaoLogin(code).then((res: authResponse) => {
      const { oauthId, nickname, accessToken, refreshToken } = res;
      // TODO: authResponse 타입 객체를 recoil에 적재하기
      if (!accessToken) router.push('/signup');
      if (accessToken) router.push('/home');
    });

  useEffect(() => {
    if (authCode) {
      loginHandler(authCode);
    }
  }, [authCode]);

  return <Loading />;
};
export default KakaoOauth;
