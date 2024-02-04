'use client';

import { useEffect, useState } from 'react';

import { userDataResponse, actionTotalCount } from '@/types/userData';
import { totalReceiptCountResponse } from '@/types/receipt';
import { UserProfile } from '@/containers/mypage/UserProfile';

import Header from '@/components/Header';
import * as styles from './index.css';
import ProfileWithContent from './ProfileWithContent';
import ProfileNoContent from './ProfileNoContent';
import NavBar from '@/components/NavBar';
import Loading from '@/components/Loading';

interface Props {
  myPageItems: userDataResponse;
  actionsData: actionTotalCount;
  receiptCount: totalReceiptCountResponse;
}

const MyPageContainer = ({ myPageItems, actionsData, receiptCount }: Props) => {
  const [NagCount, setNagCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      setNagCount(actionsData.content.length);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  }, [actionsData]);

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    }

    return NagCount > 0 ? (
      <ProfileWithContent
        actions={actionsData.content}
        totalReceiptCount={receiptCount}
      />
    ) : (
      <ProfileNoContent totalReceiptCount={receiptCount} />
    );
  };

  return (
    <>
      <Header title='나의 잔소리 목록' />
      <main className={styles.profileWrapper}>
        <div className={styles.profileContentWrapper}>
          <UserProfile myPageItems={myPageItems} />
        </div>
        {renderContent()}
        <div className={styles.bottomNav}>
          <NavBar clickedIndex={3} />
        </div>
      </main>
    </>
  );
};

export default MyPageContainer;
