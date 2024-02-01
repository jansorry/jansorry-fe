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

  const UserData: userDataResponse = {
    nickname: profileItems.nickname,
    imageUrl: profileItems.imageUrl,
    followingCnt: profileItems.followingCnt,
    followerCnt: profileItems.followerCnt,
  };

  const handleConfigClicked = () => {
    router.push('/management');
  };

  return (
    <div className={styles.userProfileWrapper}>
      {UserData.imageUrl && (
        <UserProfileImage imgSrc={UserData.imageUrl} size='large' />
      )}
      <div className={styles.profileDetails}>
        <div className={styles.usernameAndSettings}>
          <span className={styles.username}>{UserData.nickname}</span>
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
              팔로잉 {UserData.followingCnt}
            </div>
          </span>
          <span>
            <div className={styles.followNumber}>
              팔로워 {UserData.followerCnt}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
