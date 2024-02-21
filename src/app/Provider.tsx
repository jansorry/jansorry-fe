'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Provider;
