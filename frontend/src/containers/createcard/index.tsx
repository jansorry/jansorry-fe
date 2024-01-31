import { nagDetails } from '@/types/nag';
import { NagCardKeyOptions } from '@/types/nagCard';

import Header from '@/components/Header';
import NagCard from '@/components/NagCard';

const CreateCard = ({ categoryId, nagId, content, price }: nagDetails) => {
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
      <div>
        <NagCard cardOption={cardOption} />
      </div>
    </>
  );
};

export default CreateCard;
