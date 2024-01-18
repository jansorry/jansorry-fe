import NagCardFront from '@/components/NagCard/NagCardFront';
import NagCardBack from '@/components/NagCard/NagCardBack';
import NagCardEmpty from '@/components/NagCard/NagCardEmpty';

interface Props {// option
  categoryKey: number;
  cardType: number;
  text?: string;
  width?: number;
}

const NagCard = ({ categoryKey, cardType, text, width }: Props) => {

  const defaultWidth: number = 198;
  const defaultHeightRatio: number = 264 / 198;

  const cardWidth: number = width || defaultWidth;
  const cardHeight: number = cardWidth * defaultHeightRatio;


  switch (cardType){
    case 1:
      return <NagCardFront categoryKey={categoryKey} text={text||''} width={cardWidth} height={cardHeight} />

    case 2:
      return <NagCardBack categoryKey={categoryKey} text={text||''} width={cardWidth} height={cardHeight} />

    default:
      return <NagCardEmpty width={cardWidth} height={cardHeight} />
  }

}

export default NagCard;
