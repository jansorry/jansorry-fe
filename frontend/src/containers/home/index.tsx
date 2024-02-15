'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import Empty from '@/containers/home/Empty';
import CardsPresent from '@/containers/home/CardsPresent';
import { getHomeCards } from '@/services/home';

import * as styles from './index.css';
import NavBar from '@/components/NavBar';
import PostActionButton from '@/components/PostActionButton';

const Home = () => {
  const [count, setCount] = useState<number>(0);
  const [categoryList, setCategoryList] = useState<number[]>([]);

  const fetchHomeData = async () => {
    const { count: countData, categoryList: categoryListData } =
      await getHomeCards();
    setCount(countData);
    setCategoryList(categoryListData);
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

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
