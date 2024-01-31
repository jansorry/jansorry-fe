import { nagDetails } from '@/types/nag';
import { NagCardKeyOptions } from '@/types/nagCard';

import Header from '@/components/Header';
import NagCard from '@/components/NagCard';
import Button from '@/components/Button';
import * as styles from './index.css';

const CreateCard = ({ categoryId, nagId, content }: nagDetails) => {
  const cardOption: NagCardKeyOptions = {
    categoryKey: categoryId,
    typeKey: 1,
    sizeKey: 3,
    textStyleKey: 1,
    text: content,
  };

  return (
    <>
      <Header title='내 카드 등록' hasPrevious />
      <div className={styles.createCardWrapper}>
        <NagCard cardOption={cardOption} />
        <Button type='button' size='large' colorStyle='blue' filled>
          잔소리 반응 등록하기
        </Button>
      </div>
    </>
  );
};

export default CreateCard;
