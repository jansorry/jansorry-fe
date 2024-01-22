import React from 'react';

import type { Metadata } from 'next';

import './layout.css';
import Recoil from '@/states/Recoil';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Recoil>
          {children}
          <div id='modal' />
        </Recoil>
      </body>
    </html>
  );
};

export default RootLayout;
