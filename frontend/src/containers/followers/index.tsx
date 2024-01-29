'use client';

import * as styles from '@/styles/common.css';
import { contentWrapper } from '@/styles/wrapper.css';

import Header from '@/components/Header';
import NavBar from '@/components/NavBar';

const Followers = () => {
  const nickname = '닉네임';
  return (
    <div className={styles.defaultWrapper({ width: 'max', height: 'max' })}>
      <Header title={nickname} hasPrevious />
      <div className={contentWrapper({ contentArea: 'headerAndNavBar' })}>
        <div />
      </div>
      <NavBar />
    </div>
  );
};

export default Followers();
