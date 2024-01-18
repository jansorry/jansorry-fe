import Image from 'next/image';

interface Props {// option
  cardColor: string | undefined;
  cardType: number;
  text?: string;
}
const NagCardContent =({cardColor, cardType, text}:Props) => {

  return (
    <div>
    <span>{text}</span>
    <Image src={`/nag-card/nagcard-${cardColor}-${cardType}.png`} alt={`${cardColor}카드`}            layout={'fill'}
           objectFit="cover"
           objectPosition="center" />
  </div>
  )
}

export default NagCardContent;