import * as styles from './index.css';
import { profileText } from './index.css';
import { UserProfileImage } from '@/components/UserPreview/UserProfileImage';

interface Props {
  imgSrc: string;
  nickname: string;
  subText?: string;
}

export const UserPreview = ({ imgSrc, nickname, subText }: Props) => {
  return (
    <div className={styles.userPreview}>
      <UserProfileImage imgSrc={imgSrc} />
      <div className={profileText.box}>
        <div className={profileText.nickname}>{nickname}</div>
        {subText && <div className={profileText.subText}>{subText}</div>}
      </div>
    </div>
  );
};
