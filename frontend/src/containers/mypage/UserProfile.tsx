'use client';

import { useRouter } from 'next/navigation';

import { userDataResponse } from '@/types/userData';
import * as styles from '@/containers/mypage/index.css';
import { IconSetting } from '#/svgs';

import { UserProfileImage } from '@/components/UserPreview/UserProfileImage';

interface Props {
  profileItems: userDataResponse;
}

export const UserProfile = ({ profileItems }: Props) => {
  const router = useRouter();

  // 더미 데이터
  const dummyUserData: userDataResponse = {
    nickname: 'dummyUser',
    imageUrl: '/images/userProfileImage/temp-userProfile.png',
    followerCnt: 150,
    followingCnt: 75,
  };

  const handleConfigClicked = () => {
    router.push('/management');
  };

  return (
    <div className={styles.userProfileWrapper}>
      {dummyUserData.imageUrl && (
        <UserProfileImage imgSrc={dummyUserData.imageUrl} size='large' />
      )}
      <div className={styles.profileDetails}>
        <div className={styles.usernameAndSettings}>
          <span className={styles.username}>{dummyUserData.nickname}</span>
          <button
            type='button'
            className={styles.settingsButton}
            onClick={() => handleConfigClicked()}
          >
            <IconSetting />
          </button>
        </div>
        <div className={styles.followInfo}>
          <span>
            <div className={styles.followNumber}>
              팔로잉 {dummyUserData.followingCnt}
            </div>
          </span>
          <span>
            <div className={styles.followNumber}>
              팔로워 {dummyUserData.followerCnt}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
