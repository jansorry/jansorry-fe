'use client';

import { useRouter } from 'next/navigation';

import * as styles from '@/containers/management/index.css';
import { IconEdit } from '#/svgs';
import { managementUserDataResponse } from '@/types/managementProfile';

import { UserProfileImage } from '@/components/UserPreview/UserProfileImage';

interface Props {
  managementItems: managementUserDataResponse;
}

export const ManagementUserProfile = ({ managementItems }: Props) => {
  const router = useRouter();

  const ManagementUserData: managementUserDataResponse = {
    nickname: managementItems.nickname,
    imageUrl: managementItems.imageUrl,
  };

  return (
    <div className={styles.managementProfileContentWrapper}>
      {ManagementUserData.imageUrl && (
        <UserProfileImage imgSrc={ManagementUserData.imageUrl} size='large' />
      )}
      <div className={styles.managementProfileDetails}>
        <div className={styles.nicknameAndEdit}>
          <span className={styles.nicknameManagement}>
            {ManagementUserData.nickname}
          </span>
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
