import * as styles from './index.css';

interface Props {// option
  categoryKey: number;
  text?: string;
  width: number;
  height: number;
}


const NagCardBack = ({ categoryKey, text, width, height }: Props) => {
  let value:string = 'empty';
let imgSrc :string = '/nag-card/nagcard-empty.png';
  switch (categoryKey){
    case 0:
      // imgSrc = '/nag-card/nagcard-blue-back.png'
      value = 'blue-back';
      break;
    case 1:
      imgSrc = '/nag-card/nagcard-emerald-back.png'
      break;
    case 2:
      imgSrc = '/nag-card/nagcard-emerald-back.png'
      break;
    case 3:
      imgSrc = '/nag-card/nagcard-green-back.png'
      break;
    case 4:
      imgSrc = '/nag-card/nagcard-purple-back.png'
      break;
    case 5:
      imgSrc = '/nag-card/nagcard-red-back.png'
      break;
    case 6:
      imgSrc = '/nag-card/nagcard-yellow-back.png'
      break;
    default:

  }

  console.log(imgSrc);
  imgSrc = `/nag-card/nagcard-${value}.png`;

  return (
 <div></div>
  )
}

export default NagCardBack;