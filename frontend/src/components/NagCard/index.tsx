
// eslint-disable-next-line import/named
import { cardTypesMap, sizeMap } from '@/components/NagCard/cardSettings';

interface Props {// option
  categoryKey: number;
  cardType: number;
  text?: string;
  size: number;
}

const NagCard = ({ categoryKey, cardType, size, text }: Props) => {

  const cardColor : string | undefined = cardTypesMap.get(cardType);
  const cardSize : string | undefined = sizeMap.get(size);


}

export default NagCard;
