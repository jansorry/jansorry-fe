'use client';

import { useEffect, useState } from 'react';

import * as styles from '@/styles/common.css';
import { contentWrapper } from '@/styles/wrapper.css';
import { getFollowers } from '@/services/follow';
import { followerResponse } from '@/types/follow';
import createCounter from '@/utils/counter';

import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
import { UserPreview } from '@/components/UserPreview';
import Button from '@/components/Button';

const Followers = () => {
  const [data, setData] = useState<followerResponse[]>([]);

  useEffect(() => {
    const getData = async () => {
      const followerData = await getFollowers();
      setData(followerData);
    };

    getData();
  }, []);

  return (
    <div className={styles.defaultWrapper({ width: 'max', height: 'max' })}>
      <Header title='follow' hasPrevious />
      <div className={contentWrapper({ contentArea: 'headerAndNavBar' })}>
        {data.map((item, index) => (
          <div key={`${createCounter()}`}>
            <UserPreview imgSrc={item.imageUrl} nickname={item.nickname} />
            <Button type='button' size='small' colorStyle='black' filled>
              팔로우
            </Button>
          </div>
        ))}
      </div>
      <NavBar />
    </div>
  );
};

export default Followers;
