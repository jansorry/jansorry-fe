import * as styles from '@/containers/profile/index.css';
import { NagCardKeyOptions } from '@/types/nagCard';

import Button from '@/components/Button';
import NagCard from '@/components/NagCard';

const ProfileNoContent = () => {
  const card: NagCardKeyOptions = {
    categoryKey: 0,
    typeKey: 0,
    sizeKey: 2,
    textStyleKey: 0,
  };
  return (
    <div className={styles.profileNoContentStyle}>
      <div className={styles.profileText({ contentType: 'card' })} />
      <Button type='button' size='large' colorStyle='lightGray' filled>
        영수증 발급
      </Button>
      <div
        className={`${styles.profileText({ contentType: 'card' })} ${styles.noCardWrapper}`}
      >
        <NagCard card={card} />
      </div>
    </div>
  );
};

export default ProfileNoContent;
