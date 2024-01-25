'use client';

import { useEffect } from 'react';
import Image from 'next/image';

import * as styles from './index.css';

const redirectUri = process.env.NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI;

const KakaoLoginButton = () => {
  useEffect(() => {
    const kakaoSDK = document.createElement('script');
    kakaoSDK.async = false;
    kakaoSDK.src = `https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js`;
    kakaoSDK.integrity = `${process.env.NEXT_PUBLIC_KAKAO_INTEGRITY_KEY}`;
    kakaoSDK.crossOrigin = 'anonymous';
    document.head.appendChild(kakaoSDK);

    const onLoadKakaoAPI = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
      }
    };

    kakaoSDK.addEventListener('load', onLoadKakaoAPI);
  }, []);

  const kakaoLoginHandler = () => {
    window.Kakao.Auth.authorize({
      redirectUri,
    });
  };

  return (
    <button type='button' onClick={kakaoLoginHandler} className={styles.kakaoLoginButton}>
      <Image
        src='/images/welcome/button-kakao-login.png'
        alt='kakao-login-button'
        width={300}
        height={300}
        className={styles.kakaoLoginImage}
      />
    </button>
  );
};

export default KakaoLoginButton;
