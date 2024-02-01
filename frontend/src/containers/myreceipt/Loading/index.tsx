import AnimatedNumber from '@/containers/myreceipt/Loading/AnimatedNumber';
import AnimatedImage from '@/containers/myreceipt/Loading/AnimatedImage';

import * as styles from './index.css';

//  get createReceipt Api

// post receipts

const Loading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.title}>당신의 영수증이 발급되고 있습니다</div>
      <AnimatedNumber />
      <AnimatedImage />
    </div>
  );
};

export default Loading;
