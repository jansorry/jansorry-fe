'use client';

import { useEffect } from 'react';
import Image from 'next/image';

import * as styles from './index.css';

const redirectUri = process.env.NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI;
const scope = ['profile_nickname'].join(','); // 유저 닉네임을 받아서 전달

const KakaoLoginButton = () => {
  useEffect(() => {
    const kakaoSDK = document.createElement('script');
    kakaoSDK.async = false;
    kakaoSDK.src = `https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js`;
    kakaoSDK.integrity = 'sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8';
    kakaoSDK.crossOrigin = 'anonymous';
    document.head.appendChild(kakaoSDK);

    const onLoadKakaoAPI = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
        console.log('after Init: ', window.Kakao.isInitialized());
      }
    };

    kakaoSDK.addEventListener('load', onLoadKakaoAPI);
  }, []);

  const kakaoLoginHandler = () => {
    // 인가 코드를 받기 위해서 리다이렉트 페이지로 이동
    window.Kakao.Auth.authorize({
      redirectUri,
      scope,
    });
    console.log('Kakao Index Success'); // 카카오 로그인 성공 확인 로그
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
