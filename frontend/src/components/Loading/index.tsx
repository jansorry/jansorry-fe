import Image from 'next/image';

import { IconLoading } from '#/svgs';

import * as styles from './index.css';

const Loading = () => {
  return (
    <div className={styles.LoadingWrapper}>
      <IconLoading />
    </div>
  );
};

export default Loading;
