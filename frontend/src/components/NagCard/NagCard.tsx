'use client';

import React, { memo } from 'react';
import Image from 'next/image';

import { cardSizes, sizeStyles, textStyles } from './index.css';

interface Props {
  // option
  cardCategory: 'empty' | 'blue' | 'emerald' | 'green' | 'purple' | 'red' | 'yellow' | undefined;
  cardType: 'empty' | 'front' | 'back' | undefined;
  cardSize: 'medium' | 'large' | 'small' | 'xSmall' | undefined;
  textStyle: 'comment' | 'category' | 'nag' | undefined;

  text?: string;
}

interface CardTextProps {
  text: string | undefined;
  textClass: string;
}

const CardText = memo(({ text, textClass }: CardTextProps) => {
  return <span className={textClass}>{text}</span>;
});

const NagCardContent = ({ cardCategory, cardType, cardSize, textStyle, text }: Props) => {
  const imgSrc =
    cardType || cardCategory ? `/nag-card/nagcard-${cardCategory}-${cardType}.png` : '/nag-card/nagcard-empty.png';
  const sizeClass = cardSize ? sizeStyles[cardSize] : sizeStyles.medium;
  let textClass;
  if (textStyle === 'nag' && cardCategory && cardCategory in textStyles.nag) {
    textClass = textStyles.nag[cardCategory];
  } else if (textStyle === 'comment' || textStyle === 'category') {
    textClass = textStyles[textStyle];
  } else {
    textClass = textStyles.nag.empty;
  }

  return (
    <div className={sizeClass}>
      <CardText text={text} textClass={textClass} />
      <Image
        src={imgSrc}
        alt={`${cardCategory}카드`}
        layout='fixed'
        width={cardSize ? cardSizes[cardSize].width : cardSizes.medium.width}
        height={cardSize ? cardSizes[cardSize].height : cardSizes.medium.height}
        objectFit='cover'
        objectPosition='center'
      />
    </div>
  );
};

export default NagCardContent;
