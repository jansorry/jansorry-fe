'use client';

import { NagCardKeyOptions } from '@/types/nagCard';

import { cardTypesMap, cardSizeMap, cardCategoryMap, textStyleMap } from '@/components/NagCard/cardOptions';
import NagCardContent from '@/components/NagCard/NagCard';

interface Props {
  // 인덱스로 받는 타입
  card: NagCardKeyOptions;
}

const NagCard = ({ card }: Props) => {
  const { categoryKey, typeKey, sizeKey, textStyleKey, text } = card;

  const cardCategory: 'empty' | 'blue' | 'emerald' | 'green' | 'purple' | 'red' | 'yellow' | undefined =
    cardCategoryMap.get(categoryKey);
  const cardType: 'empty' | 'front' | 'back' | undefined = cardTypesMap.get(typeKey);
  const cardSize: 'medium' | 'large' | 'small' | 'xSmall' | undefined = cardSizeMap.get(sizeKey);
  const textStyle: 'comment' | 'category' | 'nag' | undefined = textStyleMap.get(textStyleKey);

  return (
    <NagCardContent
      cardCategory={cardCategory}
      cardType={cardType}
      cardSize={cardSize}
      textStyle={textStyle}
      text={text}
    />
  );
};

export default NagCard;
