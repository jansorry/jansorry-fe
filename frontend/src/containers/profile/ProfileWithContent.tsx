import * as styles from '@/containers/profile/index.css';
import { NagCardKeyOptions } from '@/types/nagCard';

import Button from '@/components/Button';
import NagCard from '@/components/NagCard';

const ProfileWithContent = () => {
  // 현재 NagCardKeyOptions는 데이터가 없어서 임시로 구현
  const card: NagCardKeyOptions = {
    categoryKey: 2,
    typeKey: 1,
    sizeKey: 2,
    textStyleKey: 0,
  };
  return (
    <div className={styles.profileNoContentStyle}>
      <div className={styles.profileText({ contentType: 'card' })} />
      <Button type='button' size='large' colorStyle='blue' filled>
        영수증 발급
      </Button>
      <div className={styles.profileText({ contentType: 'card' })}>
        <NagCard card={card} />
      </div>
    </div>
  );
};

export default ProfileWithContent;
