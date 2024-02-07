'use client';

import { useRouter } from 'next/navigation';

import * as styles from '@/containers/management/index.css';
import { IconEdit } from '#/svgs';

import { UserProfileImage } from '@/components/UserPreview/UserProfileImage';

interface Props {
  nickname: string;
  imageUrl: string;
}

export const ManagementUserProfile = ({ nickname, imageUrl }: Props) => {
  const router = useRouter();

  return (
    <div className={styles.managementProfileContentWrapper}>
      {imageUrl && <UserProfileImage imgSrc={imageUrl} size='large' />}
      <div className={styles.managementProfileDetails}>
        <div className={styles.nicknameAndEdit}>
          <span className={styles.nicknameManagement}>{nickname}</span>
          <button
            type='button'
            className={styles.nicknameEditButton}
            onClick={() => router.push('/management/nicknameEdit')}
          >
            <IconEdit />
          </button>
        </div>
      </div>
    </div>
  );
};
