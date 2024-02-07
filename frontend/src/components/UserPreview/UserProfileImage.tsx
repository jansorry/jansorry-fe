import Image from 'next/image';

import * as styles from '@/components/UserPreview/index.css';

interface Props {
  imgSrc: number;
  size?: 'large' | 'xLarge';
  nickname?: string;
}
export const UserProfileImage = ({ imgSrc, size, nickname }: Props) => {
  return (
    <Image
      src={`/images/user-profile/user-img-${imgSrc}.webp`}
      width={100}
      height={100}
      alt={`${nickname || ''} profileImage`}
      className={styles.profileImage({ sizes: size || undefined })}
    />
  );
};
