import React, { memo } from 'react';
import Image from 'next/image';

import { cardSizes, cardText } from './index.css';

interface Props {
  cardCategory:
    | 'empty'
    | 'blue'
    | 'emerald'
    | 'green'
    | 'purple'
    | 'red'
    | 'yellow';
  cardType: 'empty' | 'front' | 'back';
  cardSize: 'medium' | 'large' | 'small' | 'xSmall';
  textStyle: 'comment' | 'nag' | 'category';
  shadow: boolean | undefined;
  text?: string;
}

interface CardTextProps {
  text?: string;
  textClassName: string;
}

const CardText = memo(({ text, textClassName }: CardTextProps) => {
  return <span className={textClassName}>{text}</span>;
});

const NagCardContent = ({
  cardCategory,
  cardType,
  cardSize,
  textStyle,
  text,
  shadow,
}: Props) => {
  const imgSrc: string =
    cardType || cardCategory
      ? `/images/nag-card/nagcard-${cardCategory}-${cardType}.webp`
      : '/images/nag-card/nagcard-empty-empty.webp';

  const position: 'center' | 'bottom' =
    textStyle === 'comment' ? 'center' : 'bottom';
  const fontColor = cardSize === 'large' ? 'empty' : cardCategory;

  return (
    <div className={cardSizes({ size: cardSize, shadow })}>
      <CardText
        textClassName={cardText({
          position,
          fontSize: cardSize,
          color: fontColor,
        })}
        text={text}
      />
      <Image src={imgSrc} alt={`${cardCategory}카드`} fill sizes='400px' />
    </div>
  );
};

export default NagCardContent;
