'use client';

import { useEffect, useState } from 'react';

import { userDataResponse, actionData } from '@/types/userData';
import { UserProfile } from '@/containers/mypage/UserProfile';
import { getMyPage } from '@/services/mypage';

import Header from '@/components/Header';
import * as styles from './index.css';
import ProfileWithContent from './ProfileWithContent';
import ProfileNoContent from './ProfileNoContent';
import NavBar from '@/components/NavBar';
import PostActionButton from '@/components/PostActionButton';
import Loading from '@/components/Loading';

const MyPageContainer = () => {
  const [myPageItems, setMyPageItems] = useState<userDataResponse>({
    nickname: '',
    imageUrl: 0,
    followerCnt: 0,
    followingCnt: 0,
  });
  const [actionsItems, setActionsItems] = useState<actionData>({
    content: [],
    last: true,
  });
  const [receiptCount, setReceiptCount] = useState<number>(0);
  const [nagCount, setNagCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchMypageData = async () => {
    const { userData, actionsData, receiptCountData } = await getMyPage();
    setMyPageItems(userData);
    setActionsItems(actionsData);
    setReceiptCount(receiptCountData);
    setNagCount(actionsData.content?.length ?? 0);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMypageData();
  }, []);

  return (
    <>
      <Header title='나의 잔소리 목록' />
      {isLoading ? (
        <Loading />
      ) : (
        <main className={styles.profileWrapper}>
          <div className={styles.profileContentWrapper}>
            <UserProfile {...myPageItems} />
          </div>
          {nagCount > 0 ? (
            <ProfileWithContent
              content={actionsItems.content}
              last={actionsItems.last}
              receiptCount={receiptCount}
            />
          ) : (
            <ProfileNoContent receiptCount={receiptCount} />
          )}
          <PostActionButton />
          <NavBar clickedIndex={3} />
        </main>
      )}
    </>
  );
};

export default MyPageContainer;
