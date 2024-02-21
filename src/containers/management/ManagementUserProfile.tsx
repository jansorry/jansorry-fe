'use client';

import { useRouter } from 'next/navigation';

import * as styles from '@/containers/management/index.css';
import { IconEdit } from '#/svgs';
import { managementUserDataResponse } from '@/types/managementProfile';

import { UserProfileImage } from '@/components/UserPreview/UserProfileImage';

export const ManagementUserProfile = ({
  nickname,
  imageUrl,
}: managementUserDataResponse) => {
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
            aria-label='rename'
          >
            <IconEdit />
          </button>
        </div>
      </div>
    </div>
  );
};
