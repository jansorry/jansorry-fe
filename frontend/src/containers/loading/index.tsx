import AnimatedNumber from '@/containers/loading/AnimatedNumber';
import AnimatedImage from '@/containers/loading/AnimatedImage';

import * as styles from './index.css';

const Loading = () => {
  return (
    <main className={styles.loadingWrapper}>
      <div className={styles.title}>당신의 영수증이 발급되고 있습니다.</div>
      <AnimatedNumber />
      <AnimatedImage />
    </main>
  );
};

export default Loading;
