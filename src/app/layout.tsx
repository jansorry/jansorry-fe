import React from 'react';
import Script from 'next/script';
import localFont from 'next/font/local';

import type { Metadata } from 'next';
import './layout.css';

import Provider from '@/app/Provider';

const Pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
});

declare global {
  interface Window {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    Kakao: any;
  }
}

export const metadata: Metadata = {
  metadataBase: new URL('https://jansorry.com'),
  title: '명절 잔소리 영수증',
  description: '잔소리 영수증을 만들고 비용을 청구해보세요!',
  openGraph: {
    url: 'https://jansorry.com',
    images: 'https://jansorry.com/opengraph-image.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: '명절 잔소리 영수증',
    description: '잔소리 영수증을 만들고 비용을 청구해보세요!',
    images: ['https://jansorry.com/opengraph-image.png'],
  },
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en' className={Pretendard.className} suppressHydrationWarning>
      <body>
        <Provider>
          {children}
          <div id='modal' />
        </Provider>
        <Script
          src='https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js'
          integrity={`${process.env.NEXT_PUBLIC_KAKAO_INTEGRITY_KEY}`}
          crossOrigin='anonymous'
        />
      </body>
    </html>
  );
};

export default RootLayout;
