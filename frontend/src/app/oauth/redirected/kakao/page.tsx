'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useRecoilState } from 'recoil';

import { getKakaoLogin } from '@/services/auth';
import { authResponse } from '@/types/auth';
import { oauthIdState } from '@/states/auth';

import Loading from '@/components/Loading';

const KakaoOauth = () => {
  const [authId, setAuthId] = useRecoilState(oauthIdState);

  const router = useRouter();
  const searchParams = useSearchParams();
  const authCode = searchParams.get('code') ?? '';

  const loginHandler = (code: string) =>
    getKakaoLogin(code).then((res: authResponse) => {
      const { oauthId, nickname, accessToken, refreshToken } = res;

      if (!accessToken && oauthId) {
        console.log(oauthId);
        if (oauthId) setAuthId(oauthId);
        router.push('/signup');
      }
      if (accessToken) router.push('/home');

      router.push('/');
    });

  useEffect(() => {
    if (authCode) {
      loginHandler(authCode);
    }
  }, [authCode]);

  return <Loading />;
};
export default KakaoOauth;
