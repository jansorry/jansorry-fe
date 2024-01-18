import Image from 'next/image';

interface Props {// option
  width: number;
  height:number;
}

//카드 색상의 알파벳 순으로 일단 0부터 할당
const NagCardEmpty = ({ width, height }: Props) => {

  return (
    <Image src={'/nag-card/nagcard-empty.png'} width={width} height={height} alt={'휑 글자가 쓰인 화면'} />
  )
}

export default NagCardEmpty;