import AnimatedNumber from '@/containers/newreceiptloading/createloading/AnimatedNumber';
import AnimatedImage from '@/containers/newreceiptloading/createloading/AnimatedImage';

import * as styles from './index.css';

const CreateLoading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.title}>당신의 영수증이 발급되고 있습니다</div>
      <AnimatedNumber />
      <AnimatedImage />
    </div>
  );
};

export default CreateLoading;
