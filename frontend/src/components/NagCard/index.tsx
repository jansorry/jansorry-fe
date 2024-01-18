
import { style } from '@vanilla-extract/css';

import * as styles from './index.css';
import { cardTypesMap, sizeMap } from '@/components/NagCard/cardSettings';
import NagCardContent from '@/components/NagCard/NagCard';




interface Props {// option
  categoryKey: number;
  cardType: number;
  text?: string;
  size: number;
}

const NagCard = ({ categoryKey, cardType, size, text }: Props) => {
  const cardColor: string | undefined = cardTypesMap.get(cardType);
  const cardSize: string | undefined = sizeMap.get(size);

  // If cardSize is undefined, default to a predefined style or an empty string
  const sizeClassName = cardSize ? styles[cardSize] : '';

  return (
    <NagCardContent
      className={sizeClassName}
      cardColor={cardColor}
      cardType={cardType}
      text={text}
    />
  );
}

// const NagCard = ({ categoryKey, cardType, size, text }: Props) => {
//
//   const cardColor : string | undefined = cardTypesMap.get(cardType);
//   // @ts-ignore
//   const cardSize : string = sizeMap.get(size);
//   //  이럴때 어떻게?
//
//   const sizeClassName = styles.{cardSize};
//
//   return<NagCardContent className={`style.${cardSize}Size`} cardColor={cardColor} cardType={cardType} text={text} />
//
// }

export default NagCard;
