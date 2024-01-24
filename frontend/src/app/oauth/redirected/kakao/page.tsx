'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { getKakaoLogin } from '@/services/auth';

const KakaoOauth = () => {
  const searchParams = useSearchParams();
  const authCode = searchParams.get('code') ?? '';

  const loginHandler = (code: string) => getKakaoLogin(code).then((res) => console.log(res));

  useEffect(() => {
    if (authCode) {
      loginHandler(authCode);
    }
  }, [authCode]);

  return <div>page</div>;
};
export default KakaoOauth;
