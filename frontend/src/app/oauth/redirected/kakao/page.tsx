'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import { getKakaoLogin } from '@/services/auth';
import { authResponse } from '@/types/auth';
import { oauthIdState } from '@/states/auth';

import Loading from '@/components/Loading';

const KakaoOauth = () => {
  const setAuthId = useSetRecoilState(oauthIdState);

  const router = useRouter();
  const searchParams = useSearchParams();
  const authCode = searchParams.get('code') ?? '';

  const loginHandler = (code: string) =>
    getKakaoLogin(code).then((res: authResponse) => {
      const { oauthId, nickname, accessToken } = res;

      if (!accessToken && oauthId) {
        setAuthId(oauthId);
        router.push('/signup');
        return;
      }
      if (accessToken) router.push('/home');
      else router.push('/');
    });

  useEffect(() => {
    if (authCode) {
      loginHandler(authCode);
    }
  }, [authCode]);

  return <Loading />;
};
export default KakaoOauth;
