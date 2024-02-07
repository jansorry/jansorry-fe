import * as styles from './index.css';
import { profileText } from './index.css';
import { UserProfileImage } from '@/components/UserPreview/UserProfileImage';

interface Props {
  imgSrc: number;
  nickname: string;
  subText?: string;
  size?: 'xLarge';
}

export const UserPreview = ({ imgSrc, nickname, subText, size }: Props) => {
  return (
    <div className={styles.userPreview}>
      <UserProfileImage
        imgSrc={imgSrc}
        size={size === 'xLarge' ? 'xLarge' : undefined}
      />
      <div className={profileText.box}>
        <div
          className={
            size === 'xLarge' ? profileText.nicknameLarge : profileText.nickname
          }
        >
          {nickname}
        </div>
        {subText && <div className={profileText.subText}>{subText}</div>}
      </div>
    </div>
  );
};
