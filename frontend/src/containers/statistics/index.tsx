import Image from 'next/image';

import * as styles from './index.css';

const Statistics = () => {
  return (
    <Image
      src='/images/statistics/statistics.webp'
      alt='statistics'
      width={0}
      height={0}
      sizes='100vw'
      className={styles.statisticsImage}
    />
  );
};

export default Statistics;
