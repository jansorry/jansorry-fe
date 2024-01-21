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

  const cardCategory: 'empty' | 'blue' | 'emerald' | 'green' | 'purple' | 'red' | 'yellow' | '[ERROR] cardCategory' =
    cardCategoryMap.get(categoryKey) ?? '[ERROR] cardCategory';
  const cardType: 'empty' | 'front' | 'back' | '[ERROR] cardType' = cardTypesMap.get(typeKey) ?? '[ERROR] cardType';

  const cardSize: 'medium' | 'large' | 'small' | 'xSmall' | '[ERROR] cardSize' =
    cardSizeMap.get(sizeKey) ?? '[ERROR] cardSize';

  const textStyle: 'comment' | 'category' | 'nag' | '[ERROR] textStyle' =
    textStyleMap.get(textStyleKey) ?? '[ERROR] textStyle';

  //  임시 오류 검사
  const isError = [cardCategory, cardType, cardSize, textStyle].some((value) => value.startsWith('[ERROR]'));
  if (isError) {
    return (
      <div>
        `오류가 발생했습니다. 입력 값을 확인해주세요.${cardCategory}${cardType}${cardSize}${textStyle}`
      </div>
    );
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
