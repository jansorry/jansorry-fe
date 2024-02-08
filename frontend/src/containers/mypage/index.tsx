'use client';

import { useEffect, useState } from 'react';

import { userDataResponse, actionTotalDataResponse } from '@/types/userData';
import { totalReceiptCountResponse } from '@/types/receipt';
import { UserProfile } from '@/containers/mypage/UserProfile';

import Header from '@/components/Header';
import * as styles from './index.css';
import ProfileWithContent from './ProfileWithContent';
import ProfileNoContent from './ProfileNoContent';
import NavBar from '@/components/NavBar';
import Loading from '@/components/Loading';
import PostActionButton from '@/components/PostActionButton';

interface Props {
  myPageItems: userDataResponse;
  actionsData: actionTotalDataResponse;
  receiptCount: number;
}

const MyPageContainer = ({ myPageItems, actionsData, receiptCount }: Props) => {
  const [NagCount, setNagCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {

    const contentLength = actionsData.content?.length ?? 0;
    setNagCount(contentLength);
    setIsLoading(false);
  }, [actionsData]);


  return (
    <>
      <Header title='나의 잔소리 목록' />
      <main className={styles.profileWrapper}>
        <div className={styles.profileContentWrapper}>
          <UserProfile {...myPageItems} />
        </div>
        {NagCount > 0 ? (
            <ProfileWithContent content={actionsData.content} last={actionsData.last} receiptCount = {receiptCount} />
        ) : (
            <ProfileNoContent receiptCount = {receiptCount} />
        )}
        <PostActionButton />
        <NavBar clickedIndex={3} />
      </main>
    </>
  );
};

export default MyPageContainer;
