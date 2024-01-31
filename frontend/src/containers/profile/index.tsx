'use client';

import { useState, useEffect } from 'react';

import { userDataResponse } from '@/types/userData';
import { UserProfile } from '@/containers/profile/UserProfile';

import Header from '@/components/Header';
import * as styles from './index.css';
import ProfileWithContent from './ProfileWithContent';
import ProfileNoContent from './ProfileNoContent';
import NavBar from '@/components/NavBar';

interface Props {
  username: string;
}

const Profile = ({ username }: Props) => {
  const [nagCount, setNagCount] = useState<number>(0);
  const [setUsername] = useState<string>('');
  const [userData, setUserData] = useState<userDataResponse>({
    nickname: '',
    imageUrl: '',
    followerCnt: 0,
    followingCnt: 0,
  });

  const dummyNagCount: number = 4;

  useEffect(() => {
    // 잔소리 개수 더미 테스트 코드
    setNagCount(dummyNagCount);
    // const fetchUserData = async () => {
    //   try {
    //     const response = await fetch('/api/members');
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     const data = await response.json();
    //     setUsername(data.nickname); // username 상태 업데이트
    //     setUserData({
    //       nickname: data.nickname,
    //       imageUrl: data.imageUrl,
    //       followerCnt: data.followerCnt,
    //       followingCnt: data.followingCnt,
    //     });
    //   } catch (error) {
    //     console.error('Error fetching user data: ', error);
    //   }
    // };
    //
    // // 잔소리 갯수를 불러오는 함수
    // const fetchNagCount = async () => {
    //   try {
    //     const response = await fetch('/api/actions');
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     const data = await response.json();
    //     setNagCount(data.content.length); // nagCount 상태 업데이트
    //   } catch (error) {
    //     console.error('Error fetching nag count: ', error);
    //   }
    // };
    //
    // fetchUserData();
    // fetchNagCount();
  }, []);
  return (
    <>
      <Header title='나의 잔소리 목록' />
      <main className={styles.profileWrapper}>
        <div className={styles.profileContentWrapper}>
          <UserProfile username={nickname} />
        </div>
        <div>{nagCount ? <ProfileWithContent /> : <ProfileNoContent />}</div>
        <div className={styles.bottomNav}>
          <NavBar clickedIndex={3} />
        </div>
      </main>
    </>
  );
};

export default Profile;
