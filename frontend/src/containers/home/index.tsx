import Image from 'next/image';

import Empty from '@/containers/home/Empty';
import CardsPresent from '@/containers/home/CardsPresent';

import * as styles from './index.css';
import NavBar from '@/components/NavBar';

const Home = () => {
  const nagCount = 0;

  return (
    <main className={styles.homeWrapper}>
      <Image
        src='/images/home/bg-cut.png'
        width={0}
        height={0}
        alt='home-bg'
        sizes='100vw'
        className={`${styles.homeBg}`}
      />

      <div className={`${styles.homeContentWrapper}`}>
        <div className={styles.homeText({ contentType: 'title' })}>당신의 잔소리</div>
        {nagCount ? <CardsPresent /> : <Empty />}
      </div>

      <div className={styles.bottomNav}>
        <NavBar clickedIndex={2} />
      </div>
    </main>
  );
};

export default Home;
