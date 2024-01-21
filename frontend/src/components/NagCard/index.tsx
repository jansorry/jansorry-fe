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

  const cardCategory: 'empty' | 'blue' | 'emerald' | 'green' | 'purple' | 'red' | 'yellow' | 'ERROR'=
    cardCategoryMap.get(categoryKey) ?? 'ERROR';
  const cardType: 'empty' | 'front' | 'back' | 'ERROR'  = cardTypesMap.get(typeKey) ?? 'ERROR';

  const cardSize: 'medium' | 'large' | 'small' | 'xSmall' | 'ERROR'= cardSizeMap.get(sizeKey)  ?? 'ERROR';

  const textStyle: 'comment' | 'category' | 'nag' | 'ERROR' =  textStyleMap.get(textStyleKey)  ?? 'ERROR';

  if (cardCategory === 'ERROR' || cardType === 'ERROR' || cardSize === 'ERROR' || textStyle === 'ERROR') {
    return <div>오류입니다</div>;
  }

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
