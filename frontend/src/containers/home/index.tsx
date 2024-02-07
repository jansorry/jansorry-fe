import Image from 'next/image';

import Empty from '@/containers/home/Empty';
import CardsPresent from '@/containers/home/CardsPresent';
import { homeCardsResponse } from '@/types/home';

import * as styles from './index.css';
import NavBar from '@/components/NavBar';
import PostActionButton from '@/components/PostActionButton';

const Home = ({ count, categoryList }: homeCardsResponse) => {
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
        <div className={styles.homeText({ contentType: 'title' })}>
          당신의 잔소리
        </div>
        {count ? <CardsPresent {...{ count, categoryList }} /> : <Empty />}
      </div>

      <PostActionButton />
      <NavBar clickedIndex={2} />
    </main>
  );
};

export default Home;
