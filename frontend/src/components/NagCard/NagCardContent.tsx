'use client';

import React, { memo } from 'react';
import Image from 'next/image';

import { cardSizes, sizeStyles, textStyles } from './index.css';

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
  textStyle: 'comment' | 'category' | 'nag';

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
}: Props) => {
  const imgSrc: string =
    cardType || cardCategory
      ? `/images/nag-card/nagcard-${cardCategory}-${cardType}.png`
      : '/images/nag-card/nagcard-empty-empty.png';
  const sizeClassName: string = cardSize
    ? sizeStyles[cardSize]
    : sizeStyles.medium;
  let textClassName;
  if (textStyle === 'nag' && cardCategory && cardCategory in textStyles.nag) {
    textClassName = textStyles.nag[cardCategory];
  } else if (textStyle === 'comment' || textStyle === 'category') {
    textClassName = textStyles[textStyle];
  } else {
    textClassName = textStyles.nag.empty;
  }

  return (
    <div className={sizeClassName}>
      <CardText textClassName={textClassName} text={text} />
      <Image
        src={imgSrc}
        alt={`${cardCategory}카드`}
        width={cardSize ? cardSizes[cardSize].width : cardSizes.medium.width}
        height={cardSize ? cardSizes[cardSize].height : cardSizes.medium.height}
        objectFit='cover'
        objectPosition='center'
      />
    </div>
  );
};

export default NagCardContent;
