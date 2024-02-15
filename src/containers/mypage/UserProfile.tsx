'use client';

import { useRouter } from 'next/navigation';

import * as styles from '@/containers/mypage/index.css';
import { IconSetting } from '#/svgs';

import { UserProfileImage } from '@/components/UserPreview/UserProfileImage';

interface Props {
  nickname: string;
  imageUrl: number;
  followerCnt: number;
  followingCnt: number;
}

export const UserProfile = ({
  nickname,
  imageUrl,
  followerCnt,
  followingCnt,
}: Props) => {
  const router = useRouter();

  const handleConfigClicked = () => {
    router.push('/management');
  };

  return (
    <div className={styles.userProfileWrapper}>
      {imageUrl && <UserProfileImage imgSrc={imageUrl} size='large' />}
      <div className={styles.profileDetails}>
        <div className={styles.nicknameAndSettings}>
          <span className={styles.nicknameBox}>{nickname}</span>
          <button
            type='button'
            className={styles.transparentButton}
            onClick={() => handleConfigClicked()}
            aria-label='settings'
          >
            <IconSetting />
          </button>
        </div>
        <div className={styles.followInfo}>
          <button
            type='button'
            className={styles.transparentButton}
            onClick={() => router.push('/followers')}
          >
            <div className={styles.followNumber}>팔로워 {followerCnt}</div>
          </button>
          <button
            type='button'
            className={styles.transparentButton}
            onClick={() => router.push('/followings')}
          >
            <div className={styles.followNumber}>팔로잉 {followingCnt}</div>
          </button>
        </div>
      </div>
    </div>
  );
};
