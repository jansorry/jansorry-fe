'use client';

import { useRouter } from 'next/navigation';

import { userDataResponse } from '@/types/userData';
import * as styles from '@/containers/mypage/index.css';
import { IconSetting } from '#/svgs';

import { UserProfileImage } from '@/components/UserPreview/UserProfileImage';

interface Props {
  myPageItems: userDataResponse;
}

export const UserProfile = ({ myPageItems }: Props) => {
  const router = useRouter();

  const UserData: userDataResponse = {
    nickname: myPageItems.nickname,
    imageUrl: myPageItems.imageUrl,
    followingCnt: myPageItems.followingCnt,
    followerCnt: myPageItems.followerCnt,
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
