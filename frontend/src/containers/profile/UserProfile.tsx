import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { userDataResponse } from '@/types/userData';
import * as styles from '@/containers/profile/index.css';
import { IconSetting } from '#/svgs';

import { UserProfileImage } from '@/components/UserPreview/UserProfileImage';

interface Props {
  username: string;
}
export const UserProfile = ({ username }: Props) => {
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
            <div className={styles.followNumber}>
              팔로잉 {userData.followerCnt}
            </div>
          </span>
          <span>
            <div className={styles.followNumber}>
              팔로워 {userData.followingCnt}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
