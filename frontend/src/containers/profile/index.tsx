'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { IconSetting } from '#/svgs';
import { userDataResponse } from '@/types/userData';

import Header from '@/components/Header';
import * as styles from './index.css';
import ProfileWithContent from './ProfileWithContent';
import ProfileNoContent from './ProfileNoContent';
import NavBar from '@/components/NavBar';
import { UserProfileImage } from '@/components/UserPreview/UserProfileImage';

interface Props {
  username: string;
}

const UserProfile = ({ username }: Props) => {
  const router = useRouter();
  const [userData, setUserData] = useState<userDataResponse>({
    nickname: '',
    imageUrl: '',
    followerCnt: 0,
    followingCnt: 0,
  });
  // 더미 데이터
  const dummyUserData: userDataResponse = {
    nickname: 'dummyUser',
    imageUrl: '/images/userProfileImage/temp-userProfile.png',
    followerCnt: 150,
    followingCnt: 75,
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('api/v1/members');
    //     if (!response.ok) {
    //       console.log('올바르지 않은 요청 형식입니다.');
    //     }
    //     const data = await response.json();
    //     setUserData({
    //       nickname: data.nickname,
    //       imageUrl: data.imageUrl,
    //       followerCnt: data.followerCnt,
    //       followingCnt: data.followingCnt,
    //     });
    //   } catch (error) {
    //     console.error('Error fetching data: ', error);
    //   }
    // };
    //
    // fetchData();
    setUserData(dummyUserData);
  }, []);

  const handleConfigClicked = () => {
    router.push('/accounts');
  };

  return (
    <div className={styles.userProfileWrapper}>
      {userData.imageUrl && (
        <UserProfileImage imgSrc={userData.imageUrl} size='large' />
      )}
      <div className={styles.profileDetails}>
        <div className={styles.usernameAndSettings}>
          <span className={styles.username}>{userData.nickname}</span>
          <button
            type='button'
            className={styles.settingsButton}
            onClick={handleConfigClicked}
          >
            <IconSetting />
          </button>
        </div>
        <div className={styles.followInfo}>
          <span>
            <div className={styles.number}>팔로잉 {userData.followerCnt}</div>
          </span>
          <span>
            <div className={styles.number}>팔로워 {userData.followingCnt}</div>
          </span>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  const [nagCount, setNagCount] = useState<number>(0);
  const [username, setUsername] = useState<string>('');
  const [userData, setUserData] = useState<userDataResponse>({
    nickname: '',
    imageUrl: '',
    followerCnt: 0,
    followingCnt: 0,
  });
  const dummyNagCount: number = 4;
  useEffect(() => {
    // 더미 잔소리 개수 테스트
    setNagCount(dummyNagCount);
    // const fetchUserData = async () => {
    //   try {
    //     const response = await fetch('api/v1/members');
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
    //     const response = await fetch('api/v1/actions');
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
          <UserProfile username={username} />
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
