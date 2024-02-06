import { AnimationLoading } from '#/svgs';

import * as styles from './index.css';

const Loading = () => {
  return (
    <div className={styles.LoadingWrapper}>
      <AnimationLoading />
    </div>
  );
};

export default Loading;
