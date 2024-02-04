'use client';

import { useEffect, useState } from 'react';

import { userDataResponse, actionTotalCount } from '@/types/userData';
import { UserProfile } from '@/containers/mypage/UserProfile';
import { getActionTotalCount } from '@/services/mypage';

import Header from '@/components/Header';
import * as styles from './index.css';
import ProfileWithContent from './ProfileWithContent';
import ProfileNoContent from './ProfileNoContent';
import NavBar from '@/components/NavBar';
import Loading from '@/components/Loading';

interface Props {
  myPageItems: userDataResponse;
}

const MyPageContainer = ({ myPageItems }: Props) => {
  const [NagCount, setNagCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const actionCount = await getActionTotalCount();
        setNagCount(actionCount.content.length);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div>
          <Loading />
        </div>
      );
    }

    return NagCount > 0 ? (
      <ProfileWithContent NagCount={NagCount} />
    ) : (
      <ProfileNoContent />
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
